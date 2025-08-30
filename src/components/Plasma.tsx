'use client'

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: "forward" | "reverse" | "pingpong";
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const hexToRgb = (hex: string): number[] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`;

export const Plasma: React.FC<PlasmaProps> = ({
  color = "#ffffff",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const rafRef = useRef<number>(0);
  const t0Ref = useRef<number>(performance.now());
  const roRef = useRef<ResizeObserver | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseHandlerRef = useRef<((e: MouseEvent) => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (canvasRef.current) return; // Only create canvas once

    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];
    const directionMultiplier = direction === "reverse" ? -1.0 : 1.0;

    // Check for WebGL 2 support
    const testCanvas = document.createElement('canvas');
    const testGl = testCanvas.getContext('webgl2');
    if (!testGl) {
      // Fallback: create a simple gradient background
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'w-full h-full bg-gradient-to-br from-blue-500/60 via-purple-500/40 to-pink-500/60 animate-pulse';
      fallbackDiv.style.animationDuration = '4s';
      containerRef.current.appendChild(fallbackDiv);
      return;
    }

    try {
      const renderer = new Renderer({
        webgl: 2,
        alpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      });
      rendererRef.current = renderer;
      const gl = renderer.gl;
      const canvas = gl.canvas as HTMLCanvasElement;
      canvasRef.current = canvas;
      canvas.style.display = "block";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      containerRef.current.appendChild(canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vertex,
        fragment: fragment,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new Float32Array([1, 1]) },
          uCustomColor: { value: new Float32Array(customColorRgb) },
          uUseCustomColor: { value: useCustomColor },
          uSpeed: { value: speed * 0.4 },
          uDirection: { value: directionMultiplier },
          uScale: { value: scale },
          uOpacity: { value: opacity },
          uMouse: { value: new Float32Array([0, 0]) },
          uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 },
        },
      });
      programRef.current = program;
      const mesh = new Mesh(gl, { geometry, program });
      meshRef.current = mesh;

      const handleMouseMove = (e: MouseEvent) => {
        if (!mouseInteractive || !containerRef.current || !program) return;
        const rect = containerRef.current.getBoundingClientRect();
        mousePos.current.x = e.clientX - rect.left;
        mousePos.current.y = e.clientY - rect.top;
        const mouseUniform = program.uniforms.uMouse?.value as Float32Array;
        if (mouseUniform) {
          mouseUniform[0] = mousePos.current.x;
          mouseUniform[1] = mousePos.current.y;
        }
      };
      mouseHandlerRef.current = handleMouseMove;

      if (mouseInteractive) {
        containerRef.current?.addEventListener("mousemove", handleMouseMove);
      }

      const setSize = () => {
        if (!containerRef.current || !renderer || !program) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));
        renderer.setSize(width, height);
        const res = program.uniforms.iResolution?.value as Float32Array;
        if (res) {
          res[0] = renderer.gl.drawingBufferWidth;
          res[1] = renderer.gl.drawingBufferHeight;
        }
      };

      const ro = new ResizeObserver(setSize);
      roRef.current = ro;
      ro.observe(containerRef.current);
      setSize();

      const loop = (t: number) => {
        if (!renderer || !program || !mesh) return;
        let timeValue = (t - t0Ref.current) * 0.001;
        if (direction === "pingpong") {
          const cycle = Math.sin(timeValue * 0.5) * directionMultiplier;
          if (program.uniforms.uDirection) {
            program.uniforms.uDirection.value = cycle;
          }
        }
        if (program.uniforms.iTime) {
          program.uniforms.iTime.value = timeValue;
        }
        renderer.render({ scene: mesh });
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);

    } catch (error) {
      console.warn('WebGL initialization failed, using fallback:', error);
      // Fallback
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'w-full h-full bg-gradient-to-br from-blue-500/60 via-purple-500/40 to-pink-500/60 animate-pulse';
      fallbackDiv.style.animationDuration = '4s';
      containerRef.current.appendChild(fallbackDiv);
    }
  }, []) // Keep empty dependency array to prevent recreation

  // Handle prop changes without recreating the entire effect
  useEffect(() => {
    if (!programRef.current) return;
    
    const program = programRef.current;
    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];
    const directionMultiplier = direction === "reverse" ? -1.0 : 1.0;

    // Update uniforms when props change
    if (program.uniforms.uCustomColor?.value) {
      const colorUniform = program.uniforms.uCustomColor.value as Float32Array;
      colorUniform[0] = customColorRgb[0];
      colorUniform[1] = customColorRgb[1];
      colorUniform[2] = customColorRgb[2];
    }
    if (program.uniforms.uUseCustomColor) {
      program.uniforms.uUseCustomColor.value = useCustomColor;
    }
    if (program.uniforms.uSpeed) {
      program.uniforms.uSpeed.value = speed * 0.4;
    }
    if (program.uniforms.uDirection && direction !== "pingpong") {
      program.uniforms.uDirection.value = directionMultiplier;
    }
    if (program.uniforms.uScale) {
      program.uniforms.uScale.value = scale;
    }
    if (program.uniforms.uOpacity) {
      program.uniforms.uOpacity.value = opacity;
    }
    if (program.uniforms.uMouseInteractive) {
      program.uniforms.uMouseInteractive.value = mouseInteractive ? 1.0 : 0.0;
    }
  }, [color, speed, direction, scale, opacity, mouseInteractive])

  // Cleanup only on component unmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (roRef.current) roRef.current.disconnect();
      if (mouseInteractive && containerRef.current && mouseHandlerRef.current) {
        containerRef.current.removeEventListener("mousemove", mouseHandlerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} className="plasma-container" />;
};

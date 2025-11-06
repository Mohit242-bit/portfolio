'use client'

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */

import { Suspense, useRef, useLayoutEffect, useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree, invalidate } from '@react-three/fiber'
import { OrbitControls, useGLTF, useFBX, useProgress, Html, Environment, ContactShadows } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import * as THREE from 'three'

interface ModelViewerProps {
  url?: string
  urls?: string[] // For multiple models
  width?: string | number
  height?: number
  modelXOffset?: number
  modelYOffset?: number
  defaultRotationX?: number
  defaultRotationY?: number
  defaultZoom?: number
  minZoomDistance?: number
  maxZoomDistance?: number
  enableMouseParallax?: boolean
  enableManualRotation?: boolean
  enableHoverRotation?: boolean
  enableManualZoom?: boolean
  ambientIntensity?: number
  keyLightIntensity?: number
  fillLightIntensity?: number
  rimLightIntensity?: number
  environmentPreset?: string
  autoFrame?: boolean
  placeholderSrc?: string
  showScreenshotButton?: boolean
  fadeIn?: boolean
  autoRotate?: boolean
  autoRotateSpeed?: number
  onModelLoaded?: () => void
}

const deg2rad = (d: number) => (d * Math.PI) / 180
const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

const Loader = ({ placeholderSrc }: any) => {
  const { progress, active } = useProgress()
  if (!active && placeholderSrc) return null
  return (
    <Html center>
      {placeholderSrc ? (
        <img src={placeholderSrc} width={128} height={128} style={{ filter: 'blur(8px)', borderRadius: 8 }} alt="Loading" />
      ) : (
        `${Math.round(progress)} %`
      )}
    </Html>
  )
}

// Component to load and display a single model
const Model = ({ url, autoRotate, autoRotateSpeed }: any) => {
  const modelRef = useRef(null)
  const groupRef = useRef(null)
  const [error, setError] = useState(false)
  
  // Determine file extension
  const ext = url?.split('.').pop()?.toLowerCase()
  
  // Load model based on extension - hooks MUST be called unconditionally
  let model = null
  let loadError = false
  
  try {
    if (ext === 'glb' || ext === 'gltf') {
      const gltf = useGLTF(url)
      model = Array.isArray(gltf) ? gltf[0]?.scene : gltf?.scene
      if (model) {
        console.log('✓ GLB/GLTF Model loaded successfully')
      }
    } else if (ext === 'fbx') {
      const fbx = useFBX(url)
      model = Array.isArray(fbx) ? fbx[0] : fbx
    } else if (ext === 'obj') {
      const obj = useLoader(OBJLoader, url)
      model = Array.isArray(obj) ? obj[0] : obj
    }
  } catch (err) {
    console.warn('⚠ Model loading warning:', err)
    loadError = true
    setError(true)
  }

  // Auto-rotate animation - always call hooks
  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      const rotationSpeed = (autoRotateSpeed || 0.005) * 0.005
      ;(groupRef.current as any).rotation.y += rotationSpeed
    }
  })

  // Optimize materials when model loads - always call hooks
  useLayoutEffect(() => {
    if (model) {
      model.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = false
          child.receiveShadow = false
          child.frustumCulled = true
          
          if (child.material) {
            const materials = Array.isArray(child.material) ? child.material : [child.material]
            materials.forEach((mat: any) => {
              if (mat) {
                mat.side = THREE.FrontSide
                mat.envMapIntensity = 0
                mat.needsUpdate = true
                if (mat.map) {
                  mat.map.anisotropy = 1
                  mat.map.generateMipmaps = false
                }
              }
            })
          }
        }
      })
    }
  }, [model])

  // Return null if no model or error
  if (loadError || !model) {
    if (error) console.warn('⚠ No model found for URL:', url)
    return null
  }

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.4}>
      <primitive 
        ref={modelRef}
        object={model}
      />
    </group>
  )
}

const ModelViewer = ({
  url = '/models/laptop.glb',
  urls,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 5,
  minZoomDistance = 2,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.5,
  keyLightIntensity = 0.8,
  fillLightIntensity = 0.3,
  rimLightIntensity = 0.5,
  environmentPreset = 'forest',
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = false,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded
}: ModelViewerProps) => {
  const [loadError, setLoadError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Preload the model only when visible
  useEffect(() => {
    if (isVisible && url) {
      try {
        (useGLTF as any).preload(url)
      } catch (err) {
        console.warn('Preload failed:', err)
      }
    }
  }, [url, isVisible])

  const pivot = useRef(new THREE.Vector3()).current
  const contactRef = useRef<any>(null)
  const rendererRef = useRef<any>(null)
  const sceneRef = useRef<any>(null)
  const cameraRef = useRef<any>(null)

  const initYaw = deg2rad(defaultRotationX)
  const initPitch = deg2rad(defaultRotationY)
  const camZ = Math.min(Math.max(defaultZoom, minZoomDistance), maxZoomDistance)

  const capture = () => {
    const g = rendererRef.current
    const s = sceneRef.current
    const c = cameraRef.current
    if (!g || !s || !c) return
    g.shadowMap.enabled = false
    const tmp: any[] = []
    s.traverse((o: any) => {
      if (o.isLight && 'castShadow' in o) {
        tmp.push({ l: o, cast: o.castShadow })
        o.castShadow = false
      }
    })
    if (contactRef.current) contactRef.current.visible = false
    g.render(s, c)
    const urlPNG = g.domElement.toDataURL('image/png')
    const a = document.createElement('a')
    a.download = 'model.png'
    a.href = urlPNG
    a.click()
    g.shadowMap.enabled = true
    tmp.forEach(({ l, cast }: any) => (l.castShadow = cast))
    if (contactRef.current) contactRef.current.visible = true
    invalidate()
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: typeof width === 'string' ? width : `${width}px`,
        height: `${height}px`,
        touchAction: 'pan-y pinch-zoom',
        position: 'relative'
      }}
    >
      {!isVisible ? (
        // Show placeholder before intersection
        <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-xs">Loading...</div>
        </div>
      ) : (
        <>
          {showScreenshotButton && (
            <button
              onClick={capture}
              style={{
                position: 'absolute',
                border: '1px solid #fff',
                right: 16,
                top: 16,
                zIndex: 10,
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: 10,
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              📸 Screenshot
            </button>
          )}

          <Canvas
            shadows={false}
            dpr={[1, 1.5]}
            performance={{ min: 0.1 }}
            frameloop={autoRotate ? "always" : "demand"}
            gl={{ 
              preserveDrawingBuffer: false,
              antialias: false,
              alpha: true,
              powerPreference: 'high-performance',
              stencil: false,
              depth: true,
              failIfMajorPerformanceCaveat: false
            }}
            onCreated={({ gl, scene, camera }) => {
              rendererRef.current = gl
              sceneRef.current = scene
              cameraRef.current = camera
              gl.toneMapping = THREE.NoToneMapping
              gl.outputColorSpace = THREE.SRGBColorSpace
              gl.toneMappingExposure = 1
              scene.background = null
              
              // Handle context loss gracefully without reload
              const canvas = gl.domElement
              canvas.addEventListener('webglcontextlost', (event) => {
                event.preventDefault()
                console.warn('WebGL context lost - attempting recovery')
              })
              
              canvas.addEventListener('webglcontextrestored', () => {
                console.log('WebGL context restored successfully')
                // Don't force reload - let Three.js handle recovery
              })
            }}
            camera={{ fov: 50, position: [0, 0, camZ], near: 0.1, far: 100 }}
            style={{ touchAction: 'pan-y pinch-zoom', width: '100%', height: '100%', background: 'transparent' }}
          >
            {/* Simple lighting - NO ENVIRONMENT to prevent context loss */}
            <ambientLight intensity={1.2} />
            
            {/* Key light */}
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={1.5}
            />
            
            {/* Fill light */}
            <directionalLight 
              position={[-3, 3, 5]} 
              intensity={0.8}
            />
            
            {/* Back light */}
            <directionalLight 
              position={[0, -2, -5]} 
              intensity={0.5}
            />

            <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
              {/* Load external model if URL provided */}
              {url && !loadError && (
                <Model url={url} autoRotate={autoRotate} autoRotateSpeed={autoRotateSpeed} />
              )}

              {/* Load multiple models if URLs array provided */}
              {urls && urls.map((modelUrl, idx) => (
                <group key={idx}>
                  <Model url={modelUrl} autoRotate={autoRotate} autoRotateSpeed={autoRotateSpeed} />
                </group>
              ))}

              {/* Fallback: Show default scene if no model loaded */}
              {(!url && !urls) && (
                <>
                  {/* Default rotating cube */}
                  <mesh position={[0, 0, 0]} rotation={[0.3, 0.6, 0]} scale={1.2}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial 
                      color="#6366f1"
                      emissive="#4f46e5"
                      shininess={100}
                      side={THREE.FrontSide}
                    />
                  </mesh>
                  
                  {/* Torus knot for visual interest */}
                  <mesh position={[0, 0, 0]} scale={0.6}>
                    <torusKnotGeometry args={[0.4, 0.1, 100, 16]} />
                    <meshPhongMaterial 
                      color="#8b5cf6"
                      emissive="#7c3aed"
                      shininess={100}
                    />
                  </mesh>
                </>
              )}
            </Suspense>

            {enableManualRotation && (
              <OrbitControls 
                enablePan={false}
                enableZoom={enableManualZoom}
                minDistance={minZoomDistance}
                maxDistance={maxZoomDistance}
                dampingFactor={0.05}
                rotateSpeed={0.5}
                enableDamping={true}
                autoRotate={false}
              />
            )}
          </Canvas>
        </>
      )}
    </div>
  )
}

export default ModelViewer

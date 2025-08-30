'use client';

import { useEffect } from 'react';

// Extend window type for GSAP
declare global {
  interface Window {
    gsap: any;
    DrawSVGPlugin: any;
    MotionPathPlugin: any;
  }
}

// GSAP Plugin Loader
const useGSAPPlugins = () => {
  useEffect(() => {
    const loadPlugins = async () => {
      // Only load on client side
      if (typeof window === 'undefined') return;

      try {
        // Check if plugins are already loaded
        if (window.DrawSVGPlugin && window.MotionPathPlugin) {
          console.log('GSAP plugins already loaded');
          return;
        }

        // Load DrawSVG Plugin
        const drawSVGScript = document.createElement('script');
        drawSVGScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/DrawSVGPlugin.min.js';
        drawSVGScript.async = true;
        
        // Load MotionPath Plugin
        const motionPathScript = document.createElement('script');
        motionPathScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/MotionPathPlugin.min.js';
        motionPathScript.async = true;

        // Add scripts to head if not already present
        if (!document.querySelector('script[src*="DrawSVGPlugin"]')) {
          document.head.appendChild(drawSVGScript);
        }
        
        if (!document.querySelector('script[src*="MotionPathPlugin"]')) {
          document.head.appendChild(motionPathScript);
        }

        // Wait for scripts to load
        await Promise.all([
          new Promise((resolve) => {
            drawSVGScript.onload = resolve;
            drawSVGScript.onerror = () => {
              console.warn('DrawSVG plugin failed to load');
              resolve(null);
            };
          }),
          new Promise((resolve) => {
            motionPathScript.onload = resolve;
            motionPathScript.onerror = () => {
              console.warn('MotionPath plugin failed to load');
              resolve(null);
            };
          })
        ]);

        console.log('GSAP plugins loaded successfully');
      } catch (error) {
        console.error('Error loading GSAP plugins:', error);
      }
    };

    loadPlugins();
  }, []);
};

export default useGSAPPlugins;

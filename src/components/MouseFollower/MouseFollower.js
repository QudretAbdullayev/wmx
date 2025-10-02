'use client';
import { useEffect } from 'react';
import styles from './MouseFollower.module.scss';

const FollowCursor = ({ color = '#6ef7fb' }) => {
  useEffect(() => {
    let canvas;
    let context;
    let animationFrame;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    let mouseMovedOnce = false;
    let lastMouseMoveTime = Date.now();
    let hideTimeout;
    let isHoveringInteractive = false;
    let isHoveringBanner = false;
    let targetSize = 1;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    
    class Dot {
      position;
      width;
      lag;
      scale;
      sizeMultiplier;
      constructor(x, y, width, lag) {
        this.position = { x, y };
        this.width = width;
        this.lag = lag;
        this.scale = 0;
        this.sizeMultiplier = 1;
      }
      moveTowards(x, y, context) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        
        this.sizeMultiplier += (targetSize - this.sizeMultiplier) * 0.15;
        
        const timeSinceLastMove = Date.now() - lastMouseMoveTime;
        if (timeSinceLastMove > 3000 && mouseMovedOnce) {
          this.scale = Math.max(0, this.scale - 0.05);
        } else if (mouseMovedOnce) {
          this.scale = Math.min(1, this.scale + 0.1); 
        }
        
        // Only draw the dot if not hovering over banner
        if (this.scale > 0 && !isHoveringBanner) {
          context.fillStyle = color;
          context.beginPath();
          const currentWidth = this.width * this.sizeMultiplier;
          context.arc(
            this.position.x,
            this.position.y,
            currentWidth * this.scale,
            0,
            2 * Math.PI
          );
          context.fill();
          context.closePath();
        }
      }
    }
    
    const dot = new Dot(width / 2, height / 2, 8, 2);
    
    const onMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      mouseMovedOnce = true;
      lastMouseMoveTime = Date.now();
      
      const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
      const isOverInteractive = elementUnderMouse && (
        elementUnderMouse.tagName === 'A' || 
        elementUnderMouse.closest('a') ||
        elementUnderMouse.tagName === 'BUTTON' ||
        elementUnderMouse.closest('button') ||
        elementUnderMouse.tagName === 'INPUT' ||
        elementUnderMouse.tagName === 'TEXTAREA' ||
        elementUnderMouse.closest('input') ||
        elementUnderMouse.closest('textarea') ||
        elementUnderMouse.style.cursor === 'pointer' ||
        window.getComputedStyle(elementUnderMouse).cursor === 'pointer'
      );
      
      // Check if hovering over banner or youtube thumb
      const isOverBanner = elementUnderMouse && (
        elementUnderMouse.hasAttribute('data-banner') ||
        elementUnderMouse.closest('[data-banner]')
      );
      
      const isOverYoutubeThumb = elementUnderMouse && (
        elementUnderMouse.hasAttribute('data-youtube-thumb') ||
        elementUnderMouse.closest('[data-youtube-thumb]')
      );
      
      isHoveringInteractive = isOverInteractive;
      isHoveringBanner = isOverBanner || isOverYoutubeThumb;
      targetSize = isOverInteractive ? 2.5 : 1;
    };
    
    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      if (width <= 700 && canvas) {
        destroy();
        return;
      }
      
      if (width > 700 && !canvas) {
        init();
        return;
      }
      
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    
    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
    };
    
    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };
    
    const init = () => {
      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.className = styles.canvas;
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      loop();
    };
    
    const destroy = () => {
      if (canvas) canvas.remove();
      if (hideTimeout) clearTimeout(hideTimeout);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      canvas = null;
      context = null;
    };
    
    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };
    
    init();
    
    return () => {
      destroy();
    };
  }, [color]);
  
  return null;
};

export default FollowCursor;

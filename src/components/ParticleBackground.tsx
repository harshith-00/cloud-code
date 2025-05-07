
import { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  count?: number;
}

const ParticleBackground = ({ count = 40 }: ParticleBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const particles: HTMLElement[] = [];
    
    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      
      // Apply base styles
      particle.className = 'particle';
      
      // Random size (2-6px)
      const size = Math.floor(Math.random() * 5) + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const posX = Math.random() * containerRect.width;
      const posY = Math.random() * containerRect.height;
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      
      // Random color (purple to blue gradient)
      const colorVal = Math.random() * 100;
      if (colorVal < 33) {
        particle.style.background = '#9B87F5'; // Purple
      } else if (colorVal < 66) {
        particle.style.background = '#7CA5F8'; // Blue-ish
      } else {
        particle.style.background = '#33C3F0'; // Cyan
      }
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      // Add to container and save reference
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Move particles on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      
      particles.forEach((particle, index) => {
        // Calculate distance from mouse
        const particleX = parseFloat(particle.style.left);
        const particleY = parseFloat(particle.style.top);
        const distX = mouseX - particleX;
        const distY = mouseY - particleY;
        const dist = Math.sqrt(distX * distX + distY * distY);
        
        // Only move particles within 100px of cursor
        if (dist < 100) {
          const strength = 30 / dist;
          const moveX = distX * strength;
          const moveY = distY * strength;
          
          // Apply gentle repulsion
          particle.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        } else {
          particle.style.transform = 'translate(0, 0)';
        }
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      // Cleanup
      container.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
        }
      });
    };
  }, [count]);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;

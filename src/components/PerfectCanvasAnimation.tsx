
import React, { useEffect, useRef } from 'react';

export const PerfectCanvasAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 40;
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          // Dynamic wave opacity based on distance and time
          const distance = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2));
          const wave = Math.sin(distance * 0.005 - time) * 0.5 + 0.5;

          ctx.strokeStyle = `rgba(250, 82, 15, ${wave * 0.1})`;

          // Draw small plus signs or crosses instead of dots
          const size = 2;
          ctx.beginPath();
          ctx.moveTo(x - size, y);
          ctx.lineTo(x + size, y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x, y + size);
          ctx.stroke();
        }
      }

      // Draw some larger geometric "data flow" lines
      ctx.strokeStyle = 'rgba(250, 82, 15, 0.05)';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const offset = Math.sin(time * 0.5 + i) * 100;
        ctx.moveTo(0, canvas.height * (i / 5) + offset);
        ctx.lineTo(canvas.width, canvas.height * (i / 5) - offset);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-60 pointer-events-none"
    />
  );
};

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/use-theme';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

export const ConstellationBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      // Calculate density based on screen area
      const count = Math.floor((width * height) / 9000);
      const starCount = Math.min(Math.max(count, 50), 140);

      const colorsDark = ['#60A5FA', '#93C5FD', '#38BDF8', '#818CF8', '#E0E7FF'];
      const colorsLight = ['#2563EB', '#3B82F6', '#60A5FA', '#475569', '#1E293B'];
      const palette = theme === 'dark' ? colorsDark : colorsLight;

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.8 + 0.8,
          baseAlpha: Math.random() * 0.5 + 0.3,
          alpha: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color: palette[Math.floor(Math.random() * palette.length)],
        });
      }
    };

    initStars();

    const maxConnectDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const lineBaseRgb = isDark ? '96, 165, 250' : '37, 99, 235';

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Bounce on boundaries
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;

        // Twinkle effect
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.9 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Draw star particle
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha * (isDark ? 0.85 : 0.6);
        ctx.shadowBlur = isDark ? 8 : 2;
        ctx.shadowColor = star.color;
        ctx.fill();

        // Connect star to other stars (constellation edges)
        for (let j = i + 1; j < stars.length; j++) {
          const other = stars[j];
          const dx = star.x - other.x;
          const dy = star.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const lineAlpha = (1 - dist / maxConnectDistance) * (isDark ? 0.35 : 0.2);
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(${lineBaseRgb}, ${lineAlpha})`;
            ctx.lineWidth = isDark ? 0.8 : 0.6;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }

        // Connect star to mouse
        const mdx = star.x - mouse.x;
        const mdy = star.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouse.radius) {
          const mAlpha = (1 - mdist / mouse.radius) * (isDark ? 0.6 : 0.4);
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${isDark ? '147, 197, 253' : '37, 99, 235'}, ${mAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.shadowBlur = isDark ? 6 : 0;
          ctx.shadowColor = star.color;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-500"
      aria-hidden="true"
    />
  );
};

export default ConstellationBackground;

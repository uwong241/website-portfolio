import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth lerp for outer ring (osu! approach ring vibe)
    const loop = () => {
      ringX += (targetX - ringX) * 0.2;
      ringY += (targetY - ringY) * 0.2;
      setRingPosition({ x: ringX, y: ringY });
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    // Check hover targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central cursor point (osu! style hit circle center) */}
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-accent transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.7 : isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Outer tracking ring (osu! approach ring inspiration) */}
      <div
        className="fixed pointer-events-none z-40 rounded-full border-2 border-accent/60 transition-transform duration-75"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          width: '36px',
          height: '36px',
          transform: `translate(-50%, -50%) scale(${isClicked ? 1.2 : isHovered ? 1.6 : 1})`,
          backgroundColor: isHovered ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;

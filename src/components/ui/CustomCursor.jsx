import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Hide native cursor when this component is mounted
    document.body.style.cursor = 'none';

    // Add specific class for elements that might override it
    document.documentElement.classList.add('custom-cursor-active');

    const handleMove = (e) => {
      const clientX = e.clientX ?? 0;
      const clientY = e.clientY ?? 0;
      setPosition({ x: clientX, y: clientY });

      const target = e.target;
      if (!(target instanceof Element)) {
        setIsActive(false);
        return;
      }

      const overInteractive = target.closest(
        "button, a, input, select, textarea, .course-card, [data-cursor='active']"
      );

      setIsActive(Boolean(overInteractive));
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      // Restore native cursor when unmounted
      document.body.style.cursor = 'auto';
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  const sizeClass = isActive ? "w-9 h-9" : "w-6 h-6";
  const effectClass = isActive
    ? "scale-110 drop-shadow-[0_0_14px_rgba(157,78,221,0.9)]"
    : "scale-100";

  return (
    <div
      className="custom-cursor fixed pointer-events-none z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        src="/images/robot-cursor.png"
        alt="Robot cursor"
        className={`${sizeClass} object-contain transition-transform duration-150 ${effectClass}`}
      />
    </div>
  );
};

export default CustomCursor;

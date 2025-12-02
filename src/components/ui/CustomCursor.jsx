import React, { useEffect, useState } from "react";


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false); // 👉 estado para saber si está sobre un botón

useEffect(() => {
  const handleMove = (e) => {
    // Siempre actualizamos la posición si viene (por si es un evento raro)
    const clientX = e.clientX ?? 0;
    const clientY = e.clientY ?? 0;
    setPosition({ x: clientX, y: clientY });

    // Si el target NO es un elemento de DOM, salimos para evitar errores
    const target = e.target;
    if (!(target instanceof Element)) {
      setIsActive(false);
      return;
    }

    // Detectar si está sobre algo interactivo (botones, links, cards, etc.)
    const overInteractive = target.closest(
      "button, a, .course-card, [data-cursor='active']"
    );

    setIsActive(Boolean(overInteractive));
  };

  window.addEventListener("pointermove", handleMove);
  return () => window.removeEventListener("pointermove", handleMove);
}, []);


  // tamaños según el estado
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
        src="/images/robot-cursor.png"   // tu robot mini
        alt="Robot cursor"
        className={`${sizeClass} object-contain transition-transform duration-150 ${effectClass}`}
      />
    </div>
  );
};


export default CustomCursor;

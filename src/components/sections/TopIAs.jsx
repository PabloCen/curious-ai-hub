import React from "react";
import { motion } from "framer-motion";

const topIAs = [ 
  {
    name: "DALL·E",
    position: 2,
    logo: "/images/ias/dalle.png",
    blockClass: "topias-block-2",
  },
  {
    name: "Midjourney",
    position: 1,
    logo: "/images/ias/midjourney.png",
    blockClass: "topias-block-1",
  },
  {
    name: "Leonardo AI",
    position: 3,
    logo: "/images/ias/leonardo.png",
    blockClass: "topias-block-3",
  },
];

const TopIAs = () => { 
  
  return (
    <section
      id="top-ias"
      className="topias-section relative py-20 px-4 md:px-8"
    >
      {/* NUEVA: Rayo de luz vertical tipo lámpara desde arriba */}
      <div className="topias-lamp-beam" />
      
      {/* Reflejo sutil del piso (más suave) */}
      <div className="topias-floor-light" />

      {/* TÍTULO + TEXTO */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <p className="text-[11px] tracking-[0.25em] uppercase text-purple-300 mb-3">
          Top IAs del momento
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Top IAs de la semana – Lo mejor para tus proyectos y curiosidad
        </h2>
        <p className="text-sm md:text-base text-gray-300">
          Esta semana, las IAs de imágenes están en el podio. Mirá quién se
          lleva el 1º, 2º y 3º lugar para inspirarte en tus próximos proyectos.
        </p>
      </div>

      {/* PODIO COMPLETO */}
      <motion.div
        className="relative max-w-5xl mx-auto flex flex-col items-center" 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* PODIO 2–1–3 - COLUMNAS PEGADAS */}
        <div className="topias-podium mb-32" data-cursor-big >
          {topIAs.map((ia, index) => (
            <motion.div
              key={ia.name}
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.25,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              {/* Logo con efecto glass premium */}
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/60 shadow-[0_0_60px_rgba(190,230,255,0.8),0_0_35px_rgba(255,255,255,0.6),0_10px_35px_rgba(0,0,0,0.5)] bg-gradient-to-b from-white/20 to-transparent backdrop-blur-md flex items-center justify-center relative z-10"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={ia.logo}
                  alt={ia.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Nombre de la IA */}
              <p className="text-sm md:text-base text-white font-bold tracking-wide relative z-10 drop-shadow-[0_3px_18px_rgba(0,0,0,0.7)]">
                {ia.name}
              </p>

              {/* Columna del podio glass - PEGADA */}
              <div className={`topias-block ${ia.blockClass}`}>
                {/* Brillos en bordes externos solamente */}
                {/* Brillo deslizante igual al cartel */}
                      <div className="topias-block-shine" />
                {ia.position === 2 && <div className="topias-edge-left" />}
                {ia.position === 3 && <div className="topias-edge-right" />}
                
                {/* Número con neón blanco ultra brillante */}
                <span className="topias-block-number">{ia.position}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CARTEL INFERIOR */}
        <motion.div 
          className="topias-banner-shine relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <span className="text-xs md:text-sm text-purple-100 font-medium">
            Categoría destacada de la semana:{" "}
            <span className="neon-text-purple font-bold">
              IA de imágenes
            </span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TopIAs;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "@/components/animations/Particles";

const phrases = [
  "explicadas fácil",
  "explicadas paso a paso",
  "explicadas sin tecnicismos raros",
  "explicadas con ejemplos reales",
];


const Hero = () => { 
    const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2500); // cada 2.5 segundos cambia
    return () => clearInterval(id);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden min-h-[80vh]"
    >
      
      {/* PARTÍCULAS ENCIMA DEL VIDEO */}
      

      {/* VIDEO DE FONDO */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
         playsInline
/>
  

      {/* CAPA OSCURA PARA QUE SE LEA EL TEXTO */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e]/20 via-[#0a0a0a]/30 to-[#0a0a0a]" />

      {/* CONTENIDO DEL HERO */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* IZQUIERDA: texto + botones */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Explorando el mundo de la Inteligencia Artificial
            </p>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
  Cursos, noticias, herramientas y curiosidades de IA{" "}
  <span className="neon-text-purple">
    explicadas paso a paso
  </span>
</h1>



            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-xl">
              Un lugar donde se puede entender la IA sin tecnicismos raros:
              ejemplos sencillos, recursos útiles y las IAs más importantes del
              momento, todo en un solo sitio.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleScrollTo("tools")}
                className="px-5 py-3 rounded-2xl bg-[#9d4edd] hover:bg-[#7B2CBF] font-semibold text-white text-sm sm:text-base shadow-[0_0_18px_rgba(157,78,221,0.7)]"
              >
                Explorar IAs
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("news")}
                className="px-5 py-3 rounded-2xl border border-[#9d4edd] text-[#9d4edd] hover:bg-[#9d4edd] hover:text-white font-semibold text-sm sm:text-base transition"
              >
                Ver noticias de IA
              </button>
            </div>
          </motion.div>

          {/* DERECHA: IMAGEN DEL ROBOT / LOGO / LO QUE QUIERAS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center items-center order-first md:order-last"
          >
            <img
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-3xl shadow-[0_0_40px_rgba(123,44,191,0.7)]"
              alt="Mascota futurista de Curious AI Hub"
              src="/images/hero-robot.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

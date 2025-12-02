import React from "react";

const news = [
  {
    title: "Nueva herramienta de IA simplifica tareas diarias",
    date: "02 Nov 2025",
    summary:
      "Una nueva IA promete ayudar a estudiantes, trabajadores y curiosos a organizar mejor su día y aprender más rápido.",
  },
  {
    title: "La IA en la educación: ¿oportunidad o riesgo?",
    date: "28 Oct 2025",
    summary:
      "Cada vez más escuelas y cursos incorporan IA para explicar temas complejos con ejemplos simples y visuales.",
  },
  {
    title: "Modelos de imágenes IA cada vez más realistas",
    date: "20 Oct 2025",
    summary:
      "Las IAs de generación de imágenes logran resultados casi fotográficos, útiles para diseño, marketing y creatividad.",
  },
  {
    title: "IAs para trabajar: productividad al siguiente nivel",
    date: "15 Oct 2025",
    summary:
      "Herramientas como asistentes de escritura, resúmenes automáticos y generadores de código ya son parte del día a día.",
  },
];

function NewsSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 neon-text-purple">
          Últimas noticias de IA
        </h2>
        <p className="text-center text-sm md:text-base text-gray-300 mb-10 max-w-2xl mx-auto">
          Una mirada rápida a lo que está pasando en el mundo de la
          inteligencia artificial: avances, usos reales y curiosidades.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {news.map((item) => (
            <article
              key={item.title}
              className="card-glow-border bg-black/40 rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Imagen placeholder */}
              <div className="h-32 bg-gradient-to-br from-[#1a0b2e] to-[#7B2CBF]" />

              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs text-purple-300 mb-1">{item.date}</span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 flex-1">{item.summary}</p>

                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#9d4edd] hover:text-white"
                >
                  Leer más
                  <span className="text-base">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Botón para ir a la página de noticias */}
        <div className="mt-10 text-center">
          <button
            type="button"
            className="px-6 py-3 rounded-2xl bg-[#9d4edd] hover:bg-[#7B2CBF] font-semibold text-white shadow-[0_0_18px_rgba(157,78,221,0.7)]"
          >
            Ver todas las noticias
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;

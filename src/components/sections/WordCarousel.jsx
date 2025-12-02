import React from "react";

const words = [
  "ChatGPT – OpenAI",
  "Gemini – Google",
  "Claude – Anthropic",
  "Midjourney – Imágenes IA",
  "DALL·E – OpenAI",
  "Copilot – Microsoft",
  "Generadores de texto",
  "Creadores de imágenes",
  "IAs para estudiar",
  "IAs para trabajar",
];

function WordCarousel() {
  // Duplicamos la lista para que se vea continuo el efecto
  const items = [...words, ...words];

  return (
    <section
      id="word-carousel"
      className="word-carousel"
    >
      <div className="word-carousel-track">
        {items.map((word, index) => (
          <span key={index} className="word-carousel-item">
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}

export default WordCarousel;

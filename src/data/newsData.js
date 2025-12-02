// src/data/newsData.js

export const newsData = [
  {
    id: "openai-gpt5",
    title: "OpenAI presenta GPT-5 con mejoras en razonamiento y memoria",
    slug: "openai-presenta-gpt5-mejoras-razonamiento-y-memoria",
    category: "Noticias IA",
    summary:
      "La nueva versión del modelo promete respuestas más precisas, mejor contexto a largo plazo y capacidades multimodales más avanzadas.",
    content: `
OpenAI anunció GPT-5, la nueva generación de su modelo de lenguaje. 
El foco principal está puesto en el razonamiento, la memoria a largo plazo 
y la capacidad de entender mejor instrucciones complejas.

Según la empresa, GPT-5 podrá trabajar con sesiones más largas, 
recordar mejor el contexto de conversaciones anteriores y combinar texto, 
imágenes y audio de forma más natural.

Todavía no hay fecha pública de lanzamiento global, pero ya se están haciendo 
pruebas cerradas con empresas y desarrolladores seleccionados.
    `,
    sourceName: "OpenAI Blog",
    sourceUrl: "https://openai.com",
    imageUrl: "", // cuando tengas imágenes, poné la ruta aquí
    tags: ["OpenAI", "Modelos de lenguaje", "GPT-5"],
    publishedAt: "2025-02-10T09:00:00Z",
    readingTime: 4,
  },
  {
    id: "google-gemini-updates",
    title: "Google mejora Gemini para competir en el mundo de la productividad",
    slug: "google-mejora-gemini-para-productividad",
    category: "Herramientas",
    summary:
      "Gemini se integra más profundo con Docs, Sheets y Gmail para automatizar tareas del día a día.",
    content: `
Google anunció nuevas funciones de Gemini orientadas a productividad: 
resumen inteligente de documentos largos, generación de presentaciones 
a partir de apuntes y ayuda para responder correos en Gmail.

La idea es que Gemini se convierta en un asistente que vive dentro de 
las herramientas que ya usamos todos los días.
    `,
    sourceName: "Google AI Blog",
    sourceUrl: "https://ai.google",
    imageUrl: "",
    tags: ["Google", "Gemini", "Productividad"],
    publishedAt: "2025-02-08T14:30:00Z",
    readingTime: 3,
  },
  {
    id: "midjourney-v7",
    title: "Midjourney v7 mejora la calidad de rostros y escenas complejas",
    slug: "midjourney-v7-mejora-calidad-rostros",
    category: "Creatividad",
    summary:
      "La nueva versión del modelo de imágenes genera detalles más realistas y mejor iluminación.",
    content: `
Midjourney lanzó la versión v7 de su modelo principal, 
centrada en mejorar la calidad de rostros, manos y escenas con mucha información visual.

Los usuarios ya reportan mejoras importantes en coherencia visual y en la 
capacidad de seguir prompts detallados.
    `,
    sourceName: "Midjourney Community",
    sourceUrl: "https://midjourney.com",
    imageUrl: "",
    tags: ["Midjourney", "Imagen", "Creatividad"],
    publishedAt: "2025-02-05T18:10:00Z",
    readingTime: 3,
  },
  {
    id: "elevenlabs-voices",
    title: "ElevenLabs lanza voces multilingües más naturales",
    slug: "elevenlabs-lanza-voces-multilingues",
    category: "Audio",
    summary:
      "Las nuevas voces clonadas suenan cada vez más naturales y compatibles con más idiomas.",
    content: `
ElevenLabs presentó una actualización centrada en la naturalidad de las voces 
y en el soporte para más idiomas, incluido el español latino.

La herramienta ya se usa para doblaje de videos, podcasts y contenido educativo.
    `,
    sourceName: "ElevenLabs",
    sourceUrl: "https://elevenlabs.io",
    imageUrl: "",
    tags: ["Audio", "Voces IA", "ElevenLabs"],
    publishedAt: "2025-02-03T11:45:00Z",
    readingTime: 2,
  },
  {
    id: "regulacion-ia-europa",
    title: "Europa avanza con nuevas regulaciones para la IA generativa",
    slug: "europa-nuevas-regulaciones-ia-generativa",
    category: "Seguridad y ética",
    summary:
      "La Unión Europea trabaja en un marco legal para regular el uso de modelos generativos.",
    content: `
La Unión Europea sigue avanzando con el AI Act, 
un conjunto de regulaciones que busca controlar el uso de sistemas de IA, 
especialmente los modelos generativos de uso masivo.

El objetivo es aumentar la transparencia, proteger a los usuarios y evitar 
malos usos de estas tecnologías.
    `,
    sourceName: "EU Parliament",
    sourceUrl: "https://europarl.europa.eu",
    imageUrl: "",
    tags: ["Regulación", "Europa", "AI Act"],
    publishedAt: "2025-01-29T09:20:00Z",
    readingTime: 5,
  },
  {
    id: "herramientas-para-estudiantes",
    title: "5 herramientas de IA que todo estudiante debería conocer",
    slug: "5-herramientas-ia-para-estudiantes",
    category: "Curiosidades",
    summary:
      "Desde resúmenes automáticos hasta generadores de presentaciones, la IA ya es parte del estudio diario.",
    content: `
Cada vez más estudiantes usan IA como apoyo para estudiar: 
resumir textos largos, generar tarjetas de estudio, practicar idiomas 
o crear presentaciones más rápido.

En esta nota repasamos cinco herramientas clave: ChatGPT, Notion AI, 
Gamma, Tome y Perplexity.
    `,
    sourceName: "Curious AI Hub",
    sourceUrl: "#",
    imageUrl: "",
    tags: ["Estudio", "Productividad", "Estudiantes"],
    publishedAt: "2025-01-25T16:00:00Z",
    readingTime: 4,
  },
];

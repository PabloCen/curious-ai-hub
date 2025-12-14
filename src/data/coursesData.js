// src/data/coursesData.js

export const coursesData = [
  {
    id: 'intro-ia',
    title: 'Introducción a la Inteligencia Artificial',
    slug: 'introduccion-ia',
    level: 'Básico',
    duration: '2 horas',
    modulesCount: 3,
    description: 'Aprende los conceptos fundamentales de la IA, su historia y cómo está cambiando el mundo.',
    fullDescription: "En este curso introductorio, explorarás el fascinante mundo de la Inteligencia Artificial. Desde sus orígenes históricos hasta las aplicaciones modernas que transforman industrias enteras. Ideal para quienes dan sus primeros pasos.",
    category: 'Fundamentos',
    thumbnail: '/images/courses/intro-ia.jpg',
    badge: 'GRATIS',
    rating: 4.9,
    students: 1250,
    price: 0,
    colorClass: "course-card-cyan",
    instructor: {
      name: "Equipo Curioso",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ia",
      bio: "Expertos apasionados por democratizar la IA."
    },
    whatYouLearn: [
      "Definición y tipos de IA",
      "Historia breve de la IA",
      "Diferencia entre IA Generativa y Discriminativa",
      "Aplicaciones en el mundo real",
      "Ética y privacidad"
    ],
    keywords: ["fundamentos", "básico", "intro", "historia"],
    modules: [
      {
        id: 1,
        title: '¿Qué es la IA?',
        duration: "45 min",
        lessons: [
          { id: 1, title: 'Definición y tipos de IA', type: 'video', duration: '15 min' },
          { id: 2, title: 'Historia breve de la IA', type: 'reading', duration: '10 min' },
          { id: 3, title: 'IA Generativa vs IA Discriminativa', type: 'video', duration: '20 min' }
        ]
      },
      {
        id: 2,
        title: 'Aplicaciones en el mundo real',
        duration: "40 min",
        lessons: [
          { id: 4, title: 'IA en la medicina', type: 'video', duration: '15 min' },
          { id: 5, title: 'IA en el entretenimiento', type: 'reading', duration: '10 min' },
          { id: 6, title: 'IA en la productividad', type: 'video', duration: '15 min' }
        ]
      },
      {
        id: 3,
        title: 'Ética y Futuro',
        duration: "35 min",
        lessons: [
          { id: 7, title: 'Sesgos en la IA', type: 'video', duration: '15 min' },
          { id: 8, title: 'Privacidad de datos', type: 'reading', duration: '10 min' },
          { id: 9, title: '¿Qué nos depara el futuro?', type: 'video', duration: '10 min' }
        ]
      }
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering para ChatGPT',
    slug: 'prompt-engineering-chatgpt',
    level: 'Intermedio',
    duration: '4 horas',
    modulesCount: 3,
    description: 'Domina el arte de escribir instrucciones efectivas para obtener los mejores resultados de los LLMs.',
    fullDescription: "Aprende a comunicarte eficazmente con modelos de lenguaje como ChatGPT y Claude. Descubre técnicas avanzadas como Chain-of-Thought y Few-Shot prompting para maximizar tu productividad.",
    category: 'Texto',
    thumbnail: '/images/courses/prompt-eng.jpg',
    badge: 'POPULAR',
    rating: 4.8,
    students: 3400,
    price: 19.99,
    colorClass: "course-card-purple",
    instructor: {
      name: "Sofia Tech",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofia",
      bio: "Ingeniera de Prompts y consultora de IA."
    },
    whatYouLearn: [
      "Estructura de un prompt efectivo",
      "Contexto, Instrucción y Formato",
      "Zero-shot vs Few-shot prompting",
      "Chain of Thought (CoT)",
      "Casos de uso reales"
    ],
    keywords: ["prompts", "chatgpt", "llm", "texto", "ingeniería"],
    modules: [
      {
        id: 1,
        title: 'Fundamentos del Prompting',
        duration: "1 hora",
        lessons: [
          { id: 1, title: 'Estructura de un prompt', type: 'video', duration: '20 min' },
          { id: 2, title: 'Contexto, Instrucción y Formato', type: 'video', duration: '25 min' },
          { id: 3, title: 'Zero-shot vs Few-shot prompting', type: 'reading', duration: '15 min' }
        ]
      },
      {
        id: 2,
        title: 'Técnicas Avanzadas',
        duration: "1.5 horas",
        lessons: [
          { id: 4, title: 'Chain of Thought (CoT)', type: 'video', duration: '30 min' },
          { id: 5, title: 'Role-playing', type: 'video', duration: '20 min' },
          { id: 6, title: 'Prompt Chaining', type: 'reading', duration: '40 min' }
        ]
      },
      {
        id: 3,
        title: 'Casos de Uso',
        duration: "1.5 horas",
        lessons: [
          { id: 7, title: 'Generación de contenido', type: 'video', duration: '30 min' },
          { id: 8, title: 'Resumen de textos', type: 'video', duration: '20 min' },
          { id: 9, title: 'Análisis de datos', type: 'reading', duration: '40 min' }
        ]
      }
    ]
  },
  {
    id: 'stable-diffusion-mastery',
    title: 'Generación de Imágenes con Stable Diffusion',
    slug: 'stable-diffusion-mastery',
    level: 'Avanzado',
    duration: '6 horas',
    modulesCount: 3,
    description: 'Instala y configura Stable Diffusion localmente y aprende a crear imágenes impresionantes.',
    fullDescription: "Sumérgete en el mundo del arte generativo open source. Aprende a instalar Stable Diffusion en tu propia máquina, gestionar modelos, usar LoRAs y ControlNet para un control total sobre tus creaciones.",
    category: 'Imágenes',
    thumbnail: '/images/courses/sd-mastery.jpg',
    badge: 'PRO',
    rating: 4.7,
    students: 850,
    price: 29.99,
    colorClass: "course-card-magenta",
    instructor: {
      name: "Alex Pixel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      bio: "Artista digital y experto en Stable Diffusion."
    },
    whatYouLearn: [
      "Instalación de Automatic1111",
      "Gestión de Modelos (Checkpoints)",
      "Sampling steps y CFG Scale",
      "ControlNet y LoRAs",
      "Inpainting y Outpainting"
    ],
    keywords: ["stable diffusion", "imágenes", "arte", "generativo", "local"],
    modules: [
      {
        id: 1,
        title: 'Configuración del Entorno',
        duration: "2 horas",
        lessons: [
          { id: 1, title: 'Requisitos de Hardware', type: 'reading', duration: '20 min' },
          { id: 2, title: 'Instalación de Automatic1111', type: 'video', duration: '40 min' },
          { id: 3, title: 'Gestión de Modelos (Checkpoints)', type: 'video', duration: '60 min' }
        ]
      },
      {
        id: 2,
        title: 'Parámetros y Control',
        duration: "2 horas",
        lessons: [
          { id: 4, title: 'Sampling steps y CFG Scale', type: 'video', duration: '40 min' },
          { id: 5, title: 'Seeds y resoluciones', type: 'video', duration: '30 min' },
          { id: 6, title: 'Upscaling', type: 'reading', duration: '50 min' }
        ]
      },
      {
        id: 3,
        title: 'ControlNet y LoRAs',
        duration: "2 horas",
        lessons: [
          { id: 7, title: '¿Qué es ControlNet?', type: 'video', duration: '45 min' },
          { id: 8, title: 'Entrenamiento básico de LoRAs', type: 'video', duration: '45 min' },
          { id: 9, title: 'Inpainting y Outpainting', type: 'reading', duration: '30 min' }
        ]
      }
    ]
  }
];

export const courseLevels = [
  { id: 'all', name: 'Todos' },
  { id: 'Básico', name: 'Básico' },
  { id: 'Intermedio', name: 'Intermedio' },
  { id: 'Avanzado', name: 'Avanzado' }
];

export const courseCategories = [
    { id: 'all', name: 'Todas' },
    { id: 'Fundamentos', name: 'Fundamentos' },
    { id: 'Texto', name: 'Texto & Chat' },
    { id: 'Imágenes', name: 'Imágenes' },
];

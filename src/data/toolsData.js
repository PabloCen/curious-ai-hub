// src/data/toolsData.js

export const toolsData = [
  // === TEXTO / CHAT ===
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Asistente conversacional de OpenAI para escritura, programación y análisis.',
    category: 'Texto',
    logo: '/images/tools/chatgpt.png',
    pricing: 'Freemium',
    rating: 4.8,
    difficulty: 'Básico',
    url: 'https://chat.openai.com',
    badges: ['Popular', 'Destacado'],
    features: [
      'Conversaciones naturales',
      'Generación de código',
      'Análisis de datos',
      'Múltiples idiomas',
      'Historial de conversaciones'
    ],
    useCases: [
      'Redacción de contenido',
      'Asistencia en programación',
      'Brainstorming de ideas',
      'Respuestas a preguntas complejas'
    ],
    pros: [
      'Muy versátil',
      'Respuestas coherentes',
      'Gran base de conocimiento',
      'Interfaz intuitiva'
    ],
    cons: [
      'Requiere suscripción para GPT-4',
      'A veces inventa información',
      'Límites de uso en versión gratuita'
    ],
    screenshots: [
      '/images/tools/chatgpt-screen1.jpg',
      '/images/tools/chatgpt-screen2.jpg'
    ]
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'IA conversacional de Anthropic con énfasis en seguridad y precisión.',
    category: 'Texto',
    logo: '/images/tools/claude.png',
    pricing: 'Freemium',
    rating: 4.7,
    difficulty: 'Básico',
    url: 'https://claude.ai',
    badges: ['Nuevo', 'Destacado'],
    features: [
      'Conversaciones largas',
      'Análisis de documentos',
      'Programación avanzada',
      'Razonamiento detallado'
    ],
    useCases: [
      'Análisis de textos largos',
      'Investigación',
      'Desarrollo de software',
      'Consultoría técnica'
    ],
    pros: [
      'Contexto muy extenso',
      'Muy preciso',
      'Excelente para código',
      'Respuestas detalladas'
    ],
    cons: [
      'Menos conocido que ChatGPT',
      'Interfaz más simple',
      'Límites en versión gratuita'
    ]
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'IA multimodal de Google que integra texto, imágenes y datos en tiempo real.',
    category: 'Texto',
    logo: '/images/tools/gemini.png',
    pricing: 'Gratis',
    rating: 4.6,
    difficulty: 'Básico',
    url: 'https://gemini.google.com',
    badges: ['Gratis'],
    features: [
      'Búsqueda en tiempo real',
      'Multimodal (texto + imágenes)',
      'Integración con Google',
      'Análisis de imágenes'
    ],
    useCases: [
      'Búsquedas con IA',
      'Análisis de imágenes',
      'Investigación actualizada',
      'Productividad con Google Workspace'
    ],
    pros: [
      'Totalmente gratis',
      'Información actualizada',
      'Integración Google',
      'Multimodal'
    ],
    cons: [
      'Menos conversacional',
      'Limitado en creatividad',
      'Enfocado en búsquedas'
    ]
  },

  // === IMÁGENES ===
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Generador de imágenes artísticas de alta calidad mediante prompts de texto.',
    category: 'Imágenes',
    logo: '/images/tools/midjourney.png',
    pricing: 'Premium',
    rating: 4.9,
    difficulty: 'Intermedio',
    url: 'https://midjourney.com',
    badges: ['Popular', 'Premium'],
    features: [
      'Imágenes fotorrealistas',
      'Estilos artísticos variados',
      'Alta resolución',
      'Control detallado',
      'Comunidad activa'
    ],
    useCases: [
      'Arte digital',
      'Diseño de conceptos',
      'Ilustraciones',
      'Marketing visual'
    ],
    pros: [
      'Calidad excepcional',
      'Estilos únicos',
      'Actualizaciones constantes',
      'Gran comunidad'
    ],
    cons: [
      'Solo de pago',
      'Requiere Discord',
      'Curva de aprendizaje',
      'Sin versión gratuita'
    ]
  },
  {
    id: 'dall-e',
    name: 'DALL-E 3',
    description: 'Generador de imágenes de OpenAI integrado con ChatGPT.',
    category: 'Imágenes',
    logo: '/images/tools/dalle.png',
    pricing: 'Freemium',
    rating: 4.7,
    difficulty: 'Básico',
    url: 'https://openai.com/dall-e-3',
    badges: ['Destacado'],
    features: [
      'Integrado con ChatGPT',
      'Prompts naturales',
      'Edición de imágenes',
      'Múltiples variaciones'
    ],
    useCases: [
      'Creación de conceptos visuales',
      'Ilustraciones personalizadas',
      'Marketing de contenidos',
      'Prototipos de diseño'
    ],
    pros: [
      'Fácil de usar',
      'Integración con ChatGPT',
      'Buenos resultados',
      'Interfaz simple'
    ],
    cons: [
      'Menos control artístico',
      'Requiere ChatGPT Plus',
      'Límites de generación'
    ]
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Generador de imágenes open source con control total sobre el modelo.',
    category: 'Imágenes',
    logo: '/images/tools/stable-diffusion.png',
    pricing: 'Gratis',
    rating: 4.5,
    difficulty: 'Avanzado',
    url: 'https://stability.ai',
    badges: ['Gratis', 'Open Source'],
    features: [
      'Totalmente open source',
      'Control total',
      'Instalación local',
      'Sin censura',
      'Modelos personalizables'
    ],
    useCases: [
      'Proyectos personales',
      'Investigación',
      'Arte sin restricciones',
      'Desarrollo de modelos'
    ],
    pros: [
      'Gratis y open source',
      'Sin límites',
      'Altamente personalizable',
      'Comunidad enorme'
    ],
    cons: [
      'Requiere conocimientos técnicos',
      'Necesita hardware potente',
      'Configuración compleja'
    ]
  },

  // === VIDEO ===
  {
    id: 'runway',
    name: 'Runway',
    description: 'Suite completa de herramientas de IA para creación y edición de video.',
    category: 'Video',
    logo: '/images/tools/runway.png',
    pricing: 'Freemium',
    rating: 4.8,
    difficulty: 'Intermedio',
    url: 'https://runwayml.com',
    badges: ['Popular', 'Destacado'],
    features: [
      'Generación de video',
      'Edición con IA',
      'Efectos especiales',
      'Eliminación de fondo',
      'Extensión de videos'
    ],
    useCases: [
      'Producción de video',
      'Efectos visuales',
      'Marketing digital',
      'Content creation'
    ],
    pros: [
      'Múltiples herramientas',
      'Resultados profesionales',
      'Fácil de usar',
      'Actualizaciones frecuentes'
    ],
    cons: [
      'Costoso para uso intensivo',
      'Requiere buena conexión',
      'Límites en versión gratuita'
    ]
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Creación de videos con avatares IA que hablan en múltiples idiomas.',
    category: 'Video',
    logo: '/images/tools/synthesia.png',
    pricing: 'Premium',
    rating: 4.6,
    difficulty: 'Básico',
    url: 'https://synthesia.io',
    badges: ['Premium'],
    features: [
      'Avatares realistas',
      '120+ idiomas',
      'Text-to-speech natural',
      'Plantillas predefinidas',
      'Sin cámara ni estudio'
    ],
    useCases: [
      'Videos corporativos',
      'E-learning',
      'Marketing',
      'Comunicación interna'
    ],
    pros: [
      'Muy profesional',
      'Múltiples idiomas',
      'Sin necesidad de grabar',
      'Rápido'
    ],
    cons: [
      'Solo planes de pago',
      'Costoso',
      'Avatares limitados en plan básico'
    ]
  },

  // === PROGRAMACIÓN ===
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'Asistente de programación con IA que sugiere código en tiempo real.',
    category: 'Programación',
    logo: '/images/tools/copilot.png',
    pricing: 'Premium',
    rating: 4.7,
    difficulty: 'Intermedio',
    url: 'https://github.com/features/copilot',
    badges: ['Popular'],
    features: [
      'Autocompletado inteligente',
      'Generación de funciones',
      'Múltiples lenguajes',
      'Integración IDE',
      'Comentarios a código'
    ],
    useCases: [
      'Desarrollo de software',
      'Aprendizaje de código',
      'Prototipado rápido',
      'Documentación'
    ],
    pros: [
      'Muy preciso',
      'Ahorra mucho tiempo',
      'Integración perfecta',
      'Aprende de tu estilo'
    ],
    cons: [
      'Requiere suscripción',
      'A veces sugiere código incorrecto',
      'Dependencia de IA'
    ]
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'Editor de código con IA integrada para desarrollo acelerado.',
    category: 'Programación',
    logo: '/images/tools/cursor.png',
    pricing: 'Freemium',
    rating: 4.8,
    difficulty: 'Avanzado',
    url: 'https://cursor.sh',
    badges: ['Nuevo', 'Destacado'],
    features: [
      'Editor completo',
      'IA contextual',
      'Refactorización automática',
      'Chat con el código',
      'Generación de tests'
    ],
    useCases: [
      'Desarrollo full-stack',
      'Refactoring de código',
      'Debugging',
      'Aprendizaje'
    ],
    pros: [
      'Muy potente',
      'Editor completo',
      'IA contextual',
      'Rápido'
    ],
    cons: [
      'Nuevo en el mercado',
      'Curva de aprendizaje',
      'Límites en versión gratuita'
    ]
  },

  // === AUDIO ===
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Generación de voz ultra realista con IA en múltiples idiomas.',
    category: 'Audio',
    logo: '/images/tools/elevenlabs.png',
    pricing: 'Freemium',
    rating: 4.9,
    difficulty: 'Básico',
    url: 'https://elevenlabs.io',
    badges: ['Popular', 'Destacado'],
    features: [
      'Voces ultra realistas',
      'Clonación de voz',
      'Múltiples idiomas',
      'Control emocional',
      'API disponible'
    ],
    useCases: [
      'Audiolibros',
      'Podcasts',
      'Doblaje',
      'Asistentes virtuales'
    ],
    pros: [
      'Calidad excepcional',
      'Voces naturales',
      'Fácil de usar',
      'Muchos idiomas'
    ],
    cons: [
      'Costoso para alto volumen',
      'Límites en versión gratuita',
      'Requiere texto bien formateado'
    ]
  },

  // === PRODUCTIVIDAD ===
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Asistente de escritura y productividad integrado en Notion.',
    category: 'Productividad',
    logo: '/images/tools/notion.png',
    pricing: 'Freemium',
    rating: 4.6,
    difficulty: 'Básico',
    url: 'https://notion.so/product/ai',
    badges: ['Destacado'],
    features: [
      'Escritura asistida',
      'Resúmenes automáticos',
      'Traducción',
      'Mejora de redacción',
      'Generación de contenido'
    ],
    useCases: [
      'Gestión de proyectos',
      'Toma de notas',
      'Documentación',
      'Brainstorming'
    ],
    pros: [
      'Integrado en Notion',
      'Fácil de usar',
      'Múltiples funciones',
      'Interfaz familiar'
    ],
    cons: [
      'Solo funciona en Notion',
      'Requiere suscripción adicional',
      'Limitado fuera de Notion'
    ]
  },

  // === DISEÑO ===
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Herramientas de diseño con IA para crear contenido visual profesional.',
    category: 'Diseño',
    logo: '/images/tools/canva.png',
    pricing: 'Freemium',
    rating: 4.7,
    difficulty: 'Básico',
    url: 'https://canva.com',
    badges: ['Popular'],
    features: [
      'Diseño automático',
      'Generación de imágenes',
      'Magic Edit',
      'Plantillas inteligentes',
      'Eliminación de fondo'
    ],
    useCases: [
      'Diseño gráfico',
      'Social media',
      'Presentaciones',
      'Marketing'
    ],
    pros: [
      'Muy fácil de usar',
      'Múltiples herramientas',
      'Plantillas profesionales',
      'Colaborativo'
    ],
    cons: [
      'Funciones IA requieren Premium',
      'Limitado para diseño avanzado',
      'Dependencia de plantillas'
    ]
  },

  // === ANÁLISIS DE DATOS ===
  {
    id: 'julius-ai',
    name: 'Julius AI',
    description: 'Análisis de datos y visualización con IA conversacional.',
    category: 'Datos',
    logo: '/images/tools/julius.png',
    pricing: 'Freemium',
    rating: 4.5,
    difficulty: 'Intermedio',
    url: 'https://julius.ai',
    badges: ['Nuevo'],
    features: [
      'Análisis conversacional',
      'Visualizaciones automáticas',
      'Importación de datos',
      'Python integrado',
      'Exportación de resultados'
    ],
    useCases: [
      'Análisis de negocios',
      'Data science',
      'Investigación',
      'Reportes automáticos'
    ],
    pros: [
      'Muy intuitivo',
      'No requiere código',
      'Visualizaciones automáticas',
      'Rápido'
    ],
    cons: [
      'Limitado en datos complejos',
      'Requiere suscripción para datasets grandes',
      'Menos control que herramientas tradicionales'
    ]
  }
];

// Categorías disponibles
export const categories = [
  { id: 'all', name: 'Todas', icon: '✨' },
  { id: 'Texto', name: 'Texto & Chat', icon: '💬' },
  { id: 'Imágenes', name: 'Imágenes', icon: '🎨' },
  { id: 'Video', name: 'Video', icon: '🎥' },
  { id: 'Audio', name: 'Audio', icon: '🎵' },
  { id: 'Programación', name: 'Programación', icon: '💻' },
  { id: 'Productividad', name: 'Productividad', icon: '⚡' },
  { id: 'Diseño', name: 'Diseño', icon: '🎭' },
  { id: 'Datos', name: 'Datos', icon: '📊' }
];

// Filtros de precio
export const pricingFilters = [
  { id: 'all', name: 'Todos' },
  { id: 'Gratis', name: 'Gratis' },
  { id: 'Freemium', name: 'Freemium' },
  { id: 'Premium', name: 'Premium' }
];

// Filtros de dificultad
export const difficultyFilters = [
  { id: 'all', name: 'Todas' },
  { id: 'Básico', name: 'Básico' },
  { id: 'Intermedio', name: 'Intermedio' },
  { id: 'Avanzado', name: 'Avanzado' }
];

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Moon, Sun, BookOpen, Clock, Users, Star, ArrowLeft, Filter, X } from 'lucide-react';
import Header from '../components/layout/Header';
import CustomCursor from '../components/ui/CustomCursor';

// ============================================
// 📚 DATA DE CURSOS MEJORADA CON KEYWORDS
// ============================================
const coursesData = [
  {
    id: 1,
    title: "Fundamentos de IA",
    description: "Aprende los conceptos básicos de Inteligencia Artificial, Machine Learning y Deep Learning desde cero.",
    category: "Fundamentos",
    level: "Principiante",
    duration: "2 semanas",
    modules: 2,
    students: 1234,
    rating: 4.9,
    price: 0,
    badge: "GRATIS",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-cyan",
    // KEYWORDS para búsqueda inteligente
    keywords: ["fundamentos", "básico", "introducción", "principiante", "comenzar", "empezar", "ia", "ml", "machine learning"]
  },
  {
    id: 2,
    title: "Introducción a ChatGPT",
    description: "Domina el uso de ChatGPT para tareas cotidianas. Aprende a escribir prompts efectivos y optimizar tus resultados.",
    category: "Texto & Chat",
    level: "Principiante",
    duration: "3 semanas",
    modules: 4,
    students: 2156,
    rating: 4.8,
    price: 9.99,
    badge: "POPULAR",
    thumbnail: "https://images.unsplash.com/photo-1676277791608-ac54525aa94a?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-purple",
    keywords: ["chatgpt", "gpt", "texto", "escritura", "redacción", "prompts", "chat", "conversación", "openai"]
  },
  {
    id: 3,
    title: "Generación de Imágenes con IA",
    description: "Crea imágenes impresionantes con MidJourney y DALL-E. Aprende prompts, estilos y composición visual.",
    category: "Imágenes",
    level: "Principiante",
    duration: "4 semanas",
    modules: 4,
    students: 1876,
    rating: 4.7,
    price: 14.99,
    badge: "NUEVO",
    thumbnail: "https://images.unsplash.com/photo-1686191128892-c65c2a4c94ce?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-gradient",
    keywords: ["imágenes", "imagenes", "midjourney", "dall-e", "dalle", "diseño", "arte", "visual", "crear imagen", "generar imagen"]
  },
  {
    id: 4,
    title: "Prompts Avanzados para Texto",
    description: "Técnicas avanzadas de prompt engineering: chain of thought, few-shot learning y optimización de respuestas.",
    category: "Texto & Chat",
    level: "Intermedio",
    duration: "5 semanas",
    modules: 4,
    students: 987,
    rating: 4.9,
    price: 19.99,
    badge: "POPULAR",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-purple",
    keywords: ["prompts", "avanzado", "texto", "escritura", "chatgpt", "gpt", "optimización", "ingeniería de prompts"]
  },
  {
    id: 5,
    title: "Edición de Video con IA",
    description: "Crea y edita videos profesionales con Runway y Pika. Efectos, transiciones y subtítulos automáticos.",
    category: "Video & Audio",
    level: "Intermedio",
    duration: "5 semanas",
    modules: 4,
    students: 1432,
    rating: 4.6,
    price: 24.99,
    badge: "NUEVO",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-magenta",
    keywords: ["video", "edición", "runway", "pika", "subtítulos", "efectos", "crear video", "generar video", "animación"]
  },
  {
    id: 6,
    title: "IA en tu Trabajo Diario",
    description: "Automatiza emails, crea presentaciones impactantes y analiza datos con IA. Productividad al máximo.",
    category: "Productividad",
    level: "Intermedio",
    duration: "6 semanas",
    modules: 5,
    students: 2341,
    rating: 4.8,
    price: 29.99,
    badge: "POPULAR",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-cyan",
    keywords: ["productividad", "trabajo", "oficina", "emails", "presentaciones", "automatizar", "estudiantes", "profesional"]
  },
  {
    id: 7,
    title: "Creador de Contenido IA",
    description: "Genera guiones, thumbnails e ideas para redes sociales. Análisis de audiencia y optimización de contenido.",
    category: "Marketing & Contenido",
    level: "Avanzado",
    duration: "6 semanas",
    modules: 5,
    students: 876,
    rating: 4.9,
    price: 39.99,
    badge: "PRO",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-purple",
    keywords: ["marketing", "contenido", "redes sociales", "instagram", "youtube", "tiktok", "influencer", "creador"]
  },
  {
    id: 8,
    title: "IA para tu Negocio",
    description: "Marketing con IA, atención al cliente automática, análisis de competencia y creación de productos digitales.",
    category: "Marketing & Contenido",
    level: "Avanzado",
    duration: "7 semanas",
    modules: 5,
    students: 1654,
    rating: 4.8,
    price: 44.99,
    badge: "POPULAR",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-gradient",
    keywords: ["negocio", "emprendedor", "startup", "marketing", "ventas", "clientes", "empresa", "comercio"]
  },
  {
    id: 9,
    title: "IA Aplicada a Ciencia",
    description: "Análisis estadístico, visualización de datos científicos, papers con IA y modelos predictivos avanzados.",
    category: "Ciencia & Data",
    level: "Avanzado",
    duration: "8 semanas",
    modules: 6,
    students: 543,
    rating: 4.9,
    price: 49.99,
    badge: "PRO",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-cyan",
    keywords: ["ciencia", "científico", "datos", "análisis", "investigación", "paper", "estadística", "ml"]
  },
  {
    id: 10,
    title: "IA en Biología",
    description: "Análisis genómico, predicción de proteínas, diagnósticos médicos e investigación farmacéutica con IA.",
    category: "Ciencia & Data",
    level: "Experto",
    duration: "8 semanas",
    modules: 6,
    students: 432,
    rating: 4.7,
    price: 49.99,
    badge: "PRO",
    thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-magenta",
    keywords: ["biología", "medicina", "genoma", "proteínas", "farmacia", "salud", "médico", "investigación"]
  },
  {
    id: 11,
    title: "IA en Astronomía",
    description: "Procesamiento de imágenes espaciales, detección de exoplanetas, análisis telescópico y simulaciones del universo.",
    category: "Ciencia & Data",
    level: "Experto",
    duration: "8 semanas",
    modules: 6,
    students: 321,
    rating: 4.8,
    price: 49.99,
    badge: "PRO",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7464?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-purple",
    keywords: ["astronomía", "espacio", "planetas", "estrellas", "universo", "telescopio", "nasa", "cosmos"]
  },
  {
    id: 12,
    title: "Diplomatura: Experto en IA Aplicada",
    description: "Programa completo de 16 semanas. Incluye todos los cursos avanzados + proyectos + certificado premium + resumen ejecutivo.",
    category: "Diplomatura",
    level: "Todos los niveles",
    duration: "16 semanas",
    modules: 8,
    students: 234,
    rating: 5.0,
    price: 199.99,
    badge: "DIPLOMATURA",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    instructor: "Curious AI Team",
    colorClass: "course-card-gradient",
    keywords: ["diplomatura", "completo", "certificado", "profesional", "experto", "master", "todos"]
  },
];

// ============================================
// 🎨 COMPONENTE: COURSE CARD (ESTILO HOME)
// ============================================
const CourseCard = ({ course, darkMode }) => {
  const navigate = useNavigate();
  
  const getBadgeStyle = (badge) => {
    switch(badge) {
      case 'GRATIS': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      case 'POPULAR': return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
      case 'NUEVO': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'PRO': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'DIPLOMATURA': return 'bg-pink-500/20 text-pink-400 border-pink-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
<div className={`course-card-3d ${course.colorClass}`} data-cursor='active'
   onClick={() => navigate(`/courses/${course.id}`)} // ← AGREGAR
      style={{ cursor: 'none' }}

>

      {/* Badge */}
      <div className="course-badge-container-3d">
        <span className={`course-badge-3d ${getBadgeStyle(course.badge)}`}>
          {course.badge}
        </span>
      </div>

      {/* Número */}
      <div className="course-number-3d">{String(course.id).padStart(2, '0')}</div>

      {/* Contenido */}
      <div className="course-content-3d">
        <div className="course-info-3d">
          <span className="course-level-3d">{course.level}</span>
          <h3 className="course-title-3d">{course.title}</h3>
        </div>

        <p className="course-description-3d">{course.description}</p>

        {/* Meta */}
        <div className="course-meta-3d">
          <div className="course-meta-item-3d">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules} módulos</span>
          </div>
          <div className="course-meta-item-3d">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="course-footer-3d">
          <div className="course-rating-3d">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{course.rating}</span>
          </div>
          <div className="course-price-3d">
            {course.price === 0 ? "GRATIS" : `$${course.price}`}
          </div>
        </div>
      </div>

      {/* Brillo */}
      <div className="course-card-shine-3d"></div>
    </div>
  );
};

// ============================================
// 📄 COMPONENTE PRINCIPAL
// ============================================
const CoursesPage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Búsqueda inteligente con keywords
  const filteredCourses = coursesData.filter(course => {
    const searchLower = searchQuery.toLowerCase();
    
    // Búsqueda en título, descripción Y keywords
    const matchSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      course.keywords.some(keyword => keyword.includes(searchLower));
    
    const matchCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchPrice = priceFilter === 'all' || 
                      (priceFilter === 'free' && course.price === 0) ||
                      (priceFilter === 'paid' && course.price > 0);
    
    return matchSearch && matchCategory && matchLevel && matchPrice;
  });

return (
  <div className={`courses-page-full ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <CustomCursor />
    <Header />
    
    {/* Container con padding-top para el header fijo */}
    <div className="courses-page-container">
        {/* Botón volver + Dark mode */}
        <div className="courses-page-top-bar">
          <button className="back-to-home-btn" onClick={() => navigate('/')}>
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </button>
          
          <button className="dark-mode-toggle-courses" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Hero */}
        <div className="courses-hero-full">
          <h1 className="courses-hero-title-full">
            Todos los Cursos de <span className="gradient-text">Inteligencia Artificial</span>
          </h1>
          <p className="courses-hero-subtitle-full">
            Desde fundamentos hasta aplicaciones profesionales. Más de 5,000 estudiantes ya están aprendiendo.
          </p>

          {/* Search */}
          <div className="courses-search-wrapper-full">
            <Search className="courses-search-icon-full" />
<input
  type="text"
  placeholder="Buscar por: ChatGPT, imágenes, video, marketing, ciencia..."
  className="courses-search-input-full"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  data-cursor='active'
/>  
            {searchQuery && (
          <button className="search-clear-btn" onClick={() => setSearchQuery('')} data-cursor='active'>
  <X className="w-4 h-4" />
</button>
            )}
          </div>
        </div>

        {/* Filtros Mobile Toggle */}
<button className="filters-mobile-toggle" onClick={() => setShowFilters(!showFilters)} data-cursor='active'>
  <Filter className="w-5 h-5" />
  Filtros
</button>
        {/* Filtros */}
       <div className={`courses-filters-full ${showFilters ? 'show' : ''}`}>
  {/* Categoría */}
  <div className="filter-group-full">
    <label>Categoría:</label>
    <select 
      value={selectedCategory} 
      onChange={(e) => setSelectedCategory(e.target.value)}
      data-cursor='active'
    >
      <option value="all">Todas</option>
      <option value="Fundamentos">Fundamentos</option>
      <option value="Texto & Chat">Texto & Chat</option>
      <option value="Imágenes">Imágenes</option>
      <option value="Video & Audio">Video & Audio</option>
      <option value="Productividad">Productividad</option>
      <option value="Marketing & Contenido">Marketing & Contenido</option>
      <option value="Ciencia & Data">Ciencia & Data</option>
      <option value="Diplomatura">Diplomatura</option>
    </select>
  </div>

  {/* Nivel */}
  <div className="filter-group-full">
    <label>Nivel:</label>
    <select 
      value={selectedLevel} 
      onChange={(e) => setSelectedLevel(e.target.value)}
      data-cursor='active'
    >
      <option value="all">Todos</option>
      <option value="Principiante">Principiante</option>
      <option value="Intermedio">Intermedio</option>
      <option value="Avanzado">Avanzado</option>
      <option value="Experto">Experto</option>
    </select>
  </div>

  {/* Precio */}
  <div className="filter-group-full">
    <label>Precio:</label>
    <select 
      value={priceFilter} 
      onChange={(e) => setPriceFilter(e.target.value)}
      data-cursor='active'
    >
      <option value="all">Todos</option>
      <option value="free">Gratis</option>
      <option value="paid">De pago</option>
    </select>
  </div>
</div>    


        
        </div>

        {/* Results */}
        <div className="courses-results-full">
          <p>Mostrando <strong>{filteredCourses.length}</strong> de {coursesData.length} cursos</p>
        </div>

        {/* Grid */}
        <div className="courses-grid-3d">
          {filteredCourses.map((course, index) => (
            <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard course={course} darkMode={darkMode} />
            </div>
          ))}
        </div>

        {/* Empty */}
        {filteredCourses.length === 0 && (
          <div className="courses-empty-full">
            <p>😕 No encontramos cursos con esos filtros</p>
          <button 
  onClick={() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
    setPriceFilter('all');
  }}
  data-cursor='active'
>
  Limpiar todo
</button>
          </div>
        )}
      </div>

  );
};

export default CoursesPage;
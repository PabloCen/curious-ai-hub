import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Moon, Sun, BookOpen, Clock, Star, ArrowLeft, Filter, X } from 'lucide-react';
import Header from '../components/layout/Header';
import { coursesData, courseLevels, courseCategories } from '../data/coursesData';

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
    <div
      className={`course-card-3d ${course.colorClass}`}
      data-cursor='active'
      onClick={() => navigate(`/courses/${course.id}`)}
      style={{ cursor: 'none' }}
    >
      {/* Badge */}
      <div className="course-badge-container-3d">
        <span className={`course-badge-3d ${getBadgeStyle(course.badge)}`}>
          {course.badge}
        </span>
      </div>

      {/* Número (opcional, si quisieras mostrar ID o índice) */}
      {/* <div className="course-number-3d">{String(course.id).padStart(2, '0')}</div> */}

      {/* Contenido */}
      <div className="course-content-3d">
        <div className="course-info-3d">
          <span className="course-level-3d">{course.level}</span>
          <h3 className="course-title-3d">{course.title}</h3>
        </div>

        <p className="course-description-3d line-clamp-3">{course.description}</p>

        {/* Meta */}
        <div className="course-meta-3d">
          <div className="course-meta-item-3d">
            <BookOpen className="w-4 h-4" />
            <span>{course.modulesCount} módulos</span>
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
      (course.keywords && course.keywords.some(keyword => keyword.includes(searchLower)));
    
    const matchCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchPrice = priceFilter === 'all' || 
                      (priceFilter === 'free' && course.price === 0) ||
                      (priceFilter === 'paid' && course.price > 0);
    
    return matchSearch && matchCategory && matchLevel && matchPrice;
  });

  return (
    <div className={`courses-page-full ${darkMode ? 'dark-mode' : 'light-mode'}`}>
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
            Desde fundamentos hasta aplicaciones profesionales. Más de {coursesData.length * 100} estudiantes ya están aprendiendo.
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
              {courseCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
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
              {courseLevels.map(lvl => (
                <option key={lvl.id} value={lvl.id}>{lvl.name}</option>
              ))}
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
    </div>
  );
};

export default CoursesPage;

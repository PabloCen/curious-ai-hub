import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, Moon, Sun, Star, Users, Clock, BookOpen, 
  CheckCircle, PlayCircle, FileText, Award, ChevronDown, ChevronUp 
} from 'lucide-react';
import Header from '../components/layout/Header';
import CustomCursor from '../components/ui/CustomCursor';
import { coursesData } from '../data/coursesData';

// ============================================
// 🎨 COMPONENTE: MODULE ACCORDION
// ============================================
const ModuleAccordion = ({ module, index, darkMode }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Primer módulo abierto por defecto

  return (
    <div className={`module-accordion ${darkMode ? 'dark' : ''}`}>
      {/* Header del módulo */}
      <button
        className="module-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        data-cursor='active'
      >
        <div className="module-accordion-title">
          <BookOpen className="w-5 h-5" />
          <div>
            <h3>{module.title}</h3>
            <span className="module-duration">{module.duration} • {module.lessons.length} lecciones</span>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {/* Contenido del módulo */}
      {isOpen && (
        <div className="module-accordion-content">
          {/* Lecciones */}
          {module.lessons.map((lesson) => (
            <div key={lesson.id} className="lesson-item">
              {lesson.type === 'video' ? (
                <PlayCircle className="w-4 h-4 text-purple-400" />
              ) : (
                <FileText className="w-4 h-4 text-blue-400" />
              )}
              <span className="lesson-title">{lesson.title}</span>
              <span className="lesson-duration">{lesson.duration}</span>
            </div>
          ))}

          {/* Trabajo Práctico (si existe) */}
          {module.assignment && (
            <div className="assignment-item">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="assignment-title">{module.assignment.title}</span>
                <span className="assignment-details">
                  {module.assignment.questions} preguntas • Aprobación: {module.assignment.passingScore}%
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================
// 📄 COMPONENTE PRINCIPAL: COURSE DETAIL
// ============================================
const CourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);

  // Obtener data del curso
  // First try to find by ID (string or number matching)
  const course = coursesData.find(c => String(c.id) === id);

  // Scroll al inicio
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!course) {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl font-bold">Curso no encontrado</h1>
            <button
              className="px-4 py-2 bg-[#22d3ee] text-black rounded-lg hover:bg-[#22d3ee]/80 transition-colors"
              onClick={() => navigate('/courses')}
            >
              Volver a cursos
            </button>
        </div>
    );
  }

  // Fallbacks for optional fields
  const instructor = course.instructor || {
    name: "Curioso AI Team",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ai",
    bio: "Equipo de expertos en IA"
  };

  const whatYouLearn = course.whatYouLearn || ["Fundamentos de IA", "Casos de uso", "Herramientas prácticas"];

  // Create default final exam and certificate objects if they don't exist in data
  const finalExam = course.finalExam || {
    title: "Examen Final",
    questions: 10,
    passingScore: 70,
    duration: "30 min"
  };

  const certificate = course.certificate || {
    name: `Certificado: ${course.title}`,
    format: "PDF Digital",
    verification: "Código único de verificación"
  };

  return (
    <>
      <CustomCursor />
      <div className={`course-detail-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header />

        <div className="course-detail-container">
          {/* Top bar */}
          <div className="course-detail-top-bar">
            <button 
              className="back-btn-detail" 
              onClick={() => navigate('/courses')}
              data-cursor='active'
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a cursos
            </button>
            
            <button 
              className="dark-mode-toggle-detail" 
              onClick={() => setDarkMode(!darkMode)}
              data-cursor='active'
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Hero Section */}
          <div className="course-hero-detail">
            {/* Imagen */}
            <div className="course-hero-image">
              <img src={course.thumbnail} alt={course.title} onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${course.title}&background=random&color=fff&size=512`;
              }} />
              <span className={`course-badge-detail badge-${course.badge ? course.badge.toLowerCase() : 'gratis'}`}>
                {course.badge || 'GRATIS'}
              </span>
            </div>

            {/* Info */}
            <div className="course-hero-info">
              <div className="course-category-detail">{course.category} • {course.level}</div>
              
              <h1 className="course-title-detail">{course.title}</h1>
              
              <p className="course-description-detail">{course.description}</p>

              {/* Meta info */}
              <div className="course-meta-detail">
                <div className="meta-item-detail">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span><strong>{course.rating || '4.5'}</strong> ({course.students ? course.students.toLocaleString() : '100+'} estudiantes)</span>
                </div>
                <div className="meta-item-detail">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item-detail">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.modules ? course.modules.length : 0} módulos</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="course-cta-section">
                <div className="course-price-detail">
                  {course.price === 0 ? (
                    <span className="price-free">GRATIS</span>
                  ) : (
                    <span className="price-paid">${course.price}</span>
                  )}
                </div>
                <button className="enroll-btn" data-cursor='active'>
                  {course.price === 0 ? 'Inscribirme Gratis' : 'Comprar Curso'}
                </button>
              </div>

              {/* Instructor */}
              <div className="instructor-card-detail">
                <img src={instructor.avatar} alt={instructor.name} />
                <div>
                  <span className="instructor-label">Instructor</span>
                  <h4>{instructor.name}</h4>
                  <p>{instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* What you'll learn */}
          <div className="what-learn-section">
            <h2>¿Qué aprenderás?</h2>
            <div className="learn-grid">
              {whatYouLearn.map((item, index) => (
                <div key={index} className="learn-item">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Content */}
          <div className="course-content-section">
            <h2>Contenido del Curso</h2>
            <div className="modules-container">
              {course.modules && course.modules.map((module, index) => (
                <ModuleAccordion 
                  key={module.id} 
                  module={module} 
                  index={index}
                  darkMode={darkMode}
                />
              ))}

              {/* Examen Final */}
              <div className={`final-exam-card ${darkMode ? 'dark' : ''}`}>
                <Award className="w-6 h-6 text-amber-400" />
                <div>
                  <h3>{finalExam.title}</h3>
                  <p>{finalExam.questions} preguntas • {finalExam.duration} • Aprobación: {finalExam.passingScore}%</p>
                </div>
              </div>

              {/* Certificado */}
              <div className={`certificate-card ${darkMode ? 'dark' : ''}`}>
                <Award className="w-6 h-6 text-purple-400" />
                <div>
                  <h3>{certificate.name}</h3>
                  <p>{certificate.format} con {certificate.verification}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Description */}
          {course.fullDescription && (
            <div className="full-description-section">
                <h2>Descripción Completa</h2>
                <p>{course.fullDescription}</p>
            </div>
          )}

          {/* CTA Final */}
          <div className="final-cta-section">
            <h2>¿Listo para empezar?</h2>
            <p>Únete a {course.students ? course.students.toLocaleString() : 'muchos'} estudiantes que ya están aprendiendo</p>
            <button className="enroll-btn-large" data-cursor='active'>
              {course.price === 0 ? 'Inscribirme Gratis Ahora' : `Comprar por $${course.price}`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;

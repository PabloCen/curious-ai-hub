import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, Moon, Sun, Star, Users, Clock, BookOpen, 
  CheckCircle, PlayCircle, FileText, Award, ChevronDown, ChevronUp 
} from 'lucide-react';
import Header from '../components/layout/Header';
import CustomCursor from '../components/ui/CustomCursor';

// ============================================
// 📚 DATA DE EJEMPLO (después viene de Supabase)
// ============================================
const courseDetailData = {
  1: {
    id: 1,
    title: "Fundamentos de IA",
    description: "Aprende los conceptos básicos de Inteligencia Artificial, Machine Learning y Deep Learning desde cero. Este curso te dará las bases sólidas para entender cómo funcionan las IAs modernas.",
    fullDescription: "En este curso completo, explorarás el fascinante mundo de la Inteligencia Artificial desde sus fundamentos hasta aplicaciones prácticas. Aprenderás qué es realmente la IA, cómo funciona el Machine Learning, y las diferencias entre distintos tipos de modelos. No necesitas conocimientos previos de programación.",
    category: "Fundamentos",
    level: "Principiante",
    duration: "2 semanas",
    modules: 2,
    students: 1234,
    rating: 4.9,
    price: 0,
    badge: "GRATIS",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    instructor: {
      name: "Curious AI Team",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ai",
      bio: "Equipo de expertos en IA con más de 10 años de experiencia"
    },
    whatYouLearn: [
      "Conceptos fundamentales de IA, ML y Deep Learning",
      "Diferencias entre tipos de Inteligencia Artificial",
      "Historia y evolución de la IA",
      "Casos de uso reales en distintas industrias",
      "Principales herramientas de IA del mercado",
      "Ética y limitaciones de la IA actual"
    ],
    modules: [
      {
        id: 1,
        title: "Módulo 1: ¿Qué es la IA?",
        duration: "1 semana",
        lessons: [
          { id: 1, title: "Historia de la Inteligencia Artificial", type: "video", duration: "10 min" },
          { id: 2, title: "Conceptos básicos: IA vs ML vs Deep Learning", type: "reading", duration: "15 min" },
          { id: 3, title: "Tipos de IA: débil vs fuerte", type: "video", duration: "12 min" },
          { id: 4, title: "Casos de uso actuales", type: "reading", duration: "8 min" }
        ],
        assignment: {
          title: "TP1: Cuestionario - Identificar tipos de IA",
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 2,
        title: "Módulo 2: Ecosistema de IAs",
        duration: "1 semana",
        lessons: [
          { id: 5, title: "Principales herramientas: ChatGPT, MidJourney, etc.", type: "video", duration: "20 min" },
          { id: 6, title: "IA por industria: salud, finanzas, educación", type: "reading", duration: "15 min" },
          { id: 7, title: "Ética y sesgos en IA", type: "video", duration: "18 min" },
          { id: 8, title: "Limitaciones actuales de la IA", type: "reading", duration: "10 min" }
        ],
        assignment: {
          title: "TP2: Relacionar herramientas con casos de uso",
          questions: 10,
          passingScore: 70
        }
      }
    ],
    finalExam: {
      title: "Examen Final",
      questions: 20,
      passingScore: 75,
      duration: "45 min"
    },
    certificate: {
      name: "Certificado: Fundamentos de IA",
      format: "PDF Digital",
      verification: "Código único de verificación"
    }
  },
  // MÁS CURSOS SE AGREGAN ACÁ...




  
};

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

          {/* Trabajo Práctico */}
          <div className="assignment-item">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <div>
              <span className="assignment-title">{module.assignment.title}</span>
              <span className="assignment-details">
                {module.assignment.questions} preguntas • Aprobación: {module.assignment.passingScore}%
              </span>
            </div>
          </div>
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

  // Obtener data del curso (después desde Supabase)
  const course = courseDetailData[id] || courseDetailData[1];

  // Scroll al inicio
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
              <img src={course.thumbnail} alt={course.title} />
              <span className={`course-badge-detail badge-${course.badge.toLowerCase()}`}>
                {course.badge}
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
                  <span><strong>{course.rating}</strong> ({course.students.toLocaleString()} estudiantes)</span>
                </div>
                <div className="meta-item-detail">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item-detail">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.modules.length} módulos</span>
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
                <img src={course.instructor.avatar} alt={course.instructor.name} />
                <div>
                  <span className="instructor-label">Instructor</span>
                  <h4>{course.instructor.name}</h4>
                  <p>{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* What you'll learn */}
          <div className="what-learn-section">
            <h2>¿Qué aprenderás?</h2>
            <div className="learn-grid">
              {course.whatYouLearn.map((item, index) => (
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
              {course.modules.map((module, index) => (
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
                  <h3>{course.finalExam.title}</h3>
                  <p>{course.finalExam.questions} preguntas • {course.finalExam.duration} • Aprobación: {course.finalExam.passingScore}%</p>
                </div>
              </div>

              {/* Certificado */}
              <div className={`certificate-card ${darkMode ? 'dark' : ''}`}>
                <Award className="w-6 h-6 text-purple-400" />
                <div>
                  <h3>{course.certificate.name}</h3>
                  <p>{course.certificate.format} con {course.certificate.verification}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="full-description-section">
            <h2>Descripción Completa</h2>
            <p>{course.fullDescription}</p>
          </div>

          {/* CTA Final */}
          <div className="final-cta-section">
            <h2>¿Listo para empezar?</h2>
            <p>Únete a {course.students.toLocaleString()} estudiantes que ya están aprendiendo</p>
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
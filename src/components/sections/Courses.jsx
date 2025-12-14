import React from "react";
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Star, Sparkles } from "lucide-react";
import { coursesData } from '../../data/coursesData';

const CourseCard = ({ course }) => {
  return (
    <div className={`course-card ${course.colorClass}`} data-cursor-big onClick={() => window.location.href = `/courses/${course.id}`}>
      {/* Badge superior */}
      <div className="course-badge-container">
        <span className={`course-badge course-badge-${course.badge ? course.badge.toLowerCase() : 'gratis'}`}>
          {course.badge || 'GRATIS'}
        </span>
      </div>

      {/* Contenido de la card */}
      <div className="course-card-content">
        {/* Número grande (opcional, usando ID o índice si no hay número explícito) */}
        {/* <div className="course-number">{String(course.id).padStart(2, '0')}</div> */}

        {/* Ícono Placeholder (se podría mapear por categoría si se quisiera) */}
        <div className="course-icon-wrapper">
          <BookOpen className="course-icon" />
        </div>

        {/* Título y subtítulo */}
        <div className="course-text-info">
          <span className="course-subtitle">{course.level}</span>
          <h3 className="course-title">{course.title}</h3>
        </div>

        {/* Descripción */}
        <p className="course-description line-clamp-2">{course.description}</p>

        {/* Info inferior */}
        <div className="course-footer">
          <div className="course-meta">
             <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span className="course-duration">{course.duration}</span>
             </div>
          </div>
          <div className="course-price">{course.price === 0 ? "GRATIS" : `$${course.price}`}</div>
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="course-card-shine"></div>
    </div>
  );
};

const Courses = () => {
  const navigate = useNavigate();
  // Take first 4 courses for preview
  const previewCourses = coursesData.slice(0, 4);

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        {/* Header */}
        <div className="courses-header">
          <div className="courses-header-badge">
            <Sparkles className="w-5 h-5" />
            <span>Aprende con IA</span>
          </div>
          <h2 className="courses-main-title">
            Cursos de <span className="courses-highlight">Inteligencia Artificial</span>
          </h2>
          <p className="courses-subtitle">
            Domina la IA aplicada a diferentes disciplinas científicas y profesionales
          </p>
        </div>

        {/* Grid de cursos */}
        <div className="courses-grid">
          {previewCourses.map((course, index) => (
            <div
              key={course.id}
              className="course-card-wrapper"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="courses-cta">
          <button className="courses-cta-button" onClick={() => navigate("/courses")}>
            Ver todos los cursos
            <svg
              className="courses-cta-arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;

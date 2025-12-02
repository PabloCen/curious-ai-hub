import React, { useEffect, useState } from "react";
import { BookOpen, Microscope, Atom, Star, Sparkles } from "lucide-react";

 import { useNavigate } from 'react-router-dom';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};
const coursesData = [
  {
    id: 1,
    number: "01",
    title: "Introducción a IA",
    subtitle: "Curso Básico",
    description: "Aprende los fundamentos de la Inteligencia Artificial desde cero.",
    level: "Principiante",
    duration: "4 semanas",
    price: "GRATIS",
    badge: "GRATIS",
    icon: BookOpen,
    colorClass: "course-card-cyan",
  },
  {
    id: 2,
    number: "02",
    title: "IA en Ciencias",
    subtitle: "Curso Intermedio",
    description: "Descubre cómo la IA revoluciona la investigación científica.",
    level: "Intermedio",
    duration: "6 semanas",
    price: "$49.99",
    badge: "POPULAR",
    icon: Atom,
    colorClass: "course-card-purple",
  },
  {
    id: 3,
    number: "03",
    title: "IA en Biología",
    subtitle: "Curso Avanzado",
    description: "Aplica IA en genética, medicina y biotecnología avanzada.",
    level: "Avanzado",
    duration: "8 semanas",
    price: "$79.99",
    badge: "PREMIUM",
    icon: Microscope,
    colorClass: "course-card-magenta",
  },
  {
    id: 4,
    number: "04",
    title: "IA en Astronomía",
    subtitle: "Curso Experto",
    description: "Explora el universo con algoritmos de aprendizaje profundo.",
    level: "Experto",
    duration: "10 semanas",
    price: "$99.99",
    badge: "PRO",
   icon: Star,
    colorClass: "course-card-gradient",
  },
];

const CourseCard = ({ course }) => {
  const Icon = course.icon;

  return (
    <div className={`course-card ${course.colorClass}`} data-cursor-big>
      {/* Badge superior */}
      <div className="course-badge-container">
        <span className={`course-badge course-badge-${course.badge.toLowerCase()}`}>
          {course.badge}
        </span>
      </div>

      {/* Contenido de la card */}
      <div className="course-card-content">
        {/* Número grande */}
        <div className="course-number">{course.number}</div>

        {/* Ícono */}
        <div className="course-icon-wrapper">
          <Icon className="course-icon" />
        </div>

        {/* Título y subtítulo */}
        <div className="course-text-info">
          <span className="course-subtitle">{course.subtitle}</span>
          <h3 className="course-title">{course.title}</h3>
        </div>

        {/* Descripción */}
        <p className="course-description">{course.description}</p>

        {/* Info inferior */}
        <div className="course-footer">
          <div className="course-meta">
            <span className="course-level">{course.level}</span>
            <span className="course-duration">{course.duration}</span>
          </div>
          <div className="course-price">{course.price}</div>
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="course-card-shine"></div>
    </div>
  );
};

const Courses = () => {
  const navigate = useNavigate();
  return (
    <>
      <CustomCursor />
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
              Domina la IA aplicada a diferentes disciplinas científicas
            </p>
          </div>

          {/* Grid de cursos */}
          <div className="courses-grid">
            {coursesData.map((course, index) => (
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
            <button className="courses-cta-button"
             onClick={() => navigate("/courses")} 
             >

              Ver todos los cursos
              <svg
                className="courses-cta-arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"s
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
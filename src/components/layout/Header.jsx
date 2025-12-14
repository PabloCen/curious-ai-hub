import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { User, LogOut } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
      logout();
      navigate("/");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "h-[70px] bg-black/20 backdrop-blur-md"
          : "h-[70px] bg-gradient-to-r from-[#0a1720]/95 via-[#1b1345]/95 to-[#2b0d3a]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-full">
        {/* LOGO */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <img
            src="/images/logo-header.png"
            alt="Curious AI Hub"
            className={`h-14 md:h-40 transition-transform duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          />
        </button>

        {/* MENÚ DESKTOP */}
        <nav
          className={`hidden md:flex items-center gap-6 text-sm font-medium transition-opacity duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <button onClick={() => scrollToSection("hero")} className="hover:text-[#9d4edd]">Inicio</button>
          <button onClick={() => navigate("/tools")} className="hover:text-[#9d4edd]">Herramientas IA</button>
          <button onClick={() => navigate("/courses")} className="hover:text-[#9d4edd]">Cursos</button>
          <button onClick={() => navigate("/news")} className="hover:text-[#9d4edd]">Noticias</button>
        </nav>

        {/* BOTONES DERECHA – DESKTOP */}
        <div
          className={`hidden md:flex items-center gap-3 transition-opacity duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {user ? (
              <div className="flex items-center gap-4">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-cyan-400" />
                      Hola, {user.nombre}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                      <LogOut className="w-4 h-4" />
                      Salir
                  </button>
              </div>
          ) : (
            <>
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="boton-sesion px-4 py-2 rounded-xl bg-gradient-to-tr from-[#9d4edd] to-[#06b6d4] hover:scale-[1.03] transition duration-200 ease-in-out text-sm font-semibold text-white shadow-[0_0_15px_rgba(157,78,221,0.8)]"
                >
                    Iniciar sesión
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="boton-sesion px-4 py-2 rounded-xl bg-gradient-to-tr from-[#9d4edd] to-[#06b6d4] hover:scale-[1.03] transition duration-200 ease-in-out text-sm font-semibold text-white shadow-[0_0_15px_rgba(157,78,221,0.8)]"
                >
                    Registrarse
                </button>
            </>
          )}
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className={`mobile-menu-toggle ${
              isMobileMenuOpen ? "is-open" : ""
            }`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir menú móvil"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu md:hidden">
          <button className="mobile-menu-btn mobile-menu-btn--nav" onClick={() => scrollToSection("hero")}>Inicio</button>
          <button className="mobile-menu-btn mobile-menu-btn--nav" onClick={() => navigate("/tools")}>Herramientas IA</button>
          <button className="mobile-menu-btn mobile-menu-btn--nav" onClick={() => navigate("/courses")}>Cursos</button>
          <button className="mobile-menu-btn mobile-menu-btn--nav" onClick={() => navigate("/news")}>Noticias</button>

          {user ? (
            <>
                 <div className="text-center py-2 text-white font-medium">Hola, {user.nombre}</div>
                 <button className="mobile-menu-btn mobile-menu-btn--ghost" onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
                <button className="mobile-menu-btn mobile-menu-btn--ghost" onClick={() => navigate("/login")}>Iniciar sesión</button>
                <button className="mobile-menu-btn mobile-menu-btn--primary" onClick={() => navigate("/register")}>Registrarse</button>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;

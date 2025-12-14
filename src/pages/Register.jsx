import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    acceptTerms: false
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.acceptTerms) {
      setError("Debes aceptar los términos y condiciones");
      setLoading(false);
      return;
    }

    try {
      // Create username from email or name (simple logic for now)
      const username = formData.email.split('@')[0] + Math.floor(Math.random() * 1000);

      await register({
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        password: formData.password,
        username,
        acceptTerms: formData.acceptTerms
      });

      // Redirect to login on success
      navigate("/login");
    } catch (err) {
      setError(err.message || "Error al registrarse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex relative overflow-hidden">
      {/* Columna Izquierda: Formulario (40%) */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 sm:px-12 md:px-20 relative z-20">
        
        {/* Botón volver */}
        <div className="absolute top-8 left-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">Crea tu cuenta 🚀</h1>
            <p className="text-slate-400">
              Únete a nuestra comunidad y domina la IA.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Juan"
                  className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  placeholder="Pérez"
                  className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="juan@ejemplo.com"
                className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-slate-600 text-purple-500 focus:ring-purple-500 bg-[#0f172a]"
              />
              <span className="text-sm text-slate-400">
                Acepto los <a href="#" className="text-purple-400 hover:text-purple-300">Términos y Condiciones</a> y la Política de Privacidad.
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Registrando..." : "Registrarse"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Spline 3D (60%) */}
      <div className="hidden lg:block w-[60%] bg-[#0f172a] relative">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/kZDDjO5HvB9F3X89/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020617] pointer-events-none" />
      </div>
    </div>
  );
}

export default Register;

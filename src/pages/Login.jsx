import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
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
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white mb-3">¡Hola de nuevo! 👋</h1>
            <p className="text-slate-400">
              Ingresa tus datos para continuar explorando el mundo de la IA.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ejemplo@correo.com"
                className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-300">
                  Contraseña
                </label>
                <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Iniciando..." : "Iniciar Sesión"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              ¿No tienes cuenta?{" "}
              <Link to="/register" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Regístrate gratis
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

export default Login;

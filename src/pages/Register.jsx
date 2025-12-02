import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Sparkles, Check } from 'lucide-react';
import CustomCursor from '../components/ui/CustomCursor';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.97/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('¡Registro exitoso! (En producción aquí se enviaría al backend)');
  };

  return (
    <>
      <CustomCursor />
      
      <div className="min-h-screen bg-gradient-to-br from-[#0a1720] via-[#0d1117] to-[#1a0b2e] relative overflow-hidden flex items-center justify-center py-20 px-4">
        
        {/* Efectos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9d4edd]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        </div>

        {/* Botón volver al inicio */}
        <div className="fixed top-6 left-6 z-50">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900/90 hover:bg-slate-800 border border-cyan-400/40 hover:border-cyan-400/70 rounded-xl backdrop-blur-xl transition-all duration-300 text-slate-300 hover:text-cyan-300 text-sm font-medium shadow-lg hover:shadow-cyan-500/20"
          >
            <span>←</span>
            <span className="hidden sm:inline">Volver al inicio</span>
          </a>
        </div>

        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center relative z-10">
          
          {/* LADO IZQUIERDO - Robot 3D */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            
            {/* Robot 3D de Spline */}
            <div className="relative w-[550px] h-[550px] xl:w-[650px] xl:h-[650px]">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-[100px]"></div>
              <spline-viewer 
                url="https://prod.spline.design/u0MiRrYhet11ywU1/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              ></spline-viewer>
            </div>

            {/* Botón "Únete al futuro" */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <button className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500/15 to-cyan-400/15 hover:from-cyan-500/25 hover:to-cyan-400/25 border border-cyan-400/40 rounded-xl backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span className="text-cyan-100 font-medium text-sm">Únete al futuro de la IA</span>
              </button>
            </div>
          </div>

          {/* LADO DERECHO - Formulario */}
          <div className="w-full max-w-[520px] mx-auto lg:mx-0">
            
            {/* Card principal */}
            <div className="relative group">
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
                
                {/* Badge superior */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 border border-cyan-400/50 rounded-full backdrop-blur-xl">
                    <Check className="w-4 h-4 text-cyan-300" />
                    <span className="text-cyan-100 text-xs font-semibold uppercase tracking-wide">
                      Registro 100% Gratuito
                    </span>
                  </div>
                </div>

                {/* Título */}
                <div className="text-center mb-6">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Únete a <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Curious AI Hub</span>
                  </h1>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Accede a +100 herramientas de IA, cursos exclusivos y una comunidad apasionada por la tecnología.{' '}
                    <span className="text-cyan-400 font-semibold">Todo en un solo lugar.</span>
                  </p>
                </div>

                {/* Formulario */}
                <div className="space-y-4">
                  
                  {/* FILA 1: Nombre / Apellido / Usuario */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="flex items-center gap-1 text-cyan-100 text-xs font-semibold mb-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-3 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-xl"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-cyan-100 text-xs font-semibold mb-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        Apellido
                      </label>
                      <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Tu apellido"
                        className="w-full px-3 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-xl"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-cyan-100 text-xs font-semibold mb-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        Usuario
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Usuario único"
                        className="w-full px-3 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-xl"
                      />
                    </div>
                  </div>

                  {/* FILA 2: Email / Contraseña / Confirmar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="flex items-center gap-1 text-cyan-100 text-xs font-semibold mb-1.5">
                        📧 Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                        className="w-full px-3 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-xl"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-cyan-100 text-xs font-semibold mb-1.5">
                        🔒 Contraseña
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Min. 8 caracteres"
                          className="w-full px-3 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-xl pr-9"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-cyan-100 text-xs font-semibold mb-1.5">
                        🔒 Confirmar
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Repetir contraseña"
                          className="w-full px-3 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-xl pr-9"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="flex items-start gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                          className="w-4 h-4 appearance-none border-2 border-cyan-400/50 rounded bg-slate-800/50 checked:bg-gradient-to-br checked:from-cyan-500 checked:to-purple-500 checked:border-transparent transition-all cursor-pointer"
                        />
                        {acceptTerms && (
                          <Check className="w-2.5 h-2.5 text-white absolute pointer-events-none" />
                        )}
                      </div>
                      <span className="text-xs text-slate-300 group-hover:text-slate-200 transition-colors">
                        Acepto los{' '}
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 underline">
                          términos y condiciones
                        </a>{' '}
                        y la{' '}
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 underline">
                          política de privacidad
                        </a>
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={acceptNewsletter}
                          onChange={(e) => setAcceptNewsletter(e.target.checked)}
                          className="w-4 h-4 appearance-none border-2 border-cyan-400/50 rounded bg-slate-800/50 checked:bg-gradient-to-br checked:from-cyan-500 checked:to-purple-500 checked:border-transparent transition-all cursor-pointer"
                        />
                        {acceptNewsletter && (
                          <Check className="w-2.5 h-2.5 text-white absolute pointer-events-none" />
                        )}
                      </div>
                      <span className="text-xs text-slate-300 group-hover:text-slate-200 transition-colors">
                        Quiero recibir el newsletter semanal con las mejores IA
                      </span>
                    </label>
                  </div>

                  {/* Botón Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2 group mt-4"
                  >
                    <span>REGISTRARTE GRATIS</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-cyan-400/20">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-cyan-400">5,000+</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wide">Usuarios</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-cyan-400">4.9/5</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wide">Valoración</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-cyan-400">150+</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wide">Herramientas</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-3">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-400/30">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-slate-300">Acceso a todos los recursos</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-400/30">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-slate-300">Newsletter semanal gratis</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-400/30">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-slate-300">Comunidad exclusiva 24/7</span>
                    </div>
                  </div>

                </div>

                {/* Link a login */}
                <div className="text-center mt-4">
                  <p className="text-slate-400 text-xs">
                    ¿Ya tenés cuenta?{' '}
                    <a href="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold underline">
                      Iniciá sesión acá
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Register;
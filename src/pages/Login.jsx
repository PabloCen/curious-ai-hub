import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Sparkles, LogIn, AlertCircle } from 'lucide-react';
import CustomCursor from '../components/ui/CustomCursor';
import { px } from 'framer-motion';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Login submitted:', formData);
    alert('¡Inicio de sesión exitoso! (En producción se enviaría al backend)');
  };

  return (
    <>
      <CustomCursor />
      
      <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2b0d3a] to-[#3d1054] relative overflow-hidden flex items-center justify-center py-12 px-4">
        
        {/* Efectos de fondo morado/rosa */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9d4edd]/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"></div>
        </div>

        {/* Botón volver al inicio - FUERA del grid */}
        <div className="absolute top-8 left-8 z-50">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a0b2e]/90 hover:bg-[#2b0d3a] border border-purple-400/40 hover:border-purple-400/70 rounded-xl backdrop-blur-xl transition-all duration-300 text-slate-300 hover:text-purple-300 text-sm font-medium shadow-lg hover:shadow-purple-500/20"
          >
            <span>←</span>
            <span>Volver al inicio</span>
          </a>
        </div>

        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-[500px_1fr] gap-20 items-center relative z-10">
          
          {/* LADO IZQUIERDO - Formulario de Login */}
          <div className="w-full lg:order-1">
            
            {/* Card principal con glassmorphism */}
            <div className="relative group">
              
              {/* Glow effect morado/rosa */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-600/50 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1a0b2e]/95 to-[#2b0d3a]/95 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
                
                {/* Badge superior */}
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 rounded-full backdrop-blur-xl">
                    <LogIn className="w-4 h-4 text-purple-300" />
                    <span className="text-purple-100 text-sm font-semibold uppercase tracking-wide">
                      Bienvenido de vuelta
                    </span>
                  </div>
                </div>

                {/* Título */}
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold mb-3">
                    Inicia sesión en <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CAH</span>
                  </h1>
                  <p className="text-slate-300">
                    Accede a tu cuenta y continúa explorando el{' '}
                    <span className="text-purple-400 font-semibold">mundo de la IA</span>
                  </p>
                </div>

                {/* Formulario */}
                <div className="space-y-5">
                  
                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-purple-100 text-sm font-semibold mb-2">
                      <span>📧</span>
                      Email o nombre de usuario
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full px-4 py-3 bg-[#1a0b2e]/50 border border-purple-400/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backdrop-blur-xl"
                    />
                  </div>

                  {/* Contraseña */}
                  <div>
                    <label className="flex items-center gap-2 text-purple-100 text-sm font-semibold mb-2">
                      <span>🔒</span>
                      Contraseña
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Ingresa tu contraseña"
                        className="w-full px-4 py-3 bg-[#1a0b2e]/50 border border-purple-400/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backdrop-blur-xl pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-400 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember me y Forgot password */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-5 h-5 appearance-none border-2 border-purple-400/50 rounded bg-[#1a0b2e]/50 checked:bg-gradient-to-br checked:from-purple-500 checked:to-pink-500 checked:border-transparent transition-all cursor-pointer"
                        />
                        {rememberMe && (
                          <Sparkles className="w-3 h-3 text-white absolute pointer-events-none" />
                        )}
                      </div>
                      <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                        Recordarme
                      </span>
                    </label>

                    <a href="#" className="text-sm text-purple-400 hover:text-pink-400 font-semibold transition-colors">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>

                  {/* Botón Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-center gap-2 group mt-6"
                  >
                    <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>INICIAR SESIÓN</span>
                  </button>

                  {/* Divider */}
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-purple-400/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-gradient-to-br from-[#1a0b2e]/95 to-[#2b0d3a]/95 text-slate-400">
                        O continúa con
                      </span>
                    </div>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 bg-[#1a0b2e]/50 border border-purple-400/30 rounded-xl text-white hover:bg-purple-500/10 hover:border-purple-400/50 transition-all backdrop-blur-xl">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-sm font-semibold">Google</span>
                    </button>

                    <button className="flex items-center justify-center gap-2 py-3 bg-[#1a0b2e]/50 border border-purple-400/30 rounded-xl text-white hover:bg-purple-500/10 hover:border-purple-400/50 transition-all backdrop-blur-xl">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-sm font-semibold">GitHub</span>
                    </button>
                  </div>

                  {/* Info adicional */}
                  <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-400/30 rounded-xl mt-6">
                    <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-300">
                      <span className="font-semibold text-purple-300">Tip:</span> Si tenés problemas para iniciar sesión, verificá que tu correo esté confirmado o{' '}
                      <a href="#" className="text-purple-400 hover:text-pink-400 underline">
                        contactá soporte
                      </a>
                    </div>
                  </div>

                </div>

                {/* Link a registro */}
                <div className="text-center mt-6">
                  <p className="text-slate-400 text-sm">
                    ¿No tenés cuenta?{' '}
                    <a href="/register" className="text-purple-400 hover:text-pink-400 font-semibold underline">
                      Registrate gratis
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* LADO DERECHO - Robot 3D + Features SEPARADAS */}
          <div className="hidden lg:flex flex-col items-start justify-center space-y-8 lg:order-2 relative pl-12">
            
            {/* Robot 3D de Spline - CON PADDING GRANDE */}
            <div className="relative w-[550px] h-[550px] -mr-32">
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-[100px]"></div>
              <spline-viewer 
                url="https://prod.spline.design/4Q4OY40HFjOlKoLb/scene.splinecode"
                style={{width: '200%',
                   height: '100%',
                   marginLeft: '-90px',
                  }}
              ></spline-viewer>
            </div>

            {/* Features DEBAJO del robot, bien separadas */}
            <div className="space-y-4 w-full max-w-md ml-52 ">
              <div className="flex items-start gap-4 p-4 bg-purple-500/10 backdrop-blur-xl border border-purple-400/30 rounded-2xl hover:bg-purple-500/15 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">+150 Herramientas de IA</h3>
                  <p className="text-slate-300 text-sm">Descubrí las mejores IA organizadas por categoría</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-500/10 backdrop-blur-xl border border-purple-400/30 rounded-2xl hover:bg-purple-500/15 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Cursos exclusivos</h3>
                  <p className="text-slate-300 text-sm">Aprendé IA desde cero hasta nivel experto</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-500/10 backdrop-blur-xl border border-purple-400/30 rounded-2xl hover:bg-purple-500/15 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Comunidad activa 24/7</h3>
                  <p className="text-slate-300 text-sm">Conectá con más de 5,000 usuarios apasionados</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
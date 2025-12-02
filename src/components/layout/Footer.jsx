import React from 'react';
import { BrainCircuit, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";


const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: '🚧 ¡Función en desarrollo!',
      description: 'La suscripción al newsletter estará disponible pronto. 🚀',
    });
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Twitter />, href: '#' },
    { icon: <Linkedin />, href: '#' },
    { icon: <Youtube />, href: '#' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: 'hero' },
    { name: 'Herramientas', href: 'tools' },
    { name: 'Cursos', href: 'courses' },
    { name: 'Quiz', href: 'quiz' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-2">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-white">Curious AI Hub</span>
            </a>
            <p className="text-gray-400">
              Tu centro de conocimiento para explorar, aprender y dominar el universo de la inteligencia artificial.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <p className="font-bold text-white text-lg">Links Rápidos</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={`#${link.href}`} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-400 hover:text-secondary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-4">
            <p className="font-bold text-white text-lg">Suscríbete al Newsletter</p>
            <p className="text-gray-400">Recibe las últimas noticias y tutoriales de IA directamente en tu correo.</p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="tu.email@ejemplo.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-primary/30 focus:ring-2 focus:ring-secondary focus:outline-none text-white min-h-[44px]"
                required
              />
              <Button type="submit" variant="default" className="shrink-0">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Curious AI Hub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Linkedin, Instagram, Facebook } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-quantic-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-3">
            <img 
              src="/logo_f_white.png"
              alt="Quantic Logo"
              className="h-8 w-auto brightness-110"
              referrerPolicy="no-referrer"
            />


            
            <span className="font-syne font-bold text-lg tracking-[0.2em] text-white">QUANTIC</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a 
              href="https://www.linkedin.com/company/quantic-techlab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-quantic-cyan transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a 
              href="https://www.instagram.com/quantic.bo?igsh=MWp5Y3F4OHBnaWtvNg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-quantic-cyan transition-colors"
            >
              <Instagram size={20} />
            </a>

            <a 
              href="https://www.facebook.com/share/1ApEKKwWtS/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-quantic-cyan transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#servicios" className="text-sm text-gray-500 hover:text-quantic-cyan transition-colors">Servicios</a>
            <a href="#formacion" className="text-sm text-gray-500 hover:text-quantic-cyan transition-colors">Formación</a>
            <a href="#portafolio" className="text-sm text-gray-500 hover:text-quantic-cyan transition-colors">Portafolio</a>
            <a href="#contacto" className="text-sm text-gray-500 hover:text-quantic-cyan transition-colors">Contacto</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600">
            © 2025 Quantic. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Santa Cruz, Bolivia
          </p>
        </div>
      </div>
    </footer>
  );
}

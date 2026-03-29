import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';


export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Formación', href: '#formacion' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-scrolled py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo_f_white.png"
            alt="Quantic Logo"
            className="h-10 w-auto"
            
          />
          <span className="font-syne font-bold text-xl tracking-[0.2em] text-white hidden sm:block">QUANTIC</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-quantic-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-quantic-cyan text-quantic-bg px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white transition-all hover:shadow-[0_0_20px_rgba(0,191,255,0.4)]"
          >
            Hablemos <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-quantic-bg border-b border-quantic-cyan/10 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-quantic-cyan text-quantic-bg px-6 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hablemos <ArrowRight size={18} />
          </a>
        </div>
      )}
    </nav>
  );
}

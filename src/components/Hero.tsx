import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-radial -z-10 pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-8">
            <img 
            src="/logo_f_white.png"
            alt="Quantic Logo"
            className="h-24 w-auto brightness-125 drop-shadow-[0_0_15px_rgba(0,191,255,0.3)]"
            referrerPolicy="no-referrer" 
            />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Transformamos tus <br />
            <span className="text-quantic-cyan">datos en decisiones.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Automatizaciones, agentes de IA y dashboards inteligentes diseñados para escalar PYMEs con tecnología de vanguardia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-quantic-cyan text-quantic-bg px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(0,191,255,0.4)]"
            >
              Agendar diagnóstico gratuito <ArrowRight size={20} />
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto border border-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-all"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-gray-900 pt-12">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-syne font-bold text-quantic-cyan mb-1">5+</span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">Servicios</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-syne font-bold text-quantic-cyan mb-1">48h</span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">Primera entrega</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-syne font-bold text-quantic-cyan mb-1">2</span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">Co-founders</span>
          </div>
        </div>
      </div>
    </section>
  );
}

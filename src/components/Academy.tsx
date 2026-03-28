import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Sparkles, Zap, Search, Presentation, Code, Workflow, ArrowRight } from 'lucide-react';

const modules = [
  {
    title: 'Fundamentos de IA',
    desc: 'Prompts, modelos LLM y ventana de contexto.',
    icon: <Sparkles size={20} />
  },
  {
    title: 'Herramientas del día a día',
    desc: 'ChatGPT, Claude, Grok y Gemini.',
    icon: <Zap size={20} />
  },
  {
    title: 'Investigación con IA',
    desc: 'NotebookLM para análisis de documentos.',
    icon: <Search size={20} />
  },
  {
    title: 'Presentaciones con IA',
    desc: 'Gamma para slides profesionales en minutos.',
    icon: <Presentation size={20} />
  },
  {
    title: 'IA para developers',
    desc: 'Cursor y Claude Code para empresas tech.',
    icon: <Code size={20} />
  },
  {
    title: 'Flujos sin código',
    desc: 'N8N y Make para automatizar sin programar.',
    icon: <Workflow size={20} />
  }
];

export default function Academy() {
  const addToRefs = useIntersectionObserver();

  return (
    <section id="formacion" className="py-24 px-6 bg-[#111116] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="fade-up" ref={addToRefs}>
            <span className="inline-block px-4 py-1 rounded-full border border-quantic-cyan text-quantic-cyan text-xs font-bold tracking-widest mb-6">
              QUANTIC ACADEMY
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Tu equipo también <br /> puede pensar con IA.
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium italic border-l-2 border-quantic-cyan pl-6">
              "La ventaja competitiva ya no es el software que usas — es qué tan rápido tu gente aprende a usarlo. Formamos equipos que multiplican su productividad con IA."
            </p>
            
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-quantic-cyan text-quantic-bg px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all mb-4"
            >
              Solicitar taller para mi empresa <ArrowRight size={20} />
            </a>
            <p className="text-sm text-gray-500">
              Talleres presenciales y remotos · grupos desde 5 personas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-up" ref={addToRefs} style={{ transitionDelay: '200ms' }}>
            {modules.map((module, index) => (
              <div 
                key={index}
                className="bg-quantic-bg/50 p-6 rounded-2xl border border-white/5 hover:border-quantic-cyan/30 transition-all group"
              >
                <div className="w-10 h-10 bg-quantic-surface rounded-lg flex items-center justify-center mb-4 text-quantic-cyan group-hover:scale-110 transition-transform">
                  {module.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{module.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

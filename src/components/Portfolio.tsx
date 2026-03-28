import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink } from 'lucide-react';

const cases = [
  {
    title: 'Dashboard gerencial en tiempo real',
    sector: 'Distribución',
    desc: 'Centralización de datos de ventas y logística en un solo panel interactivo.',
    result: 'Ahorro de 12h semanales',
    active: true
  },
  {
    title: 'Próximo caso de éxito',
    sector: 'Tu sector',
    desc: 'Estamos listos para transformar tu operación con IA y datos.',
    result: 'Resultados medibles',
    active: false
  },
  {
    title: 'Próximo caso de éxito',
    sector: 'Tu sector',
    desc: 'Automatización inteligente diseñada para el crecimiento de tu PYME.',
    result: 'Eficiencia garantizada',
    active: false
  }
];

export default function Portfolio() {
  const addToRefs = useIntersectionObserver();

  return (
    <section id="portafolio" className="py-24 px-6 bg-quantic-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 fade-up" ref={addToRefs}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Casos de éxito</h2>
          <div className="w-20 h-1 bg-quantic-cyan" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cases.map((item, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className={`fade-up p-8 rounded-2xl transition-all duration-300 group ${
                item.active 
                ? 'bg-quantic-surface border border-white/5 hover:-translate-y-2 hover:border-quantic-cyan' 
                : 'border border-dashed border-gray-800 bg-transparent opacity-60'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-quantic-cyan/10 text-quantic-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                {item.sector}
              </span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-quantic-cyan transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                {item.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-green-400 font-bold text-sm">{item.result}</span>
                {item.active && <ExternalLink size={16} className="text-gray-600 group-hover:text-quantic-cyan" />}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-up" ref={addToRefs}>
          <p className="text-gray-500">
            ¿Tu empresa podría ser nuestro próximo caso de éxito?{' '}
            <a href="#contacto" className="text-quantic-cyan hover:underline font-bold">Hablemos hoy</a>
          </p>
        </div>
      </div>
    </section>
  );
}

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const members = [
  {
    name: 'Mauricio Diaz',
    role: 'AI & Automatizaciones',
    skills: ['LangChain', 'N8N', 'Python', 'ML'],
    bio: 'Especialista en orquestación de agentes de IA y flujos de trabajo autónomos para optimizar operaciones complejas.',
    initials: 'M'
  },
  {
    name: 'Sheila Rojas',
    role: 'Data & Desarrollo',
    skills: ['BI', 'Ciencia de datos', 'Fullstack', 'Machine Learning'],
    bio: 'Experta en arquitectura de datos y visualización estratégica, convirtiendo números crudos en tableros de mando accionables.',
    initials: 'S'
  }
];

export default function Team() {
  const addToRefs = useIntersectionObserver();

  return (
    <section id="equipo" className="py-24 px-6 bg-quantic-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up" ref={addToRefs}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quiénes somos</h2>
          <p className="text-xl text-gray-400">Dos co-founders técnicos que impulsan empresas con IA.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {members.map((member, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className="fade-up bg-quantic-surface p-10 rounded-3xl border border-white/5 hover:border-quantic-cyan/20 transition-all text-center group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-24 h-24 bg-quantic-bg border-2 border-quantic-cyan rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(0,191,255,0.2)] group-hover:scale-110 transition-transform">
                <span className="text-quantic-cyan font-syne font-bold text-4xl">{member.initials}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-quantic-cyan text-sm font-bold uppercase tracking-widest mb-6">{member.role}</p>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

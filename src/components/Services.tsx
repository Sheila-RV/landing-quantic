import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { LayoutDashboard, MessageSquare, FileText, Globe, BrainCircuit } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Dashboards automáticos',
    description: 'Google Sheets, Apps Script y Data Studio para visualizar tu negocio en tiempo real.',
    icon: <LayoutDashboard className="text-quantic-cyan" size={32} />
  },
  {
    id: '02',
    title: 'Chatbots & agentes IA',
    description: 'N8N, Make y WhatsApp API para automatizar la atención y ventas 24/7.',
    icon: <MessageSquare className="text-quantic-cyan" size={32} />
  },
  {
    id: '03',
    title: 'Automatización de documentos',
    description: 'OCR, APIs de IA y RAG para procesar facturas, contratos y reportes sin esfuerzo.',
    icon: <FileText className="text-quantic-cyan" size={32} />
  },
  {
    id: '04',
    title: 'Web Apps a medida',
    description: 'Desarrollo Fullstack con bases de datos y analytics integrados para tu operación.',
    icon: <Globe className="text-quantic-cyan" size={32} />
  },
  {
    id: '05',
    title: 'Sistemas RAG & Knowledge',
    description: 'LangChain y bases de datos vectoriales para que tu IA conozca toda tu empresa.',
    icon: <BrainCircuit className="text-quantic-cyan" size={32} />
  }
];

export default function Services() {
  const addToRefs = useIntersectionObserver();

  return (
    <section id="servicios" className="py-24 px-6 bg-quantic-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 fade-up" ref={addToRefs}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que hacemos</h2>
          <div className="w-20 h-1 bg-quantic-cyan" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              ref={addToRefs}
              className={`service-card fade-up relative bg-quantic-surface p-8 rounded-2xl border border-white/5 hover:bg-quantic-surface-light transition-all duration-300 group ${index >= 3 ? 'lg:col-span-1.5' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="service-card-line" />
              <div className="mb-6">{service.icon}</div>
              <span className="text-quantic-cyan/30 font-syne font-bold text-5xl absolute top-8 right-8 group-hover:text-quantic-cyan/10 transition-colors">
                {service.id}
              </span>
              <h3 className="text-2xl font-bold mb-4 pr-12">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

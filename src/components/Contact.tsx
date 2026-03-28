import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const addToRefs = useIntersectionObserver();
  const formspreeId = process.env.PUBLIC_FORMSPREE_ID || 'xxxxxxxl';
  const waNumber = process.env.PUBLIC_WA_NUMBER || '591XXXXXXXXX';

  return (
    <section id="contacto" className="py-24 px-6 bg-quantic-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <div className="fade-up" ref={addToRefs}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Hablemos</h2>
            <form action={`https://formspree.io/f/${formspreeId}`} method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Nombre</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-quantic-surface border border-white/10 rounded-xl px-4 py-3 focus:border-quantic-cyan outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Empresa</label>
                  <input 
                    type="text" 
                    name="company" 
                    required 
                    className="w-full bg-quantic-surface border border-white/10 rounded-xl px-4 py-3 focus:border-quantic-cyan outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full bg-quantic-surface border border-white/10 rounded-xl px-4 py-3 focus:border-quantic-cyan outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Servicio de interés</label>
                <select 
                  name="service" 
                  required 
                  className="w-full bg-quantic-surface border border-white/10 rounded-xl px-4 py-3 focus:border-quantic-cyan outline-none transition-colors appearance-none"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="dashboards">Dashboards automáticos</option>
                  <option value="chatbots">Chatbots & agentes IA</option>
                  <option value="ocr">Automatización de documentos</option>
                  <option value="webapp">Web Apps a medida</option>
                  <option value="rag">Sistemas RAG & Knowledge</option>
                  <option value="academy">Formación IA (Academy)</option>
                  <option value="other">No sé, quiero asesoría</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Mensaje</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full bg-quantic-surface border border-white/10 rounded-xl px-4 py-3 focus:border-quantic-cyan outline-none transition-colors resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-quantic-cyan text-quantic-bg font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,191,255,0.2)]"
              >
                Enviar mensaje <Send size={18} />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center gap-12 fade-up" ref={addToRefs} style={{ transitionDelay: '200ms' }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-quantic-cyan/10 rounded-lg flex items-center justify-center text-quantic-cyan shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Respuesta en 24h hábiles</h4>
                  <p className="text-sm text-gray-500">Valoramos tu tiempo. Recibirás una propuesta inicial rápidamente.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-quantic-cyan/10 rounded-lg flex items-center justify-center text-quantic-cyan shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Primera consulta gratuita</h4>
                  <p className="text-sm text-gray-500">Sin compromisos. Analizamos tu caso y te damos una hoja de ruta.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-quantic-surface rounded-3xl border border-white/5">
              <h4 className="text-xl font-bold mb-6">¿Prefieres WhatsApp?</h4>
              <a 
                href={`https://wa.me/${waNumber}?text=Hola%20Quantic%2C%20me%20interesa%20conocer%20sus%20servicios`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                <MessageCircle size={24} /> Chatear con nosotros
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

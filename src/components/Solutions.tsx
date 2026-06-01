import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Briefcase, Cpu, Zap, Network, Shield, BarChart3, X, CheckCircle2, Calendar } from 'lucide-react'

interface SolutionsProps {
  onNavigateToBooking: () => void
}

export function Solutions({ onNavigateToBooking }: SolutionsProps) {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[number] | null>(null)

  const solutions = [
    {
      id: '01',
      title: 'Sistemas Empresariales',
      description: 'ERPs internos, CRMs personalizados y plataformas de gestión optimizados para tu flujo corporativo.',
      subtitle: 'Control total, eficiencia centralizada y flujos de trabajo sin fricción.',
      detailedContent: 'Diseñamos sistemas que se alinean exactamente con el organigrama y los procesos de tu compañía. Centralizamos bases de datos, eliminamos silos operativos y garantizamos que cada departamento colabore en tiempo real con herramientas nativas rápidas, seguras y adaptadas a tu modelo de negocio.',
      benefits: [
        'Seguridad nivel bancario con encriptación SSL.',
        'Soporte multi-idioma y multi-divisa desde el día uno.',
        'Diseño adaptativo optimizado para tablets y dispositivos móviles.',
      ],
      icon: Briefcase,
    },
    {
      id: '02',
      title: 'Automatización',
      description: 'Reducción masiva de tareas manuales mediante flujos inteligentes e ingeniería de procesos.',
      subtitle: 'Elimina el error humano y escala la productividad corporativa.',
      detailedContent: 'El tiempo de tus colaboradores es valioso. Automatizamos la generación de reportes semanales, flujos de facturación, aprobaciones internas y procesos repetitivos mediante disparadores (triggers) y orquestadores inteligentes. Tu negocio operará 24/7 de forma autónoma.',
      benefits: [
        'Ahorro promedio del 85% en tiempo de procesamiento de tareas.',
        'Alertas y logs automáticos en tiempo real ante incidencias.',
        'Notificaciones automatizadas vía Slack, WhatsApp o Correo.',
      ],
      icon: Zap,
    },
    {
      id: '03',
      title: 'Inteligencia Artificial',
      description: 'Asistentes a medida, análisis predictivo de datos y automatizaciones avanzadas impulsadas por IA.',
      subtitle: 'Toma de decisiones estratégicas e automatización cognitiva avanzada.',
      detailedContent: 'Integramos modelos de lenguaje avanzados (LLMs) y analítica predictiva de datos en el corazón de tu negocio. Crea asistentes virtuales inteligentes de soporte al cliente, extrae información valiosa de miles de documentos en segundos o anticipa tendencias de ventas con precisión quirúrgica.',
      benefits: [
        'Integración con OpenAI y modelos de lenguaje de código abierto locales.',
        'Procesamiento de Lenguaje Natural avanzado para análisis de sentimiento.',
        'Algoritmos predictivos adaptados al comportamiento de tu sector.',
      ],
      icon: Cpu,
    },
    {
      id: '04',
      title: 'Integraciones',
      description: 'Conexión transparente de APIs, plataformas legadas, ERPs globales y servicios externos.',
      subtitle: 'Conectividad perfecta de toda tu infraestructura tecnológica.',
      detailedContent: 'Hacemos que tus sistemas hablen entre sí sin fricciones. Creamos pasarelas de comunicación estables entre ERPs (SAP, Oracle), CRMs (Salesforce, HubSpot), pasarelas de pago (Stripe) y tus propios desarrollos internos mediante integraciones API seguras e inmunes a caídas.',
      benefits: [
        'Sincronización bidireccional instantánea de datos críticos.',
        'Arquitectura robusta basada en eventos (Webhooks).',
        'Control total sobre cuotas, límites de tasa y rendimiento de API.',
      ],
      icon: Network,
    },
    {
      id: '05',
      title: 'Portales Web',
      description: 'Plataformas web corporativas ultra-seguras para clientes, proveedores y equipos remotos.',
      subtitle: 'Espacios de colaboración interactivos y ultra-seguros.',
      detailedContent: 'Ofrece a tus clientes y proveedores una experiencia premium para autogestionarse. Diseñamos portales de facturación, seguimiento de pedidos, carga de documentos y gestión de tickets con seguridad criptográfica de grado militar, garantizando la privacidad absoluta de tus datos.',
      benefits: [
        'Autenticación de dos factores (2FA) integrada.',
        'Carga optimizada de archivos pesados directo en la nube.',
        'Roles y permisos avanzados basados en funciones (RBAC).',
      ],
      icon: Shield,
    },
    {
      id: '06',
      title: 'Dashboards',
      description: 'Visualización estratégica y en tiempo real de tus principales métricas operativas y KPIs.',
      subtitle: 'Control y visualización de tu negocio en una sola pantalla.',
      detailedContent: 'No tomes decisiones a ciegas. Diseñamos tableros de control con gráficos interactivos dinámicos, métricas financieras en tiempo real y KPIs operativos. Consolida datos de múltiples fuentes en un solo panel y expórtalos en formatos ejecutivos con un solo clic.',
      benefits: [
        'Actualización automática de datos mediante conexiones WebSockets.',
        'Gráficos interactivos fluidos de alto rendimiento.',
        'Filtros multidimensionales y exportación en PDF/Excel.',
      ],
      icon: BarChart3,
    },
  ]

  const handleBookSolution = () => {
    setSelectedSolution(null)
    setTimeout(() => {
      onNavigateToBooking()
    }, 200)
  }

  return (
    <section id="soluciones" className="py-24 px-6 md:px-12 lg:px-20 max-w-[1536px] mx-auto bg-[#f0f0f0]">
      {/* Header Container */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-3 block">
          Áreas de Enfoque
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[rgba(30,50,90,0.95)] mb-6 tracking-tight leading-[1.15]">
          Soluciones que generan ventaja competitiva
        </h2>
        <p className="text-[#5E6470] text-base md:text-lg leading-relaxed font-normal opacity-90 max-w-2xl">
          Cada empresa tiene procesos, objetivos y desafíos distintos. Por eso desarrollamos software completamente personalizado que se integra con la operación real de tu negocio.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {solutions.map((sol, index) => {
          const Icon = sol.icon
          return (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedSolution(sol)}
              className="bg-white/40 backdrop-blur-md border border-white/30 p-8 rounded-[1.8rem] flex flex-col justify-between hover:border-[#C5A880]/30 hover:bg-white/60 transition-all duration-300 shadow-sm relative group overflow-hidden cursor-pointer"
            >
              {/* Glass subtle gradient element */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#C5A880] font-semibold text-xs tracking-wider uppercase">
                    {sol.id}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/50 border border-white/40 text-[rgba(30,50,90,0.8)] group-hover:bg-[#C5A880]/10 group-hover:text-[#C5A880] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[rgba(30,50,90,0.9)] mb-3 tracking-tight">
                  {sol.title}
                </h3>

                {/* Description */}
                <p className="text-[#5E6470] text-sm leading-relaxed opacity-90 font-normal">
                  {sol.description}
                </p>
              </div>

              {/* Action decoration */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#C5A880] transition-all duration-300">
                <span className="font-semibold group-hover:underline">Saber más</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Modern High-Fidelity Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="absolute inset-0 bg-black/55 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[650px] bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-2xl flex flex-col text-left overflow-hidden z-10"
            >
              {/* Top Accent corner marks */}
              <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#C5A880]/30" />
              <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#C5A880]/30" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[rgba(30,50,90,0.05)] hover:bg-[rgba(30,50,90,0.1)] transition-colors border border-[rgba(30,50,90,0.1)] text-[rgba(30,50,90,0.8)]"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon & Category */}
              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className="p-3 rounded-xl bg-[#C5A880]/10 text-[#C5A880] border border-[#C5A880]/20">
                  {selectedSolution && <selectedSolution.icon className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">
                    Solución {selectedSolution.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[rgba(30,50,90,0.95)] tracking-tight">
                    {selectedSolution.title}
                  </h3>
                </div>
              </div>

              {/* Subheading */}
              <h4 className="text-sm font-medium text-[#C5A880] leading-relaxed mb-4 border-l-2 border-[#C5A880] pl-3 italic">
                "{selectedSolution.subtitle}"
              </h4>

              {/* Paragraph details */}
              <p className="text-[#5E6470] text-sm sm:text-base leading-relaxed opacity-95 mb-8 font-normal">
                {selectedSolution.detailedContent}
              </p>

              {/* Bullet Features list */}
              <div className="flex flex-col gap-3 mb-8 bg-[rgba(30,50,90,0.02)] p-4 sm:p-6 rounded-[1.2rem] border border-[rgba(30,50,90,0.05)]">
                <span className="text-xs uppercase tracking-wider text-[rgba(30,50,90,0.5)] font-semibold mb-1 block">
                  Ventajas Operativas
                </span>
                {selectedSolution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-normal text-[rgba(30,50,90,0.85)] leading-tight">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button inside Modal */}
              <motion.button
                onClick={handleBookSolution}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center bg-[rgba(30,50,90,0.9)] hover:bg-[rgba(30,50,90,1)] text-white rounded-full py-3.5 px-6 gap-2 transition-all duration-300 text-xs sm:text-sm font-semibold shadow-md group/btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar esta Solución</span>
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

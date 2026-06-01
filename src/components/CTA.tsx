import { motion } from 'motion/react'
import { Calendar } from 'lucide-react'

interface CTAProps {
  onNavigateToBooking: () => void
}

export function CTA({ onNavigateToBooking }: CTAProps) {
  return (
    <section id="contacto" className="py-24 px-6 md:px-12 lg:px-20 max-w-[1536px] mx-auto bg-[#f0f0f0]">
      <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/30 rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center flex flex-col items-center justify-center overflow-hidden shadow-sm group">
        
        {/* Luxury Background Glow Effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[rgba(30,50,90,0.03)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />

        {/* Small Tag */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold mb-6 block relative z-10">
          Contacto Directo
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[rgba(30,50,90,0.95)] max-w-4xl tracking-tight leading-[1.15] mb-6 relative z-10">
          ¿Tu empresa necesita software que realmente se adapte a ella?
        </h2>

        {/* Subtitle */}
        <p className="text-[#5E6470] text-sm sm:text-base md:text-lg opacity-90 max-w-xl mb-10 font-normal leading-relaxed relative z-10">
          Conversemos sobre tus procesos actuales y diseñemos una solución a la medida que impulse tu rendimiento y rentabilidad.
        </p>

        {/* Primary Action Button */}
        <motion.button
          onClick={onNavigateToBooking}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.9)] hover:bg-[rgba(30,50,90,1)] text-white rounded-full px-6 py-3.5 gap-3 transition-all duration-300 text-xs sm:text-sm font-semibold relative z-10 shadow-md group/btn"
        >
          <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center text-white">
            <Calendar className="w-4 h-4" />
          </div>
          <span>Agendar Reunión</span>
        </motion.button>

        {/* Decorative corner highlights */}
        <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#C5A880]/30" />
        <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#C5A880]/30" />
        <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[#C5A880]/30" />
        <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[#C5A880]/30" />

      </div>
    </section>
  )
}

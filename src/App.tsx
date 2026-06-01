import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Hero } from './components/Hero'
import { Solutions } from './components/Solutions'
import { Process } from './components/Process'
import { Technologies } from './components/Technologies'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Booking } from './components/Booking'

function App() {
  const [view, setView] = useState<'home' | 'booking'>('home')

  const handleNavigateToBooking = () => {
    setView('booking')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleBackToHome = () => {
    setView('home')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <main className="min-h-screen bg-[#f0f0f0] text-[rgb(45,45,45)] selection:bg-[#C5A880]/20 selection:text-[rgba(30,50,90,1)] relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Hero onNavigateToBooking={handleNavigateToBooking} />
            <Solutions onNavigateToBooking={handleNavigateToBooking} />
            <Process />
            <Technologies />
            <CTA onNavigateToBooking={handleNavigateToBooking} />
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="booking"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Booking onBackToHome={handleBackToHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App

'use client'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PillarsSection from './components/PillarsSection'
import PortfolioSection from './components/PortfolioSection'
import WhySection from './components/WhySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  useScrollAnimation()

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <PortfolioSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </main>
  )
}

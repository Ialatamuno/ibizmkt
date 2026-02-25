'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const stats = [
    { number: '10+', label: 'Años en el mercado' },
    { number: '18', label: 'Países en Latam' },
    { number: '360°', label: 'Servicios de Marketing' },
    { number: 'B2B', label: 'Especialización exclusiva' },
]

export default function HeroSection() {
    const sectionRef = useRef(null)

    useEffect(() => {
        // Parallax on mouse move
        const handleMouse = (e) => {
            if (!sectionRef.current) return
            const { innerWidth: w, innerHeight: h } = window
            const x = (e.clientX / w - 0.5) * 20
            const y = (e.clientY / h - 0.5) * 20
            sectionRef.current.style.setProperty('--mx', `${x}px`)
            sectionRef.current.style.setProperty('--my', `${y}px`)
        }
        window.addEventListener('mousemove', handleMouse)
        return () => window.removeEventListener('mousemove', handleMouse)
    }, [])

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
        >
            {/* Stripe-style Mesh Background */}
            <div className="bg-mesh" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-4xl">
                    {/* Title */}
                    <div className="title-reveal animate-float">
                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-8">
                            Escale su presencia{' '}
                            <span className="text-gold-gradient">regional</span> con precisión
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-[#8892a4] text-xl lg:text-2xl max-w-2xl mb-12 leading-relaxed font-medium fade-up delay-1">
                        La infraestructura de marketing B2B y eventos corporativos para empresas líderes.
                        Transformamos su visión en resultados tangibles en toda América Latina.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-5 mb-20 fade-up delay-2">
                        <a
                            href="#portfolio"
                            className="group relative inline-flex items-center gap-3 bg-white text-[#060b18] font-bold px-10 py-4 rounded-full hover:bg-[#c9a227] hover:text-white transition-all duration-500 shadow-xl"
                        >
                            Empezar ahora
                            <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-500"
                        >
                            Contactar expertos
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10 fade-up delay-3">
                        {stats.map(({ number, label }) => (
                            <div key={number} className="group">
                                <div className="text-4xl font-black text-white mb-2 group-hover:text-[#c9a227] transition-colors duration-500">{number}</div>
                                <div className="text-sm text-[#8892a4] font-semibold tracking-wider uppercase">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtle floating element for extra "Stripe" feel */}
            <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#c9a227]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        </section>
    )
}

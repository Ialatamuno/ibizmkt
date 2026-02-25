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
            className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
        >
            {/* Radial background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#1a3a6b]/40 blur-[120px]" />
                <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#c9a227]/10 blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text */}
                <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/25 rounded-full px-4 py-1.5 mb-7">
                        <span className="pulse-dot w-2 h-2 rounded-full bg-[#c9a227] block" />
                        <span className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase">
                            Asunción, Paraguay · América Latina
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.06] tracking-tight mb-6">
                        Su Socio Estratégico en{' '}
                        <span className="text-gold-gradient">Marketing B2B</span>{' '}
                        y Eventos Corporativos
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[#8892a4] text-lg max-w-lg mb-10 leading-relaxed">
                        Con más de 10 años de experiencia, transformamos las necesidades de su empresa
                        en resultados tangibles desde el corazón de América Latina.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        <a
                            href="#portfolio"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a227] to-[#e8c84a] text-[#060b18] font-bold px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,162,39,0.45)] transition-all duration-300"
                        >
                            Ver Portafolio
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl glass-card hover:border-[#c9a227]/40 hover:bg-[#c9a227]/05 hover:-translate-y-1 transition-all duration-300"
                        >
                            Hablar con un Experto
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/06">
                        {stats.map(({ number, label }) => (
                            <div key={number}>
                                <div className="text-3xl font-black text-[#c9a227] glow-text leading-none mb-1">{number}</div>
                                <div className="text-xs text-[#8892a4] leading-snug">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Visual card */}
                <div className="hidden lg:flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#c9a227]/20 to-[#1a3a6b]/30 blur-xl" />
                        <div className="relative glass-card rounded-3xl overflow-hidden border border-[#c9a227]/20 shadow-2xl">
                            <Image
                                src="/hero-image.jpg"
                                alt="I Biz MKT — Marketing B2B y Eventos Corporativos en América Latina"
                                width={500}
                                height={420}
                                className="w-full h-[420px] object-cover"
                                priority
                            />
                            {/* Overlay badge */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#060b18]/90 to-transparent p-6">
                                <p className="text-sm font-semibold text-[#c9a227]">🌎 Hub Regional · Asunción</p>
                                <p className="text-white font-bold mt-1">Conectando empresas en toda Latinoamérica</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

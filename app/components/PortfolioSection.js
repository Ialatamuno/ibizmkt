'use client'
import { useState } from 'react'

const tabs = [
    { id: 'events', label: '🎯 Eventos Corporativos' },
    { id: 'marketing', label: '📡 Marketing 360°' },
    { id: 'intel', label: '🔍 Inteligencia de Mercado' },
]

const panels = {
    events: [
        { icon: '🏟️', title: 'Ferias y Exposiciones Internacionales', desc: 'Gestión "llave en mano": diseño y montaje de stands, contratación de servicios feriales y representación de marca en los eventos más importantes del continente.' },
        { icon: '✈️', title: 'Roadshows Regionales', desc: 'Organización de giras comerciales itinerantes, seleccionando las mejores plazas y garantizando una ejecución impecable en cada ciudad de la ruta.' },
        { icon: '💼', title: 'Ruedas de Negocios y Networking', desc: 'Creación de espacios de vinculación efectiva para tomadores de decisiones y perfiles C-Level con metodologías probadas de alto impacto.' },
        { icon: '🌟', title: 'Eventos Corporativos Premium', desc: 'Lanzamientos de productos, seminarios técnicos, congresos y cenas de gala con estándares internacionales de organización y producción.' },
    ],
    marketing: [
        { icon: '📲', title: 'Marketing Digital B2B', desc: 'Estrategia de contenidos, gestión de redes sociales profesionales, SEO y campañas de pauta digital (Google Ads y Social Ads).' },
        { icon: '🎨', title: 'Branding y Comunicación', desc: 'Desarrollo de identidad corporativa, diseño gráfico profesional y redacción de materiales comerciales (Copywriting) de alto impacto.' },
        { icon: '🎬', title: 'Producción Audiovisual', desc: 'Videos corporativos, fotografía de eventos y presentaciones de alto impacto para directorios y juntas ejecutivas.' },
        { icon: '🛍️', title: 'Trade Marketing y Material POP', desc: 'Gestión de merchandising, catálogos y herramientas de apoyo para la fuerza de ventas en cada mercado de la región.' },
    ],
    intel: [
        { icon: '🗺️', title: 'Investigación de Mercados en Latam', desc: 'Análisis de entrada a nuevos mercados y estudios de competencia regional para tomar decisiones estratégicas con información sólida.' },
        { icon: '📊', title: 'Auditoría y Estrategia', desc: 'Diagnóstico de acciones de marketing actuales y diseño de planes de expansión a corto y mediano plazo adaptados a su industria.' },
        { icon: '🎯', title: 'Planes de Expansión Regional', desc: 'Diseñamos roadmaps de crecimiento considerando las particularidades regulatorias, culturales y comerciales de cada mercado.' },
    ],
}

export default function PortfolioSection() {
    const [active, setActive] = useState('events')

    return (
        <section id="portfolio" className="py-28 bg-gradient-to-b from-transparent via-[#1a3a6b]/08 to-transparent">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="fade-up mb-14">
                    <span className="block text-[#c9a227] text-[0.7rem] font-bold tracking-[4px] uppercase mb-4">
                        Portafolio de Soluciones
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                        Todo lo que su Marca Necesita para{' '}
                        <span className="text-gold-gradient">Crecer</span>
                    </h2>
                </div>

                {/* Tab buttons */}
                <div className="flex flex-wrap gap-3 mb-10 fade-up">
                    {tabs.map(({ id, label }) => (
                        <button
                            key={id}
                            id={`tab-${id}`}
                            onClick={() => setActive(id)}
                            className={`text-sm font-semibold px-6 py-2.5 rounded-full border transition-all duration-200 cursor-pointer
                ${active === id
                                    ? 'bg-[#c9a227]/15 border-[#c9a227] text-[#c9a227]'
                                    : 'glass-card border-white/07 text-[#8892a4] hover:border-[#c9a227]/40 hover:text-[#c9a227]'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {panels[active].map(({ icon, title, desc }, i) => (
                        <div
                            key={title}
                            className={`fade-up delay-${Math.min(i, 3)} group glass-card border border-white/07 rounded-2xl p-8 relative overflow-hidden
                hover:border-[#c9a227]/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300`}
                        >
                            {/* Top bar on hover */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a227] to-[#e8c84a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                            <div className="text-4xl mb-5">{icon}</div>
                            <h4 className="text-white font-bold text-base mb-3 group-hover:text-[#c9a227] transition-colors duration-200">{title}</h4>
                            <p className="text-[#8892a4] text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

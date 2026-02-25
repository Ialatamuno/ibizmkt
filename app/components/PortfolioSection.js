'use client'
import { useState } from 'react'

const tabs = [
    { id: 'events', label: 'Eventos' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'intel', label: 'Inteligencia' },
]

const panels = {
    events: [
        { title: 'Ferias Internacionales', desc: 'Gestión integral llave en mano: diseño, montaje y representación en los eventos más importantes del continente.' },
        { title: 'Roadshows Regionales', desc: 'Giras comerciales estratégicas en las plazas de mayor impacto, garantizando ejecución impecable.' },
        { title: 'Conectividad C-Level', desc: 'Plataformas de vinculación efectiva y networking para tomadores de decisiones de alto nivel.' },
        { title: 'Lanzamientos Premium', desc: 'Organización de congresos, seminarios y experiencias corporativas con estándares globales.' },
    ],
    marketing: [
        { title: 'Marketing Digital B2B', desc: 'Estrategias de contenido y pauta digital optimizadas para resultados en el sector corporativo.' },
        { title: 'Branding de Autoridad', desc: 'Desarrollo de identidad y comunicación estratégica diseñada para inspirar confianza y liderazgo.' },
        { title: 'Producción de Impacto', desc: 'Contenido audiovisual y presentaciones de alto nivel para juntas directivas y mercados regionales.' },
        { title: 'Trade Marketing', desc: 'Optimización de presencia en punto de venta y herramientas de soporte para fuerzas comerciales locales.' },
    ],
    intel: [
        { title: 'Análisis de Mercado', desc: 'Estudios profundos de competencia y viabilidad para la entrada exitosa en nuevos mercados de Latam.' },
        { title: 'Auditoría Estratégica', desc: 'Diagnóstico de operaciones actuales y diseño de roadmaps de crecimiento a corto y mediano plazo.' },
        { title: 'Planes de Expansión', desc: 'Consultoría especializada en las particularidades regulatorias y comerciales de cada país de la región.' },
    ],
}

export default function PortfolioSection() {
    const [active, setActive] = useState('events')

    return (
        <section id="portfolio" className="py-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8 title-reveal">
                        Todo lo que su empresa necesita para{' '}
                        <span className="text-gold-gradient">dominar el mercado</span>
                    </h2>
                </div>

                {/* Tab buttons */}
                <div className="flex border-b border-white/05 mb-12 fade-up">
                    {tabs.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setActive(id)}
                            className={`relative text-lg font-bold px-8 py-5 transition-all duration-300 cursor-pointer
                                ${active === id ? 'text-[#c9a227]' : 'text-[#8892a4] hover:text-white'}`}
                        >
                            {label}
                            {active === id && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a227]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {panels[active].map(({ title, desc }, i) => (
                        <div
                            key={title}
                            className={`fade-up delay-${Math.min(i, 3)} glass-card rounded-2xl p-10 flex flex-col justify-start h-full`}
                        >
                            <h4 className="text-white font-black text-xl mb-4">{title}</h4>
                            <p className="text-[#8892a4] text-base leading-relaxed font-medium">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

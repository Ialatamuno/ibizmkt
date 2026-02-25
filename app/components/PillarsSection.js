'use client'

const pillars = [
    {
        icon: '⚙️',
        title: 'Gestión Integral — Outsourcing de Marketing',
        desc: 'Asumimos la responsabilidad de sus campañas y presencia de marca, optimizando recursos y garantizando coherencia en cada país de América Latina.',
    },
    {
        icon: '🤝',
        title: 'Conectividad B2B',
        desc: 'Facilitamos el acercamiento entre empresas mediante plataformas de networking, eventos y estrategias de posicionamiento de alto impacto.',
    },
    {
        icon: '🏛️',
        title: 'Hub Operativo Regional',
        desc: 'Desde Asunción, centralizamos la logística y coordinación para toda Latinoamérica, simplificando la complejidad de operar en múltiples jurisdicciones.',
    },
]

export default function PillarsSection() {
    return (
        <section id="pillars" className="py-10 pb-28">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
                    <span className="block text-[#c9a227] text-[0.7rem] font-bold tracking-[4px] uppercase mb-4">
                        Qué Hacemos
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
                        Socio Estratégico en Gestión de{' '}
                        <span className="text-gold-gradient">Marketing Regional</span>
                    </h2>
                    <p className="text-[#8892a4] text-base leading-relaxed">
                        Actuamos como el brazo ejecutor y estratégico de su departamento de marketing en América Latina.
                        Nuestra labor se centra en tres pilares fundamentales:
                    </p>
                </div>

                {/* Pillars */}
                <div className="max-w-3xl mx-auto space-y-5">
                    {pillars.map(({ icon, title, desc }, i) => (
                        <div
                            key={title}
                            className={`fade-up delay-${i + 1} group flex gap-5 glass-card border border-white/07 rounded-2xl p-7
                hover:border-[#c9a227]/30 hover:translate-x-2 transition-all duration-300`}
                        >
                            <span className="text-3xl mt-0.5 flex-shrink-0">{icon}</span>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#c9a227] transition-colors duration-200">
                                    {title}
                                </h3>
                                <p className="text-[#8892a4] text-sm leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

'use client'

const reasons = [
    {
        number: '10+',
        title: 'Años de Experiencia',
        desc: 'Una década resolviendo desafíos para empresas líderes en la región, con un historial probado de éxito en cada mercado.',
    },
    {
        number: '🌎',
        title: 'Alcance Panregional',
        desc: 'Capacidad probada para operar simultáneamente en diversos puntos de América Latina garantizando los mismos estándares de calidad.',
    },
    {
        number: '📍',
        title: 'Eficiencia desde Asunción',
        desc: 'Ventajas competitivas en costos y agilidad logística gracias a nuestra ubicación central en el corazón del continente.',
    },
    {
        number: 'ROI',
        title: 'Enfoque en el Retorno',
        desc: 'Cada acción de marketing y cada evento está diseñado con un objetivo claro: generar valor de negocio medible y sostenible.',
    },
]

export default function WhySection() {
    return (
        <section id="why" className="py-28">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
                    <span className="block text-[#c9a227] text-[0.7rem] font-bold tracking-[4px] uppercase mb-4">
                        Por qué I Biz MKT
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
                        Cuatro Razones para Elegirnos{' '}
                        <span className="text-gold-gradient">como su Socio</span>
                    </h2>
                    <p className="text-[#8892a4] text-base leading-relaxed">
                        Nuestra propuesta de valor es clara: resultados reales en mercados reales,
                        con la eficiencia y agilidad que solo una operación regional centralizada puede ofrecer.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map(({ number, title, desc }, i) => (
                        <div
                            key={title}
                            className={`fade-up delay-${i} group glass-card border border-white/07 rounded-2xl p-8 text-center
                hover:border-[#c9a227]/40 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(201,162,39,0.2)] transition-all duration-300`}
                        >
                            <div className="text-5xl font-black glow-text text-gold-gradient leading-none mb-4">{number}</div>
                            <h4 className="text-white font-bold text-base mb-3">{title}</h4>
                            <p className="text-[#8892a4] text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

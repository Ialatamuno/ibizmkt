'use client'

const reasons = [
    {
        number: '10+',
        title: 'Décadas de Dominio',
        desc: 'Una trayectoria probada resolviendo desafíos complejos para empresas líderes en toda la región.',
    },
    {
        number: '🌎',
        title: 'Alcance Regional',
        desc: 'Capacidad operativa para ejecutar estrategias simultáneamente en múltiples mercados sin fricciones.',
    },
    {
        number: '📍',
        title: 'Excelencia Logística',
        desc: 'Ventajas competitivas en costos y agilidad operativa gracias a nuestra ubicación estratégica.',
    },
    {
        number: 'ROI',
        title: 'Enfoque en Resultados',
        desc: 'Cada acción está diseñada con un objetivo claro: generar valor de negocio medible y sostenible.',
    },
]

export default function WhySection() {
    return (
        <section id="why" className="py-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-20 fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                        Por qué las empresas líderes eligen{' '}
                        <span className="text-gold-gradient">I Biz MKT</span>
                    </h2>
                    <p className="text-[#8892a4] text-lg lg:text-xl leading-relaxed font-medium">
                        Nuestra propuesta de valor es clara: resultados reales en mercados reales,
                        con la eficiencia y agilidad de una operación centralizada de alto rendimiento.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map(({ number, title, desc }, i) => (
                        <div
                            key={title}
                            className={`fade-up delay-${i} glass-card rounded-2xl p-10 flex flex-col items-start text-left`}
                        >
                            <div className="text-4xl font-black text-white mb-6">{number}</div>
                            <h4 className="text-white font-black text-xl mb-4">{title}</h4>
                            <p className="text-[#8892a4] text-base leading-relaxed font-medium">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

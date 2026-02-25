'use client'

const pillars = [
    {
        title: 'Infraestructura de Marketing',
        desc: 'Asumimos la gestión estratégica de su marca, optimizando recursos y garantizando excelencia operativa en cada mercado de América Latina.',
    },
    {
        title: 'Conectividad Estratégica',
        desc: 'Facilitamos el acceso a redes de alto nivel y plataformas de networking diseñadas para potenciar el crecimiento corporativo panregional.',
    },
    {
        title: 'Operaciones Panregionales',
        desc: 'Centralizamos su logística para toda Latinoamérica, eliminando la complejidad de operar en múltiples jurisdicciones simultáneamente.',
    },
]

export default function PillarsSection() {
    return (
        <section id="pillars" className="py-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8 title-reveal">
                        Arquitectura estratégica para su{' '}
                        <span className="text-gold-gradient">departamento de marketing</span>
                    </h2>
                    <p className="text-[#8892a4] text-lg lg:text-xl leading-relaxed font-medium">
                        Actuamos como el brazo ejecutor y estratégico de su empresa.
                        Nuestra labor se centra en tres pilares de alto rendimiento:
                    </p>
                </div>

                {/* Pillars */}
                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map(({ title, desc }, i) => (
                        <div
                            key={title}
                            className={`fade-up delay-${i + 1} glass-card rounded-2xl p-10 flex flex-col justify-between h-full`}
                        >
                            <div>
                                <h3 className="text-white font-black text-2xl mb-4 group-hover:text-[#c9a227] transition-colors duration-200">
                                    {title}
                                </h3>
                                <p className="text-[#8892a4] text-base leading-relaxed font-medium">{desc}</p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/05 flex items-center justify-between">
                                <span className="text-[#c9a227] font-bold text-sm tracking-widest uppercase">Pilar {(i + 1).toString().padStart(2, '0')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

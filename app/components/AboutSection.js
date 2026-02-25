'use client'

export default function AboutSection() {
    return (
        <section id="about" className="py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Map / Location card */}
                    <div className="fade-up">
                        <div className="glass-card rounded-3xl p-10 border border-white/07 relative overflow-hidden">
                            {/* BG glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a6b]/30 to-transparent pointer-events-none" />

                            <span className="text-6xl block mb-5">🌎</span>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Estratégicamente ubicados en el corazón de América Latina
                            </h3>
                            <p className="text-[#8892a4] text-sm leading-relaxed mb-6">
                                Desde Asunción, Paraguay, coordinamos operaciones ágiles y eficientes en toda la región,
                                aprovechando su posición central para simplificar la logística de cada proyecto.
                            </p>

                            {/* Country badges */}
                            <div className="flex flex-wrap gap-2">
                                {['Paraguay', 'Argentina', 'Brasil', 'Chile', 'Colombia', 'México', 'Perú', '+ más'].map((c) => (
                                    <span
                                        key={c}
                                        className="bg-[#c9a227]/10 border border-[#c9a227]/25 text-[#c9a227] text-xs font-semibold px-3 py-1 rounded-full"
                                    >
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="fade-up delay-1">
                        <span className="block text-[#c9a227] text-[0.7rem] font-bold tracking-[4px] uppercase mb-4">
                            Quiénes Somos
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                            Experiencia, Visión y{' '}
                            <span className="text-gold-gradient">Alcance Regional</span>
                        </h2>
                        <p className="text-[#8892a4] text-base leading-relaxed mb-5">
                            En I Biz MKT, entendemos que el mercado B2B exige una precisión estratégica superior.
                            Somos una agencia de marketing integral especializada en la gestión de cuentas corporativas
                            y el desarrollo de experiencias de alto impacto.
                        </p>
                        <p className="text-[#8892a4] text-base leading-relaxed">
                            Con más de una década de presencia en el mercado, nos hemos consolidado como expertos
                            en descifrar y satisfacer las necesidades de empresas que buscan expandir su huella
                            en el continente americano.
                        </p>

                        {/* Highlight row */}
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            {[
                                { icon: '🏛️', text: 'Sede en Asunción, Paraguay' },
                                { icon: '🌍', text: 'Red de aliados en toda Latam' },
                                { icon: '⚡', text: 'Agilidad y eficiencia logística' },
                                { icon: '🎯', text: 'Especialistas en mercado B2B' },
                            ].map(({ icon, text }) => (
                                <div key={text} className="flex items-center gap-3 glass-card border border-white/06 rounded-xl px-4 py-3">
                                    <span className="text-xl">{icon}</span>
                                    <span className="text-sm text-[#8892a4]">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

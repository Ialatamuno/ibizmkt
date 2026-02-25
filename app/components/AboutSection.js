'use client'

export default function AboutSection() {
    return (
        <section id="about" className="py-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-start">

                    {/* Left: Text */}
                    <div className="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                            Infraestructura para el{' '}
                            <span className="text-gold-gradient">crecimiento panregional</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-[#8892a4] text-lg lg:text-xl leading-relaxed font-medium">
                                En I Biz MKT, entendemos que el mercado B2B exige una precisión estratégica superior.
                                Somos el brazo ejecutor especializado en la gestión de cuentas corporativas y el desarrollo
                                de experiencias de alto impacto en toda América Latina.
                            </p>
                            <p className="text-[#8892a4] text-lg lg:text-xl leading-relaxed font-medium">
                                Con más de una década de presencia en el mercado, nos hemos consolidado como el socio
                                estratégico para empresas globales que buscan expandir su huella en el continente americano.
                            </p>
                        </div>
                    </div>

                    {/* Right: Info cards */}
                    <div className="fade-up delay-1 space-y-6">
                        <div className="glass-card rounded-2xl p-10">
                            <h3 className="text-white font-black text-2xl mb-4">Ubicación Estratégica</h3>
                            <p className="text-[#8892a4] text-base leading-relaxed font-medium mb-8">
                                Desde Asunción, Paraguay, coordinamos operaciones ágiles en 18 países,
                                capitalizando una posición central para simplificar la logística y los costos operativos.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Paraguay', 'Argentina', 'Brasil', 'Chile', 'Colombia', 'México', 'Perú'].map((c) => (
                                    <span
                                        key={c}
                                        className="bg-white/05 border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-lg"
                                    >
                                        {c}
                                    </span>
                                ))}
                                <span className="text-[#c9a227] text-xs font-black uppercase tracking-widest pl-2 flex items-center">+ más</span>
                            </div>
                        </div>

                        {/* Highlight row */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: '10+', label: 'Años de Dominio' },
                                { title: '18', label: 'Países Cubiertos' },
                            ].map(({ title, label }) => (
                                <div key={label} className="glass-card rounded-2xl p-8 hover:border-[#c9a227]/30">
                                    <div className="text-3xl font-black text-white mb-1">{title}</div>
                                    <div className="text-xs text-[#8892a4] font-bold uppercase tracking-widest">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

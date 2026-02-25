'use client'

export default function Footer() {
    return (
        <footer className="py-20 border-t border-white/05">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div>
                        <div className="text-2xl font-black tracking-tighter text-white mb-4">
                            I BIZ <span className="text-[#c9a227]">MKT</span>
                        </div>
                        <p className="text-[#8892a4] text-sm font-medium max-w-xs leading-relaxed">
                            Infraestructura estratégica de marketing y eventos corporativos para el mercado panregional.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <p className="text-white text-xs font-black uppercase tracking-widest">Empresa</p>
                            <ul className="space-y-3">
                                {['Nosotros', 'Qué Hacemos', 'Portafolio'].map((l) => (
                                    <li key={l}>
                                        <a href={`#${l.toLowerCase().replace(' ', '')}`} className="text-[#8892a4] text-sm hover:text-white transition-colors">
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-white text-xs font-black uppercase tracking-widest">Soporte</p>
                            <ul className="space-y-3">
                                {['Contacto', 'LinkedIn', 'Instagram'].map((l) => (
                                    <li key={l}>
                                        <a href="#contact" className="text-[#8892a4] text-sm hover:text-white transition-colors">
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/05 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[#555e6e] text-xs font-bold">
                        © 2026 I Biz MKT · Asunción, Paraguay. Operaciones Panregionales.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[#555e6e] text-xs font-bold cursor-default hover:text-white transition-colors">Términos</span>
                        <span className="text-[#555e6e] text-xs font-bold cursor-default hover:text-white transition-colors">Privacidad</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

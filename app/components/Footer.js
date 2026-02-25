'use client'

export default function Footer() {
    return (
        <footer className="border-t border-white/06 bg-black/30 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-lg font-black">
                    I <span className="text-[#c9a227]">BIZ</span> MKT
                </div>
                <p className="text-[#8892a4] text-xs text-center">
                    © 2026 I Biz MKT · Asunción, Paraguay. Todos los derechos reservados.
                </p>
                <div className="flex gap-6">
                    {[
                        { href: '#about', label: 'Nosotros' },
                        { href: '#portfolio', label: 'Servicios' },
                        { href: '#contact', label: 'Contacto' },
                    ].map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-xs text-[#8892a4] hover:text-[#c9a227] transition-colors duration-200"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

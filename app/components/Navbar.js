'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
    { href: '#about', label: 'Quiénes Somos' },
    { href: '#pillars', label: 'Qué Hacemos' },
    { href: '#portfolio', label: 'Portafolio' },
    { href: '#why', label: 'Por qué Nosotros' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#060b18]/80 backdrop-blur-xl border-b border-white/05 py-4'
                : 'py-8'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="text-2xl font-black tracking-tighter text-white">
                    I BIZ <span className="text-[#c9a227]">MKT</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-10">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="text-sm font-bold text-[#8892a4] hover:text-white transition-colors duration-300 tracking-wide"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="bg-white text-[#060b18] text-sm font-black px-8 py-3 rounded-full hover:bg-[#c9a227] hover:text-white transition-all duration-500 shadow-lg"
                        >
                            Agendar consulta
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    id="hamburger-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-[5px] p-2"
                    aria-label="Abrir menú"
                >
                    <span className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-white rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 bg-[#060b18] z-40 flex flex-col items-center justify-center gap-12 text-center p-6">
                    {links.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="text-4xl font-black text-white hover:text-[#c9a227] transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="bg-white text-[#060b18] font-black px-12 py-5 rounded-full text-xl shadow-2xl"
                    >
                        Agendar consulta
                    </a>
                </div>
            )}
        </nav>
    )
}

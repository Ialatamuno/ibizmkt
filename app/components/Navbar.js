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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#060b18]/85 backdrop-blur-xl border-b border-[#c9a227]/15 py-3'
                    : 'py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="text-xl font-black tracking-tight">
                    I <span className="text-[#c9a227]">BIZ</span> MKT
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="text-sm font-medium text-[#8892a4] hover:text-white transition-colors duration-200 relative group"
                            >
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c9a227] group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-[#c9a227] to-[#e8c84a] text-[#060b18] text-sm font-bold px-6 py-2.5 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,162,39,0.4)] transition-all duration-200"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    id="hamburger-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-[5px] p-1"
                    aria-label="Abrir menú"
                >
                    <span className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-white rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 bg-[#060b18]/97 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10">
                    {links.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl font-semibold text-white hover:text-[#c9a227] transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="bg-gradient-to-r from-[#c9a227] to-[#e8c84a] text-[#060b18] font-bold px-10 py-3 rounded-lg text-lg"
                    >
                        Contacto
                    </a>
                </div>
            )}
        </nav>
    )
}

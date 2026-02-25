'use client'
import { useState } from 'react'

const contactDetails = [
    { icon: '📍', label: 'Sede Principal', value: 'Asunción, Paraguay' },
    { icon: '🌎', label: 'Cobertura', value: 'Toda América Latina' },
    { icon: '📧', label: 'Email', value: 'info@ibizmkt.com' },
    { icon: '💼', label: 'Especialidad', value: 'Marketing B2B & Eventos Corporativos' },
]

export default function ContactSection() {
    const [sent, setSent] = useState(false)
    const [form, setForm] = useState({ nombre: '', empresa: '', email: '', servicio: '', mensaje: '' })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <section id="contact" className="py-28 bg-gradient-to-b from-transparent via-[#1a3a6b]/08 to-transparent">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 fade-up">
                    <span className="block text-[#c9a227] text-[0.7rem] font-bold tracking-[4px] uppercase mb-4">
                        Contacto
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                        ¿Listo para Expandir su{' '}
                        <span className="text-gold-gradient">Marca en Latam?</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
                    {/* Left: Info */}
                    <div className="fade-up">
                        <h3 className="text-2xl font-bold mb-4">Hablemos de su Proyecto</h3>
                        <p className="text-[#8892a4] text-sm leading-relaxed mb-8">
                            Cuéntenos sobre sus objetivos comerciales y le diseñaremos una estrategia a medida
                            para hacer crecer su empresa en América Latina.
                        </p>
                        <div className="space-y-5">
                            {contactDetails.map(({ icon, label, value }) => (
                                <div key={label} className="flex items-start gap-4">
                                    <span className="text-2xl">{icon}</span>
                                    <div>
                                        <p className="text-[#c9a227] text-[0.7rem] font-bold tracking-[1px] uppercase mb-0.5">{label}</p>
                                        <p className="text-[#8892a4] text-sm">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="fade-up delay-1 glass-card border border-white/07 rounded-3xl p-10">
                        {!sent ? (
                            <form onSubmit={handleSubmit} id="contact-form" noValidate>
                                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="nombre" className="block text-[#8892a4] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Nombre</label>
                                        <input
                                            type="text" id="nombre" name="nombre" value={form.nombre}
                                            onChange={handleChange} placeholder="Juan García" required
                                            className="w-full bg-white/04 border border-white/07 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#555e6e] focus:border-[#c9a227] focus:bg-[#c9a227]/05 outline-none transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="empresa" className="block text-[#8892a4] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Empresa</label>
                                        <input
                                            type="text" id="empresa" name="empresa" value={form.empresa}
                                            onChange={handleChange} placeholder="Acme Corp."
                                            className="w-full bg-white/04 border border-white/07 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#555e6e] focus:border-[#c9a227] focus:bg-[#c9a227]/05 outline-none transition-colors duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="email" className="block text-[#8892a4] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Email corporativo</label>
                                    <input
                                        type="email" id="email" name="email" value={form.email}
                                        onChange={handleChange} placeholder="juan@empresa.com" required
                                        className="w-full bg-white/04 border border-white/07 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#555e6e] focus:border-[#c9a227] focus:bg-[#c9a227]/05 outline-none transition-colors duration-200"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="servicio" className="block text-[#8892a4] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Servicio de interés</label>
                                    <select
                                        id="servicio" name="servicio" value={form.servicio}
                                        onChange={handleChange}
                                        className="w-full bg-[#0d1f44] border border-white/07 rounded-xl px-4 py-3.5 text-[#8892a4] text-sm focus:border-[#c9a227] outline-none transition-colors duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="">Seleccione un servicio…</option>
                                        <option>Eventos y Experiencias Corporativas</option>
                                        <option>Marketing 360° B2B</option>
                                        <option>Inteligencia de Mercado</option>
                                        <option>Hub Operativo Regional</option>
                                        <option>Otro / Consultoría General</option>
                                    </select>
                                </div>

                                <div className="mb-7">
                                    <label htmlFor="mensaje" className="block text-[#8892a4] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Mensaje</label>
                                    <textarea
                                        id="mensaje" name="mensaje" value={form.mensaje}
                                        onChange={handleChange} rows={4}
                                        placeholder="Cuéntenos sobre su proyecto y los mercados de interés…"
                                        className="w-full bg-white/04 border border-white/07 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#555e6e] focus:border-[#c9a227] focus:bg-[#c9a227]/05 outline-none transition-colors duration-200 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#c9a227] to-[#e8c84a] text-[#060b18] font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,162,39,0.4)] transition-all duration-300"
                                >
                                    Enviar Mensaje
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" /></svg>
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">✅</div>
                                <p className="text-[#c9a227] font-bold text-lg">¡Mensaje enviado con éxito!</p>
                                <p className="text-[#8892a4] text-sm mt-2">Nos pondremos en contacto a la brevedad.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

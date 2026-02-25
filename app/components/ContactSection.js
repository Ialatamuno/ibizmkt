'use client'
import { useState } from 'react'

const contactDetails = [
    { label: 'Sede Global', value: 'Asunción, Paraguay' },
    { label: 'Alcance Regional', value: '18 Países en Latam' },
    { label: 'Consultas', value: 'info@ibizmkt.com' },
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
        <section id="contact" className="py-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-24 items-start">
                    {/* Left: Info */}
                    <div className="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                            Diseñe su <span className="text-gold-gradient">estrategia regional</span>
                        </h2>
                        <p className="text-[#8892a4] text-lg lg:text-xl leading-relaxed font-medium mb-12">
                            Consulte con nuestros expertos sobre sus objetivos comerciales.
                            Le entregaremos un roadmap táctico para escalar su presencia en América Latina.
                        </p>
                        <div className="space-y-8">
                            {contactDetails.map(({ label, value }) => (
                                <div key={label} className="group">
                                    <p className="text-[#c9a227] text-xs font-black uppercase tracking-widest mb-2">{label}</p>
                                    <p className="text-white text-xl font-bold">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="fade-up delay-1 glass-card rounded-2xl p-10 lg:p-12">
                        {!sent ? (
                            <form onSubmit={handleSubmit} id="contact-form" noValidate>
                                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <label htmlFor="nombre" className="block text-white text-sm font-bold mb-3">Nombre completo</label>
                                        <input
                                            type="text" id="nombre" name="nombre" value={form.nombre}
                                            onChange={handleChange} placeholder="Ej: Juan García" required
                                            className="w-full bg-white/05 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder:text-[#555e6e] focus:border-[#c9a227] outline-none transition-all duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="empresa" className="block text-white text-sm font-bold mb-3">Empresa</label>
                                        <input
                                            type="text" id="empresa" name="empresa" value={form.empresa}
                                            onChange={handleChange} placeholder="Ej: Acme Corp"
                                            className="w-full bg-white/05 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder:text-[#555e6e] focus:border-[#c9a227] outline-none transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="email" className="block text-white text-sm font-bold mb-3">Email corporativo</label>
                                    <input
                                        type="email" id="email" name="email" value={form.email}
                                        onChange={handleChange} placeholder="juan@empresa.com" required
                                        className="w-full bg-white/05 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder:text-[#555e6e] focus:border-[#c9a227] outline-none transition-all duration-200"
                                    />
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="mensaje" className="block text-white text-sm font-bold mb-3">¿Cómo podemos ayudarle?</label>
                                    <textarea
                                        id="mensaje" name="mensaje" value={form.mensaje}
                                        onChange={handleChange} rows={4}
                                        placeholder="Cuéntenos sobre sus desafíos regionales…"
                                        className="w-full bg-white/05 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder:text-[#555e6e] focus:border-[#c9a227] outline-none transition-all duration-200 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-white text-[#060b18] font-black py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-[#c9a227] hover:text-white transition-all duration-500 shadow-xl"
                                >
                                    Agendar consulta
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-6">✨</div>
                                <h3 className="text-2xl font-black text-white mb-3">Solicitud recibida</h3>
                                <p className="text-[#8892a4] text-lg font-medium">Un consultor estratégico se pondrá en contacto con usted en menos de 24 horas.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

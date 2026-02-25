import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'I Biz MKT — Marketing B2B y Eventos Corporativos en América Latina',
  description: 'Su socio estratégico en Marketing B2B y Eventos Corporativos en toda América Latina. Más de 10 años de experiencia desde Asunción, Paraguay.',
  keywords: 'marketing B2B, eventos corporativos, América Latina, Paraguay, Asunción, marketing digital, ferias internacionales',
  openGraph: {
    title: 'I Biz MKT — Marketing B2B & Eventos Corporativos',
    description: 'Transformamos las necesidades de su empresa en resultados tangibles en toda América Latina.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-grid antialiased">
        {children}
      </body>
    </html>
  )
}

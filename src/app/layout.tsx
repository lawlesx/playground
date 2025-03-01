import type { Metadata } from 'next'
import { Permanent_Marker, Petit_Formal_Script, Sour_Gummy } from 'next/font/google'
import './globals.css'

const permanentMarker = Permanent_Marker({ weight: ['400'], subsets: ['latin'], variable: '--font-permanent-marker' })
const petitFormalScript = Petit_Formal_Script({
  weight: ['400'],
  subsets: ['latin-ext'],
  variable: '--font-petit-formal-script',
})
const sourGummy = Sour_Gummy({ weight: ['400'], subsets: ['latin'], variable: '--font-sour-gummy' })

export const metadata: Metadata = {
  title: 'Playground',
  description: 'A playground where imagination comes to life—create, animate, and innovate.',
  openGraph: {
    title: 'Playground',
    description: 'A playground where imagination comes to life—create, animate, and innovate.',
    images: {
      url: 'https://res.cloudinary.com/dk7dt0kk3/image/upload/v1740852271/Mad_Playground_yhvhzb.png',
      width: 1200,
      height: 630,
      alt: 'Slider',
    },
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Playground',
    description: 'A playground where imagination comes to life—create, animate, and innovate.',
    images: 'https://res.cloudinary.com/dk7dt0kk3/image/upload/v1740852271/Mad_Playground_yhvhzb.png',
    card: 'summary_large_image',
    creator: '@lawlesx',
  },
  authors: { name: 'Aniruddha Sil', url: 'https://lawlesx.vercel.app/' },
  keywords: ['Framer Motion', 'React', 'Next.js'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${permanentMarker.variable} ${petitFormalScript.variable} ${sourGummy.variable}`}>
        {children}
      </body>
    </html>
  )
}

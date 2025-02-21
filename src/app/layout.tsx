import type { Metadata } from 'next'
import { Permanent_Marker, Petit_Formal_Script } from 'next/font/google'
import './globals.css'

const permanentMarker = Permanent_Marker({ weight: ['400'], subsets: ['latin'], variable: '--font-permanent-marker' })
const petitFormalScript = Petit_Formal_Script({
  weight: ['400'],
  subsets: ['latin-ext'],
  variable: '--font-petit-formal-script',
})

export const metadata: Metadata = {
  title: 'Playground',
  description: 'A playground where imagination comes to life—create, animate, and innovate.',
  openGraph: {
    title: 'Playground',
    description: 'A playground where imagination comes to life—create, animate, and innovate.',
    images: {
      url: 'https://res.cloudinary.com/dk7dt0kk3/image/upload/v1712679946/Playground%20Meta%20Images/Slider_Meta_Image_eywnsq.png',
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
    images:
      'https://res.cloudinary.com/dk7dt0kk3/image/upload/v1712679946/Playground%20Meta%20Images/Slider_Meta_Image_eywnsq.png',
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
      <body className={`${permanentMarker.variable} ${petitFormalScript.variable}`}>{children}</body>
    </html>
  )
}

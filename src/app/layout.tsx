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
  description: `Playground where imagination meets reality.`,
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

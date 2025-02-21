import HighlightButton from '@/components/Button/HighlightButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Playground create new creations and try new animations and tools',
  openGraph: {
    title: 'Playground',
    description: 'Playground create new creations and try new animations and tools',
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
    description: 'Playground create new creations and try new animations and tools',
    images:
      'https://res.cloudinary.com/dk7dt0kk3/image/upload/v1712679946/Playground%20Meta%20Images/Slider_Meta_Image_eywnsq.png',
    card: 'summary_large_image',
    creator: '@lawlesx',
  },
  authors: { name: 'Aniruddha Sil', url: 'https://lawlesx.vercel.app/' },
  keywords: ['Framer Motion', 'React', 'Next.js'],
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-20 bg-black p-24'>
      <h1 className='text-clip bg-gradient-to-l from-indigo-500 to-fuchsia-600 bg-clip-text font-permanent-marker text-6xl text-transparent lg:text-[5rem]'>
        Playground
      </h1>
      <HighlightButton text='Slider' link='/slider' />
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

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
      <Link href='/slider' className='group relative flex w-full items-center justify-center rounded-md p-4 lg:w-3/4'>
        <h1 className='font-mono text-4xl font-semibold text-white'>Slider</h1>
        <div className='absolute bottom-0 h-1 w-1/2 bg-white transition-all duration-700 group-hover:w-full' />
        <div className='absolute top-0 h-1 w-0 bg-white transition-all duration-700 group-hover:w-full' />
        <div className='absolute left-0 h-0 w-1 bg-white transition-all duration-700 group-hover:h-full' />
        <div className='absolute right-0 h-0 w-1 bg-white transition-all duration-700 group-hover:h-full' />
      </Link>
    </main>
  )
}

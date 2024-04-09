import FramerSlider from '@/components/Slider'
import NonFramerSlider from '@/components/Slider/NonFramerSlider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playground - Slider',
  description: 'An intuitive slider that allows you to adjust the amount of coffee and milk in your cup.',
  openGraph: {
    title: 'Playground - Slider',
    description: 'An intuitive slider that allows you to adjust the amount of coffee and milk in your cup.',
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
    title: 'Playground - Slider',
    description: 'An intuitive slider that allows you to adjust the amount of coffee and milk in your cup.',
    images:
      'https://res.cloudinary.com/dk7dt0kk3/image/upload/v1712679946/Playground%20Meta%20Images/Slider_Meta_Image_eywnsq.png',
    card: 'summary_large_image',
    creator: '@lawlesx',
  },
  authors: { name: 'Aniruddha Sil', url: 'https://lawlesx.vercel.app/' },
  keywords: ['Slider', 'Framer Motion', 'React', 'Next.js'],
}

const Slider = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-10 bg-black px-4 py-24'>
      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-clip bg-gradient-to-r from-[#E57627] to-[#FDFDFD] bg-clip-text font-permanent-marker text-6xl text-transparent'>
          Slider
        </h1>
        <p className='w-full text-center font-mono text-lg text-white lg:w-3/4'>
          An intuitive slider that allows you to adjust the amount of coffee and milk in your cup.
        </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-10'>
        <h2 className='p-2 font-mono text-white'>
          Made using framer motion -{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/lawlesx/playground/blob/main/src/components/Slider/index.tsx'
            className='font-mono text-white underline'
          >
            View Source
          </a>
        </h2>
        <FramerSlider />
      </div>
      <div className='flex flex-col items-center justify-center gap-10'>
        <h2 className='p-2 font-mono text-white'>
          Made without using framer motion -{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/lawlesx/playground/blob/main/src/components/Slider/NonFramerSlider.tsx'
            className='font-mono text-white underline'
          >
            View Source
          </a>
        </h2>
        <NonFramerSlider />
      </div>
    </main>
  )
}

export default Slider

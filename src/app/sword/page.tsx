import Blade from '@/components/Sword/Blade/Blade'
import RainGaurd from '@/components/Sword/RainGaurd/RainGaurd'
import SwordHandle from '@/components/Sword/SwordHandle/SwordHandle'
import type { Metadata } from 'next'
import './style.css'

export const metadata: Metadata = {
  title: 'CSS Sword - A Pure HTML & CSS Creation',
  description:
    'A sword crafted entirely with HTML and CSS, using a combination of creative CSS shapes. No SVGs or images—just pure code magic.',
  openGraph: {
    title: 'CSS Sword - A Pure HTML & CSS Creation',
    description:
      'A sword crafted entirely with HTML and CSS, using a combination of creative CSS shapes. No SVGs or images—just pure code magic.',
    images: {
      url: 'https://res.cloudinary.com/dk7dt0kk3/image/upload/v1740852271/Css_Sword_h9txc5.png',
      width: 1200,
      height: 630,
      alt: 'Slider',
    },
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'CSS Sword - A Pure HTML & CSS Creation',
    description:
      'A sword crafted entirely with HTML and CSS, using a combination of creative CSS shapes. No SVGs or images—just pure code magic.',
    images: 'https://res.cloudinary.com/dk7dt0kk3/image/upload/v1740852271/Css_Sword_h9txc5.png',
    card: 'summary_large_image',
    creator: '@lawlesx',
  },
  authors: { name: 'Aniruddha Sil', url: 'https://lawlesx.vercel.app/' },
  keywords: ['Slider', 'Framer Motion', 'React', 'Next.js'],
}

const Sword = () => {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='font-sour-gummy text-clip bg-gradient-to-r from-[#E57627] to-[#FDFDFD] bg-clip-text text-6xl text-transparent'>
          CSS Sword - A Pure HTML & CSS Creation
        </h1>
        <p className='font-sour-gummy w-full text-center text-lg text-white md:w-3/4'>
          A sword crafted entirely with HTML and CSS, using a combination of creative CSS shapes. No SVGs or images—just
          pure code magic.
        </p>
      </div>

      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/lawlesx/playground/blob/main/src/app/sword/page.tsx'
        className='font-sour-gummy text-white underline'
      >
        View Source
      </a>

      <div className='h-[512px] w-[375px]  p-2'>
        {/* ------------------------------- Art Canvas ------------------------------- */}
        <div className='background relative flex h-full w-full flex-col items-center pt-14'>
          <div className='hollow' />
          {/* ---------------------------- Background Red Circle --------------------------- */}
          <div className='relative flex aspect-square w-1/2 items-start justify-center overflow-hidden rounded-full bg-[#E81B22]'>
            <div className='circle-highlight'>
              <div className='circle-highlight-1'>
                <div className='circle-highlight-2'>
                  <div className='circle-highlight-3'></div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------- Sword Container ---------------------------- */}
          <div className='absolute top-0 z-[2] flex h-full w-full flex-col items-center justify-start'>
            <SwordHandle />
            <RainGaurd />
            <Blade />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Sword

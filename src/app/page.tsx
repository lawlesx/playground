import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-20 bg-black p-24'>
      <h1 className='text-clip bg-gradient-to-l from-indigo-500 to-fuchsia-600 bg-clip-text font-permanent-marker text-[5rem] text-transparent'>
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

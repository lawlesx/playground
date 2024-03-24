import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-20 bg-black p-24'>
      <h1 className='text-clip bg-gradient-to-l from-indigo-500 to-fuchsia-600 bg-clip-text font-permanent-marker text-6xl text-transparent'>
        Playground
      </h1>
      <Link
        href='/slider'
        className='flex w-full items-center justify-center rounded-md p-4 outline outline-gray-400 hover:outline-2 hover:outline-white lg:w-3/4'
      >
        <h1 className='font-mono text-4xl font-semibold text-white'>Slider</h1>
      </Link>
    </main>
  )
}

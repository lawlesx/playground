import Slider from './slider/page'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-20 bg-black p-24'>
      <h1 className='text-clip bg-gradient-to-l from-indigo-500 to-fuchsia-600 bg-clip-text font-permanent-marker text-6xl text-transparent'>
        Playground
      </h1>
      <Slider />
    </main>
  )
}

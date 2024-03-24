import FramerSlider from '@/components/Slider'
import NonFramerSlider from '@/components/Slider/NonFramerSlider'

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
      <div className='flex h-40 flex-col items-center justify-center gap-10'>
        <h2 className='p-2 font-mono text-white'>Made using framer motion</h2>
        <FramerSlider />
      </div>
      <div className='flex h-40 flex-col items-center justify-center gap-10'>
        <h2 className='p-2 font-mono text-white'>Made without using framer motion</h2>
        <NonFramerSlider />
      </div>
    </main>
  )
}

export default Slider

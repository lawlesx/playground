import Blade from '@/components/Sword/Blade/Blade'
import RainGaurd from '@/components/Sword/RainGaurd/RainGaurd'
import SwordHandle from '@/components/Sword/SwordHandle/SwordHandle'
import './style.css'

const Sword = () => {
  return (
    <main className='grid h-screen w-full place-items-center'>
      <div className='h-[512px] w-[375px] bg-white p-2'>
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

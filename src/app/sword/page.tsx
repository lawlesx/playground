import SwordHandle from '@/components/Sword/SwordHandle/SwordHandle'
import './style.css'

const Sword = () => {
  return (
    <main className='grid h-screen w-full place-items-center'>
      <div className='h-[512px] w-[375px] bg-white p-2'>
        {/* ------------------------------- Art Canvas ------------------------------- */}
        <div className='background relative flex h-full w-full flex-col items-center pt-14'>
          {/* ---------------------------- Background Red Circle --------------------------- */}
          <div className='aspect-square w-1/2 rounded-full bg-[#E81B22]'></div>
          {/* ----------------------------- Sword Container ---------------------------- */}
          <div className='absolute top-0 flex h-full w-full flex-col items-center justify-start'>
            {/* ------------------------------ Sword Handle ----------------------------- */}
            <SwordHandle />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Sword

import './styles.css'

const RainGaurd = () => {
  return (
    <section className='rain-gaurd flex flex-col items-center justify-center'>
      <div className='h-2 w-10 bg-[#303039]' />
      <div className='middle relative h-2 w-32 bg-[#222229]' />
      <div className='near-blade h-5 w-10' />
    </section>
  )
}

export default RainGaurd

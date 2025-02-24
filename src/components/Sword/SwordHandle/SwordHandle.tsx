import './styles.css'

const SwordHandle = () => {
  return (
    <section className='sword-handle relative mt-8 flex h-56 w-10 flex-col items-center bg-[#232531]'>
      {/* ------------------------- Diamond cutouts wrapper ------------------------ */}
      <div className='flex w-10 flex-col items-center justify-between gap-2 py-2'>
        {Array(11)
          .fill(0)
          .map((_, i) => (
            <DiamondCutouts key={i} />
          ))}
      </div>
    </section>
  )
}

export default SwordHandle

const DiamondCutouts = () => {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='line' />
      <div className='diamond-cutouts shrink-0' />
      <div className='line' />
    </div>
  )
}

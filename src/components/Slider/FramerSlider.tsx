'use client'
import { motion, useMotionValue } from 'framer-motion'

const FramerSlider = () => {
  const x = useMotionValue(0)
  // const spring = useSpring(x, { stiffness: 400, damping: 100 })

  return (
    <motion.div id='slider' className='relative h-10 w-[400px] rounded-md bg-[#482006]'>
      <motion.div
        className='absolute top-0.5 h-9 w-1.5 cursor-pointer rounded-full bg-teal-300'
        style={{
          // x: spring,
          x,
        }}
        drag='x'
        dragConstraints={{ left: 0, right: 390 }}
        dragElastic={0}
        dragMomentum={false}
        whileDrag={{ scale: 0.8, cursor: 'grabbing' }}
      />
    </motion.div>
  )
}

export default FramerSlider

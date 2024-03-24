'use client'
import { motion } from 'framer-motion'
import { MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react'

const Slider = () => {
  const [position, setPosition] = useState(250)
  const [isDragging, setIsDragging] = useState(false)

  // Refs
  const ref = useRef<HTMLDivElement>(null)
  const coffeeRef = useRef<HTMLDivElement>(null)
  const milkRef = useRef<HTMLDivElement>(null)
  const coffeeContainerRef = useRef<HTMLDivElement>(null)
  const milkContainerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isDragging && ref.current) {
      const slider = ref.current
      const newPosition = e.clientX - slider.getBoundingClientRect().left
      const maxPosition = slider.offsetWidth

      if (newPosition >= 0 && newPosition <= maxPosition) {
        setPosition(newPosition)
      }
    }
  }

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const isInCenterRange = useMemo(() => {
    if (coffeeRef.current && milkRef.current) {
      const coffeeWidth = coffeeRef.current.offsetWidth
      const milkWidth = milkRef.current.offsetWidth

      return position > coffeeWidth + 10 && position + 20 < 400 - milkWidth
    }

    return true
  }, [position])

  return (
    <motion.div
      id='slider'
      ref={ref}
      className='tran relative h-10 w-[400px] rounded-md'
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
    >
      {/* --------------------------------- Cursor --------------------------------- */}
      <motion.div
        className='absolute top-1 h-8 w-1.5 cursor-col-resize rounded-full bg-white'
        style={{
          left: position,
        }}
        whileTap={{ scale: 0.8, cursor: 'col-resize' }}
        ref={cursorRef}
        animate={isInCenterRange ? { height: 32, top: 4 } : { height: 20, top: 20 }}
        transition={{ type: 'tween', duration: 0.2 }}
      />
      <motion.div
        className='absolute bottom-0 h-10 rounded-lg bg-[#482006]'
        style={{
          width: position ? position - 5 : 0,
        }}
        ref={coffeeContainerRef}
        animate={isInCenterRange ? { height: 40 } : { height: 20 }}
        transition={{ type: 'spring', damping: 100, stiffness: 400 }}
      >
        <motion.div
          ref={coffeeRef}
          className='absolute left-0 flex h-10 select-none items-center gap-1 px-4'
          animate={isInCenterRange ? { bottom: 0 } : { bottom: '25px' }}
          transition={{ type: 'spring', damping: 100, stiffness: 400 }}
        >
          <h1 className='font-petit-formal-script text-[#B1500E]'>Coffee</h1>
          <h2 className='font-serif font-semibold text-[#E57627]'>{((position / 400) * 100).toFixed(0)}%</h2>
        </motion.div>
      </motion.div>
      <motion.div
        className='absolute bottom-0 right-0 h-10 rounded-lg bg-[#393939]'
        style={{
          width: position ? 388 - position : 0,
        }}
        ref={milkContainerRef}
        animate={isInCenterRange ? { height: 40 } : { height: 20 }}
        transition={{ type: 'spring', damping: 100, stiffness: 400 }}
      >
        <motion.div
          ref={milkRef}
          className='absolute bottom-0 right-0 flex h-10 select-none items-center gap-1 px-4'
          animate={isInCenterRange ? { bottom: 0 } : { bottom: '25px' }}
          transition={{ type: 'spring', damping: 100, stiffness: 400 }}
        >
          <h2 className='font-serif font-semibold text-[#FDFDFD]'>{(((400 - position) / 400) * 100).toFixed(0)}%</h2>
          <h1 className='font-petit-formal-script text-[#9E9E9E]'>Milk</h1>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Slider

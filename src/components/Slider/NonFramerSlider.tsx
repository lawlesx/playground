'use client'
import { MouseEventHandler, TouchEventHandler, useEffect, useMemo, useRef, useState } from 'react'

const NonFramerSlider = () => {
  const [position, setPosition] = useState(250)
  const [isDragging, setIsDragging] = useState(false)

  // Refs
  const ref = useRef<HTMLDivElement>(null)
  const coffeeRef = useRef<HTMLDivElement>(null)
  const milkRef = useRef<HTMLDivElement>(null)
  const coffeeContainerRef = useRef<HTMLDivElement>(null)
  const milkContainerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: MouseEventHandler<HTMLDivElement> | TouchEventHandler<HTMLDivElement> = (e: any) => {
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
    window.addEventListener('touchend', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  const isInCenterRange = useMemo(() => {
    if (coffeeRef.current && milkRef.current) {
      const coffeeWidth = coffeeRef.current.offsetWidth
      const milkWidth = milkRef.current.offsetWidth

      return position > coffeeWidth + 10 && position + 10 < 400 - milkWidth
    }

    return true
  }, [position])

  useEffect(() => {
    if (
      coffeeRef.current &&
      milkRef.current &&
      coffeeContainerRef.current &&
      milkContainerRef.current &&
      cursorRef.current
    ) {
      const coffeeContainer = coffeeContainerRef.current
      const milkContainer = milkContainerRef.current

      const coffee = coffeeRef.current
      const milk = milkRef.current

      const cursor = cursorRef.current

      if (!isInCenterRange) {
        coffeeContainer.style.height = '20px'

        coffee.style.bottom = '25px'

        milkContainer.style.height = '20px'

        milk.style.bottom = '25px'

        cursor.style.height = '20px'
        cursor.style.bottom = '0px'
      } else {
        coffeeContainer.style.height = '40px'

        coffee.style.bottom = '0px'

        milkContainer.style.height = '40px'

        milk.style.bottom = '0px'

        cursor.style.height = '32px'
        cursor.style.bottom = '4px'
      }
    }
  }, [isInCenterRange, position])

  return (
    <div
      id='slider'
      ref={ref}
      className='tran relative h-10 w-[400px] rounded-md'
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove as MouseEventHandler<HTMLDivElement>}
      onTouchMove={handleMouseMove as TouchEventHandler<HTMLDivElement>}
    >
      {/* --------------------------------- Cursor --------------------------------- */}
      <div
        className='absolute bottom-1 h-8 w-1.5 cursor-col-resize rounded-full bg-white transition-[height] duration-700'
        style={{
          left: position,
        }}
        ref={cursorRef}
      />
      <div
        className='absolute bottom-0 h-10 rounded-lg bg-[#482006] transition-[height] duration-700'
        style={{
          width: position ? position - 5 : 0,
        }}
        ref={coffeeContainerRef}
      >
        <div
          ref={coffeeRef}
          className='absolute bottom-0 left-0 flex h-10 select-none items-center gap-1 px-4 transition-all duration-700'
        >
          <h1 className='font-petit-formal-script text-[#B1500E]'>Coffee</h1>
          <h2 className='font-serif font-semibold text-[#E57627]'>{((position / 400) * 100).toFixed(0)}%</h2>
        </div>
      </div>
      <div
        className='absolute bottom-0 right-0 h-10 rounded-lg bg-[#393939] transition-[height] duration-700'
        style={{
          width: position ? 388 - position : 0,
        }}
        ref={milkContainerRef}
      >
        <div
          ref={milkRef}
          className='absolute bottom-0 right-0 flex h-10 select-none items-center gap-1 px-4 transition-all duration-700'
        >
          <h2 className='font-serif font-semibold text-[#FDFDFD]'>{(((400 - position) / 400) * 100).toFixed(0)}%</h2>
          <h1 className='font-petit-formal-script text-[#9E9E9E]'>Milk</h1>
        </div>
      </div>
    </div>
  )
}

export default NonFramerSlider

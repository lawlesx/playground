import { useEffect, useState } from 'react'

type Size = [number | undefined, number | undefined]

/**
 * @returns {Size} [height, width]
 */
const useWindowSize = (): Size => {
  const [size, setSize] = useState<Size>([undefined, undefined])

  const handleResize = (): void => setSize([window.innerHeight, window.innerWidth])

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize)

      handleResize()

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return size
}

export default useWindowSize

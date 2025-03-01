import Link from 'next/link'
import { FC } from 'react'

interface HighlightButtonProps {
  link: string
  text: string
}

const HighlightButton: FC<HighlightButtonProps> = ({ text, link }) => {
  return (
    <Link href={link} className='group relative flex w-full items-center justify-center rounded-md p-4 lg:w-3/4'>
      <h1 className='font-sour-gummy text-4xl font-semibold uppercase tracking-wider text-white'>{text}</h1>
      <div className='absolute bottom-0 h-1 w-1/2 bg-white transition-all duration-700 group-hover:w-full' />
      <div className='absolute top-0 h-1 w-0 bg-white transition-all duration-700 group-hover:w-full' />
      <div className='absolute left-0 h-0 w-1 bg-white transition-all duration-700 group-hover:h-full' />
      <div className='absolute right-0 h-0 w-1 bg-white transition-all duration-700 group-hover:h-full' />
    </Link>
  )
}

export default HighlightButton

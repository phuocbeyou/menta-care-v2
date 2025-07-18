import { Box } from '@mui/material'
import { RefObject } from 'react'

interface ItemCategoryProps {
  title: string
  time: string
  image: string
  isPlaying: boolean
  divRef: RefObject<HTMLDivElement | null> | null
}

export function ItemCategory({ title, time, image, divRef }: ItemCategoryProps) {
  return (
    <div
      className='flex items-center bg-white rounded-3xl w-full p-2 md:rounded-full h-[100px] md:h-[120px]'
      ref={divRef}
    >
      <Box component='img' src={image} alt='Arrow' height={{ xs: 50, md: 90 }} className='rounded-full' />
      <div className='ml-2 flex flex-col gap-1'>
        <div className='text-black text-[1.1rem] font-[400] cursor-pointer hover:underline md:text-2xl '>{title}</div>
        <div className='flex items-center gap-1 text-secondary font-semibold select-none md:text-xl'>
          {/* clock ion */}
          <Box component='img' src='/assets/images/well-being/clock.png' alt='Arrow' height={{ xs: 16, md: 24 }} />
          <span>{time}</span>
        </div>
      </div>
      <Box
        component='img'
        src='/assets/images/well-being/play.png'
        alt='Arrow'
        height={{ xs: 30, md: 56 }}
        className='ml-auto'
      />
    </div>
  )
}

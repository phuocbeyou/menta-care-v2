import { Box } from '@mui/material'

interface ItemSoftwareProps {
  title: string
  description: string
}

export function ItemSoftware({ title, description }: ItemSoftwareProps) {
  return (
    <div className='bg-white rounded-2xl p-1 py-4 flex flex-col items-center text-center w-[250px] h-[300px]'>
      <Box component='img' src={'assets/images/forum/setting.png'} alt={title} height={48} className='mb-2' />
      <h3 className='font-semibold text-sm sm:text-base mb-3 leading-tight'>{title}</h3>
      <p className='text-xs sm:text-sm text-black max-w-[160px] leading-relaxed'>{description}</p>
    </div>
  )
}

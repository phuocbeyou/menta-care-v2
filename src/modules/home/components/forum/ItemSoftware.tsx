import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface ItemSoftwareProps {
  title: string
  description: string
}

export function ItemSoftware({ title, description }: ItemSoftwareProps) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/list-company')}
      className='bg-white rounded-2xl p-1 py-4 flex flex-col items-center text-center w-[250px] h-[300px] cursor-pointer hover:bg-secondary hover:text-white'
    >
      <Box component='img' src={'assets/images/forum/setting.png'} alt={title} height={48} className='mb-2' />
      <h3 className='font-semibold text-sm sm:text-base mb-3 leading-tight'>{title}</h3>
      <p className='text-xs sm:text-sm text-black max-w-[160px] leading-relaxed'>{description}</p>
    </div>
  )
}

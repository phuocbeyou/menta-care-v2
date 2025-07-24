import { Box, Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface ItemCompanyProps {
  id: number
  start: number
  title: string
  subtitle: string
}

export default function ItemCompany({ start, title, subtitle }: ItemCompanyProps) {
  const navigate = useNavigate()
  return (
    <div className='bg-green-100 rounded-xl p-2 w-[256px] text-center h-[350px] flex flex-col justify-between '>
      <Box
        component='img'
        src={'https://storage.googleapis.com/a1aa/image/491ca3a4-069e-45cf-82fb-9320b8a6b0e7.jpg'}
        alt={title}
        className='object-contain rounded-lg mb-2 mx-auto'
        height={94}
        width={94}
      />
      <h2 className='font-semibold text-lg mb-1 text-black'>{title}</h2>
      <p className='text-sm text-gray-700 mb-4'>{subtitle}</p>
      <div>
        <Rating name='simple-controlled' value={start} readOnly />
        <button
          onClick={() => navigate('/contact-company')}
          className='bg-secondary text-white text-sm font-semibold rounded-md px-2 py-1 hover:bg-green-700 transition'
          type='button'
        >
          LIÊN HỆ NGAY
        </button>
      </div>
    </div>
  )
}

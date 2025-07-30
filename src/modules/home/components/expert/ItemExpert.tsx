import { Box, Button, Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Expert } from './ListExpert'

export interface ItemExpertProps {
  item: Expert
}

export const ItemExpert = ({ item }: ItemExpertProps) => {
  const navigate = useNavigate()
  return (
    <div className='bg-primary rounded-xl w-25 md:w-30  p-1 flex flex-col items-center h-[360px]'>
      <Box
        component='img'
        src={'/assets/images/avatar/avatar-1.webp'}
        alt='Avatar'
        height={{ xs: 100, md: 120 }}
        width={{ xs: 100, md: 120 }}
        className='rounded-md object-cover mb-3'
      />
      <h3 className='font-semibold text-center text-base mb-1 md:text-xl'>{item.name}</h3>
      <p className='text-xs text-center leading-tight mb-1 md:text-base md:leading-normal'>
        {item.title}
        <br />
        Kinh nghiệm: {item.yoe} năm
      </p>
      <div className='flex items-center gap-1 mb-2'>
        <Rating name='simple-controlled' value={parseFloat(item.rating) || 0} precision={0.1} readOnly size='small' />
        <span className='text-xs text-gray-600'>({parseFloat(item.rating).toFixed(1)})</span>
      </div>
      <Button
        onClick={() => navigate(`/expert-detail/${item.expert_id}`)}
        variant='outlined'
        sx={{
          borderRadius: 1,
          backgroundColor: 'secondary.main',
          marginTop: 'auto',
          color: 'white',
          '&:hover': { textDecoration: 'underline' }
        }}
      >
        ĐẶT LỊCH NGAY
      </Button>
    </div>
  )
}

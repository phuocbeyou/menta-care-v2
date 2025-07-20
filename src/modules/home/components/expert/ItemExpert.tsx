import { Box, Button, Rating } from '@mui/material'

export interface ItemExpertProps {
  id: number
  name: string
  avatar: string
  category: number
  //   description: string
  exp: number
  rating: number
  field: string
}

export const ItemExpert = ({ name, avatar, exp, rating, field }: ItemExpertProps) => {
  return (
    <div className='bg-primary rounded-xl w-25 md:w-30  p-1 flex flex-col items-center h-[360px]'>
      <Box
        component='img'
        src={avatar}
        alt='Avatar'
        height={{ xs: 100, md: 120 }}
        width={{ xs: 100, md: 120 }}
        className='rounded-md object-cover mb-3'
      />
      <h3 className='font-semibold text-center text-base mb-1 md:text-xl'>{name}</h3>
      <p className='text-xs text-center leading-tight mb-1 md:text-base md:leading-normal'>
        {field}
        <br />
        Kinh nghiệm: {exp} năm
      </p>
      <Rating name='simple-controlled' value={rating} readOnly />
      <Button
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

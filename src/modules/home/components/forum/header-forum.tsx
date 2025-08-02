import { SlideUp } from '@src/components/animation/SlideUp'

import { Box, Button, Grid2, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getAuthToken } from '@src/stores/authHelpers'

export function HeaderForum() {
  const navigate = useNavigate()
  return (
    <Grid2 container className='flex flex-col md:flex-row justify-between mb-20'>
      <Grid2 size={{ xs: 12, md: 6, lg: 5 }} className='md:w-1/2  h-[350px] md:h-[400px]'>
        <Box className='flex flex-col justify-between h-full'>
          <SlideUp delay={0.1} className='relative'>
            <div className='text-secondary font-semibold text-[3rem] md:text-[4.1rem] lg:text-[4.5rem] z-10'>FORUM</div>
          </SlideUp>
          <SlideUp delay={0.2} className='mt-1'>
            <div className='uppercase font-semibold text-2xl leading-4 md:text-4xl md:leading-7'>
              Cộng đồng
              <br />
              Gắn kết & Phát triển
            </div>
          </SlideUp>

          <SlideUp delay={0.3} className='mt-2'>
            <div className='text-[0.9rem] md:text-[1.3rem] text-black font-normal'>
              Chúng ta không đi một mình. Hãy chia sẻ thách thức, thành công, và kết nối để tiến xa hơn trên hành trình
              phát triển bền vững.
            </div>
          </SlideUp>

          <Stack direction={{ xs: 'row', md: 'row' }} className='flex mt-10'>
            <Button
              onClick={() => navigate('/auth')}
              className='w-[80%] h-[70px] cursor-pointer'
              variant='contained'
              color='primary'
              size='large'
              sx={{
                fontSize: { xs: '0.7rem', lg: '0.9rem' },
                '&:hover': {
                  backgroundColor: 'primary.main'
                },
                display: getAuthToken() ? 'none' : 'block'
              }}
            >
              <div className={`flex items-center gap-2 `}>
                <div className='text-black text-sm md:text-lg font-medium'> TẠO TÀI KHOẢN ĐỂ KẾT NỐI CỘNG ĐỒNG</div>
                {/* next icon*/}
                <Box
                  component='img'
                  src='/assets/images/components/next.png'
                  alt='Arrow'
                  height={41}
                  sx={{ filter: 'brightness(0)' }}
                />
              </div>
            </Button>
          </Stack>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} className='md:w-1/2 mt-10 md:mt-10 lg:mt-0 flex justify-center '>
        <Box className='relative w-full h-[400px] '>
          <Box
            component='img'
            src='/assets/images/forum/forum.jpg'
            alt='Effect'
            className='absolute w-full h-full object-contain z-10 top-0'
            sx={{
              transform: 'rotate(0deg)',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 87%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 87%)'
            }}
            height={487}
          />
        </Box>
      </Grid2>
    </Grid2>
  )
}

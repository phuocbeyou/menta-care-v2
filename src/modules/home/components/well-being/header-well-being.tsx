import { SlideUp } from '@src/components/animation/SlideUp'

import { Box, Button, Grid2, Stack } from '@mui/material'
import { Fade } from '@src/components/animation/Fade'

export function HeaderWellBeing() {
  return (
    <Grid2 container className='flex flex-col md:flex-row justify-between mb-20'>
      <Grid2 size={{ xs: 12, md: 6, lg: 5 }} className='md:w-1/2  h-[350px] md:h-[400px]'>
        <Box className='flex flex-col justify-between h-full'>
          <SlideUp delay={0.1} className='relative'>
            <div className='text-secondary font-bold text-[3rem] md:text-[4.1rem] lg:text-[4.5rem] z-10'>
              WELL-BEING
            </div>
            <Box
              className='absolute left-[-20px] top-[20px] md:left-[-20px] md:top-[27px] lg:left-[-32px] lg:top-[27px]'
              component='img'
              src='/assets/images/well-being/music.png'
              alt='Well-Being'
              height={{ xs: 40, md: 64 }}
            />
          </SlideUp>
          <SlideUp delay={0.2} className='mt-1'>
            <div className='font-semibold text-3xl leading-5 md:text-5xl md:leading-8'>
              GÓC CÂN BẰNG
              <br />
              THÂN TÂM TRÍ
            </div>
          </SlideUp>

          <SlideUp delay={0.3} className='mt-2'>
            <div className='text-[0.9rem] md:text-[1.3rem] text-black font-normal'>TÌM VỀ BẢN THỂ CHÂN THẬT</div>
          </SlideUp>

          <Stack direction={{ xs: 'row', md: 'row' }} className='flex mt-10'>
            <Button
              className='w-[80%] h-[70px] cursor-pointer'
              variant='contained'
              color='primary'
              size='large'
              sx={{
                fontSize: { xs: '0.7rem', lg: '0.9rem' },
                '&:hover': {
                  backgroundColor: 'primary.main'
                }
              }}
            >
              <div className='flex items-center gap-2'>
                <div className='text-black underline text-sm md:text-lg font-medium'>
                  {' '}
                  CÙNG NGHE NHỮNG BẢN NHẠC NHẸ NHÀNG
                </div>
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
            src='/assets/images/well-being/music-moon.png'
            alt='Effect'
            className='absolute w-full h-full object-contain z-10 top-0'
            sx={{
              transform: 'rotate(0deg)'
            }}
            height={487}
          />

          <Fade>
            <Box
              component='img'
              src='/assets/images/well-being/beat-heart.svg'
              alt='Effect'
              className='absolute inset-0 w-full h-full object-contain z-10 left-[70px] top-[150px] md:left-[160px] md:top-[40px]'
              height={{ xs: 200, md: 330 }}
            />
          </Fade>
        </Box>
      </Grid2>
    </Grid2>
  )
}

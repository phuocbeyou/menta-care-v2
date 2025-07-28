import { SlideUp } from '@src/components/animation/SlideUp'

import { Box, Button, Grid2, Stack } from '@mui/material'
import { Fade } from '@src/components/animation/Fade'
import { useNavigate } from 'react-router-dom'
import { isUserAuthenticated } from '@src/stores/authHelpers'

export function HeaderHome() {
  const navigate = useNavigate()
  return (
    <Grid2 container className='flex flex-col md:flex-row justify-between'>
      <Grid2 size={{ xs: 12, md: 6, lg: 5 }} className='md:w-1/2  h-[350px] md:h-[400px]'>
        <Box className='flex flex-col justify-between h-full'>
          <SlideUp delay={0.1}>
            <div className='text-secondary font-semibold text-[3rem] md:text-[4.1rem] lg:text-[5rem]'>MENTACARE</div>
          </SlideUp>
          <SlideUp delay={0.2} className='mt-4'>
            <div className='font-medium text-3xl leading-5 md:text-4xl md:leading-6'>
              BALANCE YOUR LIFE
              <br />
              EMPOWER YOUR MIND
            </div>
          </SlideUp>

          <SlideUp delay={0.3} className='mt-6'>
            <div className='text-[0.69rem] md:text-[0.9rem] text-black font-normal'>
              <strong>Kết nối chuyên gia</strong>
              <span className='not-italic'> (Trainer, Coach, Mentor, Consultant)</span>
              &nbsp;&amp; tài nguyên
              <br />
              <span className='not-italic'>Hỗ trợ toàn diện cho sự nghiệp, cuộc sống &amp; cho tổ chức của bạn</span>
            </div>
          </SlideUp>

          <Stack direction={{ xs: 'row', md: 'row' }} className='flex justify-between gap-2 mt-8'>
            <Button
              onClick={() => navigate('/expert')}
              className=' w-[70%] h-[44px]'
              variant='contained'
              color='secondary'
              size='large'
              sx={{
                fontSize: { xs: '0.7rem', lg: '0.9rem' }
              }}
            >
              TÌM CHUYÊN GIA PHÙ HỢP
            </Button>
            <Button
              onClick={() => navigate('/auth')}
              size='large'
              className={`w-[30%] h-[44px]`}
              variant='outlined'
              color='secondary'
              sx={{
                fontSize: { xs: '0.7rem', lg: '0.9rem' },
                display: isUserAuthenticated() ? 'none' : 'block'
              }}
            >
              ĐĂNG NHẬP
            </Button>
          </Stack>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} className='md:w-1/2 mt-10 md:mt-0 flex justify-center '>
        <Box className='relative w-full h-[400px] '>
          {/* Phone - Base layer */}

          <Box
            component='img'
            src='/assets/images/logo/phone.png'
            alt='Phone'
            className='absolute inset-0 w-full h-full object-contain left-[10px] md:left-[80px]'
            height={442}
          />

          {/* Head - Rotated 90 degrees and overlaid */}

          <Box
            component='img'
            src='/assets/images/logo/head.png'
            alt='Head'
            className='absolute inset-1 w-full h-full object-contain left-[-60px] md:left-[-0px]'
            sx={{
              transform: 'scaleX(-1)'
            }}
            height={300}
          />

          {/* Lining effects */}

          <Box
            component='img'
            src='/assets/images/logo/lining.png'
            alt='Effect'
            className='absolute w-full h-full object-contain z-10 top-27 left-[-39px] md:left-[30px]'
            sx={{
              transform: 'rotate(0deg)'
            }}
            height={90}
          />

          <Box
            component='img'
            src='/assets/images/logo/lining.png'
            alt='Effect'
            className='absolute w-full h-full object-contain z-10 top-38 left-[-39px] md:left-[30px]'
            sx={{
              transform: 'rotate(180deg)'
            }}
            height={90}
          />

          {/* Effect - Top layer */}

          <Fade>
            <Box
              component='img'
              src='/assets/images/logo/effect.png'
              alt='Effect'
              className='absolute inset-0 w-full h-full object-contain z-10 left-[-40px] md:left-[10px]'
              sx={{
                transform: 'rotate(30deg)'
              }}
              height={410}
            />
          </Fade>
        </Box>
      </Grid2>
    </Grid2>
  )
}

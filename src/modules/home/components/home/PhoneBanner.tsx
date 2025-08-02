import { Box, Typography, Grid2 } from '@mui/material'
import { Fade } from '@src/components/animation/Fade'
import { SlideUp } from '@src/components/animation/SlideUp'

export function PhoneBanner() {
  return (
    <Box
      className='bg-primary mt-10'
      sx={{
        borderRadius: '20px',
        padding: { xs: '20px', md: '40px' }
      }}
    >
      <Grid2 container spacing={4} alignItems='center'>
        {/* Left - Phone Interface */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Fade>
            <Box component='img' src='/assets/images/components/phone-banner.png' alt='Phone Banner' height={500} />
          </Fade>
        </Grid2>

        {/* Right - Text Content */}
        <Grid2 size={{ xs: 12, md: 8 }} className='flex flex-col '>
          <SlideUp>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 400,
                textAlign: 'center',
                marginBottom: { xs: '20px', md: '40px' },
                fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.2rem' }
              }}
            >
              Nhanh chóng <b>tìm được chuyên gia</b> lý tưởng cho bạn, thông qua:
            </Typography>
          </SlideUp>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '32px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              width: { xs: '100%', md: '60%' },
              margin: '0 auto'
            }}
          >
            <Typography
              variant='body1'
              sx={{
                fontSize: { xs: '0.9rem', md: '1.6rem' },
                lineHeight: 1.6,
                color: '#555',
                textAlign: 'justify',
                textJustify: 'inter-word'
              }}
            >
              AI thông minh của chúng tôi sẽ phân tích nhu cầu của bạn và ngay lập tức kết nối bạn với các chuyên gia
              phù hợp cùng các tài nguyên chất lượng trong nhiều lĩnh vực khác nhau.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  )
}

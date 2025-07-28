import { Box, Stack, Typography, Button, Link, Grid2, Divider } from '@mui/material'
import { SlideUp } from '@src/components/animation/SlideUp'
import { CONFIG } from '@src/config-global'
import { isUserAuthenticated } from '@src/stores/authHelpers'
import { NavLink } from 'react-router-dom'

export function HomeFooter() {
  return (
    <Box>
      <Box className='bg-primary' sx={{ py: 2 }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: CONFIG.maxWidth,
            mx: 'auto',
            pr: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <SlideUp>
            <Box component='img' src='/assets/images/logo/logo.png' alt='logo' sx={{ width: 158 }} />
          </SlideUp>
          <Typography
            variant='h4'
            sx={{
              color: 'rgb(0, 84, 43)',
              fontWeight: 600,
              fontSize: { xs: '1.2rem', md: '1.9rem' }
            }}
          >
            Kết nối và trải nghiệm các dịch vụ của chúng tôi!
          </Typography>
        </Box>
      </Box>
      <Box className='bg-secondary' sx={{ py: 6 }}>
        <Box sx={{ width: '100%', maxWidth: CONFIG.maxWidth, mx: 'auto', px: 4 }}>
          <Grid2 container spacing={4}>
            {/* Cột 1: Đối tác */}
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant='h4' sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                  Trở thành đối tác
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant='outlined'
                    sx={{
                      maxWidth: 190,
                      minWidth: 190,
                      borderRadius: 99,
                      color: 'rgb(0, 84, 43)',
                      borderColor: 'white',
                      bgcolor: 'white',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    Mail ...
                  </Button>
                  <Button
                    variant='outlined'
                    sx={{
                      borderRadius: 99,
                      maxWidth: 190,
                      minWidth: 190,
                      color: 'rgb(0, 84, 43)',
                      borderColor: 'white',
                      bgcolor: 'white',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    Hotline .....
                  </Button>
                </Stack>
                <Box sx={{ flexGrow: 1 }} />
                <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                  <Box
                    component='img'
                    src='/assets/images/logo/mail.png'
                    alt='mail'
                    sx={{ width: 36, height: 36, borderRadius: '50%' }}
                  />
                  <Box
                    component='img'
                    src='/assets/images/logo/fb.svg'
                    alt='facebook'
                    sx={{ width: 36, height: 36, borderRadius: '50%' }}
                  />
                  <Box
                    component='img'
                    src='/assets/images/logo/zalo.png'
                    alt='zalo'
                    sx={{ width: 36, height: 36, borderRadius: '50%' }}
                  />
                  <Box
                    component='img'
                    src='/assets/images/logo/print.svg'
                    alt='pinterest'
                    sx={{ width: 36, height: 36, borderRadius: '50%' }}
                  />
                  <Box
                    component='img'
                    src='/assets/images/logo/linkedin.png'
                    alt='linkedin'
                    sx={{ width: 36, height: 36, borderRadius: '50%' }}
                  />
                </Stack>
              </Box>
            </Grid2>
            {/* Cột 2: Tính năng người dùng */}
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant='h4' sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                  Tính năng người dùng
                </Typography>
                <Stack spacing={0.5}>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Đánh giá nhu cầu
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Kết nối chuyên gia
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Tư vấn Doanh nghiệp
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Life Coach
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Well-being
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Career Development
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Reskill - Upskilling
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Cố vấn chiến lược
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Forum thảo luận
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Tài nguyên kiến thức
                  </Link>
                </Stack>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  variant='outlined'
                  sx={{
                    mt: 4,
                    maxWidth: 190,
                    minWidth: 190,
                    borderRadius: 99,
                    color: 'rgb(0, 84, 43)',
                    borderColor: 'white',
                    bgcolor: 'white',
                    '&:hover': { textDecoration: 'underline' },
                    display: isUserAuthenticated() ? 'none' : 'block'
                  }}
                >
                  Đăng ký ngay
                </Button>
              </Box>
            </Grid2>
            {/* Cột 3: Tính năng chuyên gia */}
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant='h4' sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                  Tính năng chuyên gia
                </Typography>
                <Stack spacing={0.5}>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Xây dựng thương hiệu cá nhân
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Kết nối với khách hàng tiềm năng
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Chia sẻ dịch vụ tới cộng đồng
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Tư vấn phần mềm doanh nghiệp
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Chia sẻ tài nguyên
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Đồng tổ chức sự kiện
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Tổ chức khóa đào tạo
                  </Link>
                </Stack>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  variant='outlined'
                  sx={{
                    mt: 4,
                    maxWidth: 190,
                    minWidth: 190,
                    borderRadius: 99,
                    color: 'rgb(0, 84, 43)',
                    borderColor: 'white',
                    bgcolor: 'white',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Trở thành chuyên gia
                </Button>
              </Box>
            </Grid2>
            {/* Cột 4: About us */}
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <Typography variant='h4' sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                  About us
                </Typography>
                <Stack spacing={0.5}>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Đội ngũ
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Hoạt động cộng đồng
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Tài nguyên nhân sự
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Khóa đào tạo
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Dịch vụ tư vấn
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Cố vấn chiến lược
                  </Link>
                  <Link href='#' underline='hover' sx={{ color: 'white' }}>
                    Well-being Blog
                  </Link>
                </Stack>
              </div>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <Divider />
      <Box className='bg-secondary' sx={{ py: 1 }}>
        <Box sx={{ width: '100%', maxWidth: CONFIG.maxWidth, mx: 'auto', px: 4 }}>
          <NavLink to={'/cookie'} className='text-white underline text-xl'>
            Chính sách Cookie | Thông báo bảo mật | Điều khoản & Điều kiện | Chính sách Bảo mật & An toàn thông tin
          </NavLink>
          <div className='text-[1rem] mt-[0.5rem] text-[#00542B]'>
            Bằng việc tiếp tục sử dụng website này, bạn đồng ý cho phép chúng tôi sử dụng cookie nhằm nâng cao trải
            nghiệm và phân tích hành vi người dùng.
          </div>
        </Box>
      </Box>
    </Box>
  )
}

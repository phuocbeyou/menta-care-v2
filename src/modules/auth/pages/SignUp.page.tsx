import { Box, Button, Checkbox, Typography } from '@mui/material'
import InputBase from '@src/components/input/InputBase'
import { CONFIG } from '@src/config-global'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function SignUpPage() {
  const navigate = useNavigate()
  return (
    <>
      <Helmet>
        <title> {`Sign up - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-10 py-10'>
          {/* Left shield and text */}
          <div className='flex flex-col items-center max-w-xs md:max-w-[280px] '>
            <Box component='img' src={'/assets/images/auth/gaurd.svg'} alt='gaurd' height={175} className='mb-4' />
            <div className='text-center'>
              <p className='font-extrabold text-black text-[14px] leading-tight mb-1'>
                Cam kết bảo mật &amp;
                <br />
                Tôn trọng riêng tư của bạn
              </p>
              <p className='text-sm leading-tight text-black mb-4'>
                Mọi thông tin bạn cung cấp được bảo mật tuyệt đối và chỉ sử dụng nhằm giúp bạn hiểu rõ bản thân, nhận
                được lời khuyên phù hợp và kết nối đúng chuyên gia khi cần. Chúng tôi không chia sẻ thông tin cá nhân
                của bạn với bất kỳ bên thứ ba nào mà không có sự đồng ý.
              </p>
              <p className='text-sm leading-tight text-black mb-3'>
                Bạn là người duy nhất quyết định mình muốn chia sẻ đến đâu.
              </p>
              <Button
                className='bg-secondary text-white text-[14px] rounded-full px-6 py-2'
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  height: '53px',
                  px: 3,

                  borderRadius: '100px',
                  '&:hover': {
                    bgcolor: 'secondary.main',
                    color: 'white'
                  }
                }}
                type='button'
              >
                Lần đầu tới MentaCare?
              </Button>
            </div>
          </div>

          {/* Middle registration form */}
          <form className='flex flex-col gap-3 max-w-md w-full'>
            <h2 className='bg-primary text-[#8B1D1D] font-extrabold text-[18px] rounded-full px-6 py-2 w-max m-auto'>
              ĐĂNG KÝ TÀI KHOẢN
            </h2>
            <InputBase label='Tên đầy đủ' placeholder='Nhập họ và tên' />
            <InputBase label='Email hoặc Số điện thoại' placeholder='Nhập email hoặc số điện thoại' />
            <InputBase label='Mật khẩu' placeholder='Nhập mật khẩu' />
            <InputBase label='Xác nhận mật khẩu' placeholder='Nhập lại mật khẩu' />
            <div className='flex items-center gap-2'>
              <Checkbox color='secondary' />
              <Typography>Tôi đã đọc cam kết bảo mật và xác nhận.</Typography>
            </div>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                fontWeight: 800,
                fontSize: '1.125rem',
                height: '53px',
                borderRadius: '100px',
                '&:hover': {
                  bgcolor: 'secondary.main',
                  color: 'white'
                }
              }}
            >
              Đăng ký
            </Button>
          </form>

          {/* Right login/register box */}
          <div className='bg-primary rounded-3xl py-2 flex flex-col items-center w-full'>
            {/* //logo */}
            <Box component='img' src='/assets/images/logo/logo.png' alt='logo' height={94} />
            <p className='text-secondary font-normal text-2xl my-3'>ĐĂNG NHẬP | ĐĂNG KÝ</p>
            <Button
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                fontWeight: 800,
                fontSize: '0.875rem',
                borderRadius: '100px',
                px: 3,
                py: 1,
                height: '53px',
                mb: 4,
                '&:hover': {
                  bgcolor: 'secondary.main',
                  color: 'white'
                }
              }}
              type='button'
            >
              Đăng ký qua
            </Button>
            <div className='flex gap-3 mb-4'>
              <Box component='img' src='/assets/images/logo/fb.svg' alt='facebook' sx={{ width: 36, height: 36 }} />
              <Box component='img' src='/assets/images/logo/print.svg' alt='print' sx={{ width: 36, height: 36 }} />
              <Box
                component='img'
                src='/assets/images/logo/zalo.png'
                alt='zalo'
                sx={{ width: 36, height: 36, borderRadius: '50%' }}
              />
            </div>
            <Typography className='text-center bg-white p-1 rounded-lg text-black text-sm'>
              Tôi là người dùng thường xuyên của App
            </Typography>
            <Button
              className='max-w-[280px]'
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                fontWeight: 800,
                fontSize: '0.875rem',
                borderRadius: '100px',
                px: 3,
                py: 1,
                mt: 4,
                height: '53px',
                '&:hover': {
                  bgcolor: 'secondary.main',
                  color: 'white'
                }
              }}
              type='button'
              onClick={() => navigate('/auth')}
            >
              Đăng nhập ngay
            </Button>
          </div>
        </div>
      </Box>
    </>
  )
}

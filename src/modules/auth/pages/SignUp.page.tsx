import { Box, Button, Checkbox, Typography } from '@mui/material'
import InputBase from '@src/components/input/InputBase'
import { CONFIG } from '@src/config-global'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { InputPassword } from '@src/components/input'
import { Dialog as ErrorDialog } from '@src/components/error-dialog'
import { REQUEST_TYPE } from '../apis/const'
import { callingAPI } from '@src/configs/axios/api'
import PasscodeVerificationModal from '../components/PasscodeVerificationModal'

interface SignUpReq {
  name: string
  email_or_phone: string
  password: string
}

interface SignUpRes {
  message: string
  user_id: string
}



export default function SignUpPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isAcceptTerms, setIsAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // Passcode modal states
  const [showPasscodeModal, setShowPasscodeModal] = useState(false)
  const [userId, setUserId] = useState('')

  const submit = async () => {
    try {
      setIsLoading(true)
      const response = await callingAPI<SignUpRes, SignUpReq>(REQUEST_TYPE.user_register, {
        name: name,
        email_or_phone: email,
        password: password
      })

      if (response.message) {
        setUserId(response.user_id)
        setShowPasscodeModal(true)
        ErrorDialog.success('Đăng ký thành công! Vui lòng nhập mã xác thực từ email/SMS.')
      }
    } catch (error) {
      console.log(error)
      ErrorDialog.error('Có lỗi xảy ra, vui lòng thử lại')
    } finally {
      setIsLoading(false)
    }
  }

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Handle successful verification
  const handleVerificationSuccess = () => {
    setShowPasscodeModal(false)
    ErrorDialog.success('Xác thực thành công! Chuyển hướng đến trang đăng nhập...')
    setTimeout(() => {
      navigate('/auth')
    }, 2000)
  }

  // Handle modal close
  const handleModalClose = () => {
    setShowPasscodeModal(false)
  }

  const handleSignUp = async () => {
    // Check terms acceptance
    if (!isAcceptTerms) {
      ErrorDialog.error('Vui lòng đọc và xác nhận cam kết bảo mật')
      return
    }

    // Check name
    if (!name.trim()) {
      ErrorDialog.error('Vui lòng nhập tên đầy đủ')
      return
    }

    // Check email
    if (!email.trim()) {
      ErrorDialog.error('Vui lòng nhập email')
      return
    }

    if (!isValidEmail(email)) {
      ErrorDialog.error('Email không đúng định dạng')
      return
    }

    // Check password
    if (!password) {
      ErrorDialog.error('Vui lòng nhập mật khẩu')
      return
    }

    if (password.length < 6) {
      ErrorDialog.error('Mật khẩu phải có ít nhất 6 ký tự')
      return
    }

    // Check confirm password
    if (!confirmPassword) {
      ErrorDialog.error('Vui lòng nhập xác nhận mật khẩu')
      return
    }

    if (password !== confirmPassword) {
      ErrorDialog.error('Mật khẩu và xác nhận mật khẩu không khớp')
      return
    }

    // All validations passed - proceed with registration
    submit()
  }

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
            <InputBase
              label='Tên đầy đủ'
              placeholder='Nhập họ và tên'
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
            <InputBase
              label='Email hoặc Số điện thoại'
              placeholder='Nhập email hoặc số điện thoại'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <InputPassword
              label='Mật khẩu'
              placeholder='Nhập mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <InputPassword
              label='Xác nhận mật khẩu'
              placeholder='Nhập lại mật khẩu'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />
            <div className='flex items-center gap-2'>
              <Checkbox
                color='secondary'
                checked={isAcceptTerms}
                onChange={(e) => setIsAcceptTerms(e.target.checked)}
                disabled={isLoading}
              />
              <Typography>Tôi đã đọc cam kết bảo mật và xác nhận.</Typography>
            </div>
            <Button
              fullWidth
              onClick={handleSignUp}
              variant='contained'
              disabled={isLoading}
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
                },
                '&:disabled': {
                  bgcolor: 'secondary.light',
                  color: 'white'
                }
              }}
            >
              {isLoading ? (
                <div className='flex items-center gap-2'>
                  <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  <span>Đang đăng ký...</span>
                </div>
              ) : (
                'Đăng ký'
              )}
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

      {/* Passcode Verification Modal */}
      <PasscodeVerificationModal
        open={showPasscodeModal}
        onClose={handleModalClose}
        onSuccess={handleVerificationSuccess}
        userId={userId}
        email={email}
      />
    </>
  )
}

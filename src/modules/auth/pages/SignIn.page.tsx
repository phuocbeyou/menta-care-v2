import { Helmet } from 'react-helmet-async'

import { CONFIG } from '@src/config-global'
import { Box, Button, Typography } from '@mui/material'
import InputBase from '@src/components/input/InputBase'
import { useNavigate } from 'react-router-dom'
import { REQUEST_TYPE } from '../apis/const'
import { callingAPI } from '@src/configs/axios/api'
import { useState } from 'react'
import { Dialog } from '@src/components/error-dialog'
import { InputPassword } from '@src/components/input'
import { useAuthStore } from '@src/stores/authStore'

// import { SignInView } from '@sections/auth'

// ----------------------------------------------------------------------

interface LoginRequest {
  email_or_phone: string
  password: string
}

interface LoginResponse {
  message: string
  jwt_token: string
  user_id: string
}

export default function Page() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    //check empty include trim
    if (!email.trim() || !password.trim()) {
      //Toast
      Dialog.error('Vui lòng nhập email và mật khẩu')
      return
    }

    //check validate email by regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      Dialog.error('Email không hợp lệ')
      return
    }

    try {
      setIsLoading(true)
      const res = await callingAPI<LoginResponse, LoginRequest>(REQUEST_TYPE.login, {
        email_or_phone: email,
        password: password
      })
      if (res.jwt_token) {
        useAuthStore.getState().setToken(res.jwt_token)
        navigate('/profile')
      }
    } catch (error) {
      //Toast
      Dialog.error('Email hoặc mật khẩu không đúng')
      console.log(error, 'ppppp')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <Helmet>
        <title> {`Sign in - ${CONFIG.appName}`}</title>
      </Helmet>

      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <section className='flex-1 bg-primary rounded-3xl p-3 mx-auto mt-1 md:w-[50%]'>
          <div>
            <h2 className='font-semibold text-3xl mb-6 text-secondary leading-6 text-center '>ĐĂNG NHẬP</h2>

            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <InputBase
                fullWidth
                disabled={isLoading}
                placeholder='Email...'
                variant='outlined'
                label='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputPassword
                fullWidth
                disabled={isLoading}
                placeholder='Mật khẩu...'
                variant='outlined'
                label='Mật khẩu'
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </Box>

            <Typography
              variant='body2'
              sx={{
                mt: 1,
                mb: 3,
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'black',
                textDecoration: 'underline'
              }}
            >
              Quên mật khẩu?
            </Typography>
          </div>

          <div className='flex flex-col justify-center'>
            <Button
              loading={isLoading}
              onClick={handleLogin}
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                fontWeight: 600,
                fontSize: '1.125rem',
                textDecorationColor: 'white',
                textDecorationThickness: 2,
                width: '50%',
                margin: '0 auto',
                py: 1,

                borderRadius: 30,
                '&:hover': {
                  bgcolor: 'secondary.dark'
                }
              }}
            >
              ĐĂNG NHẬP
            </Button>
            <div className='text-center text-secondary text-xl mt-4'> Đăng nhập khác</div>
            <div className='flex gap-3 mb-6 justify-center items-center mt-4'>
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
          </div>
        </section>
      </Box>
    </>
  )
}

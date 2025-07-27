import { Box, Button, Checkbox } from '@mui/material'
import InputBase from '@src/components/input/InputBase'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'

export default function BecomePartner() {
  return (
    <>
      <Helmet>
        <title> {`Trở thành đối tác - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto flex flex-col bg-white my-2 px-3'>
        <div className=' flex flex-col md:flex-row md:justify-between gap-8'>
          <div className='md:w-1/2'>
            <Box
              component={'img'}
              src='https://storage.googleapis.com/a1aa/image/89d2be54-9ba4-4cc8-0197-b716c7c4455f.jpg'
              alt='Two people fist bumping over a desk with charts and a laptop showing graphs'
              className='rounded-3xl w-full object-cover'
              height={350}
            />
            <div className='mt-8 bg-primary rounded-full py-2 px-6 inline-flex items-center gap-3 text-base text-black font-normal max-w-max'>
              <Checkbox color='secondary' />
              Tôi đã đọc cam kết bảo mật và xác nhận.
            </div>
          </div>
          <section className='flex-1 bg-primary rounded-3xl p-3 flex flex-col '>
            <div>
              <h2 className='font-semibold text-3xl mb-6 text-black leading-6 text-center '>Trở thành đối tác</h2>

              <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <InputBase fullWidth placeholder='Nhập họ và tên' variant='outlined' label='Tên đầy đủ' />
                <InputBase fullWidth placeholder='Tương ứng với tên đăng nhập' variant='outlined' label='Email' />
                <InputBase fullWidth placeholder='Để chúng tôi liên hệ' variant='outlined' label='Số điện thoại' />
                <InputBase fullWidth placeholder='Điền tên công ty' variant='outlined' label='Tên công ty' />
              </Box>
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
                marginTop: 4,
                textDecorationColor: 'white',
                textDecorationThickness: 2,
                py: 1,

                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'secondary.dark'
                }
              }}
            >
              GỬI NGAY
            </Button>
          </section>
        </div>
      </Box>
    </>
  )
}

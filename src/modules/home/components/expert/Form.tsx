import { Box, Button, Checkbox, Typography } from '@mui/material'
import InputBase from '@src/components/input/InputBase'
import { InputUpLoadFile } from '@src/components/input/InputUpLoadFile'

export function Form() {
  return (
    <div className='mt-15'>
      <div className='text-center text-2xl mb-8'>
        Chúng tôi tin rằng bằng cách đặt ra tiêu chuẩn cao, chúng tôi có thể đảm bảo mọi kết nối trên MentaCare đều là
        những kết nối giá trị, mang lại sự thay đổi thật sự.
      </div>
      <main className='max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 mt-10'>
        {/* <!-- Left side --> */}
        <section className='flex-1 bg-primary rounded-3xl p-3 mx-auto md:mx-0 flex flex-col '>
          <div>
            <h2 className='font-semibold text-3xl mb-6 text-black leading-6 text-center '>
              Đăng ký để trở thành <br />
              chuyên gia của chúng tôi!
            </h2>

            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <InputBase fullWidth placeholder='Họ tên...' variant='outlined' label='Họ tên' />
              <InputBase fullWidth placeholder='Email...' variant='outlined' label='Email' />

              <InputBase
                fullWidth
                placeholder='Lý do bạn muốn trở thành chuyên gia'
                variant='outlined'
                label='Lý do bạn muốn trở thành chuyên gia'
              />
              <InputBase
                fullWidth
                placeholder='Chức vụ công việc hiện tại...'
                variant='outlined'
                label='Chức vụ công việc hiện tại'
              />

              <InputUpLoadFile />
            </Box>

            <div className='flex items-center gap-2 mt-2'>
              <Checkbox color='secondary' />
              <Typography>Cam kết mọi thông tin bạn cung cấp là đúng!</Typography>
            </div>

            <Typography
              variant='body2'
              sx={{
                mt: 1,
                mb: 3,
                fontSize: '1rem',
                color: 'black'
              }}
            >
              Chúng tôi sẽ phản hồi qua email của bạn sau, cảm ơn bạn đã gửi thông tin cho chúng tôi!
            </Typography>
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

              textDecorationColor: 'white',
              textDecorationThickness: 2,
              py: 1,
              mt: 'auto',
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'secondary.dark'
              }
            }}
          >
            GỬI NGAY
          </Button>
        </section>

        {/* <!-- Right side --> */}
        <section className='flex-1 bg-primary rounded-3xl p-3 mx-auto md:mx-0 flex flex-col '>
          <div>
            <h2 className='font-semibold text-3xl mb-6 text-black leading-6 text-center '>
              Tìm kiếm chuyên gia <br />
              phù hợp của mình!
            </h2>

            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <InputBase fullWidth placeholder='Họ tên...' variant='outlined' label='Họ tên' />
              <InputBase fullWidth placeholder='Số điện thoại...' variant='outlined' label='Số điện thoại' />
              <InputBase
                fullWidth
                placeholder='Chức vụ công việc hiện tại...'
                variant='outlined'
                label='Chức vụ công việc hiện tại'
              />
              <InputBase fullWidth placeholder='Email...' variant='outlined' label='Email' />
            </Box>

            <Typography
              variant='body2'
              sx={{
                mt: 1,
                mb: 3,
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'black'
              }}
            >
              Kết quả sau đó sẽ được gửi lại vào email của bạn!
            </Typography>
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

              textDecorationColor: 'white',
              textDecorationThickness: 2,
              py: 1,
              mt: 'auto',
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'secondary.dark'
              }
            }}
          >
            BẮT ĐẦU!
          </Button>
        </section>
      </main>
    </div>
  )
}

import { Box, Typography, Button } from '@mui/material'
import InputBase from '../../../components/input/InputBase'

export default function AdviceOnline() {
  return (
    <main className='max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 mt-10'>
      {/* <!-- Left side --> */}
      <section className='flex-1'>
        <h1 className='text-black text-3xl font-normal mb-8  leading-snug text-center '>
          <span className='font-bold'>3 Bước</span> chọn chuyên gia tư vấn <br />
          <span className='font-bold'>đơn giản - hiệu quả</span> cùng Mentacare
        </h1>

        <div className='space-y-3 '>
          <div className='bg-secondary rounded-2xl p-3 text-white'>
            <p className='font-bold text-xl'>BƯỚC 1</p>
            <p className='font-semibold text-[1.1rem]'>Xác định vấn đề</p>
            <p className='text-[1rem] font-normal leading-tight'>
              Hãy để chatbot AI cùng bạn khám phá vấn đề thực sự bạn đang gặp phải &amp; đầu sẽ là những hỗ trợ phù hợp
            </p>
          </div>

          <div className='bg-secondary rounded-2xl p-3 text-white'>
            <p className='font-bold text-xl'>BƯỚC 2</p>
            <p className='font-semibold text-[1.1rem]'>Xem chuyên gia phù hợp</p>
            <p className='text-[1rem] font-normal leading-tight'>
              Nhận danh sách các chuyên gia phù hợp với mục tiêu và nhu cầu cụ thể của bạn.
            </p>
          </div>

          <div className='bg-secondary rounded-2xl p-3 text-white'>
            <p className='font-bold text-xl'>BƯỚC 3</p>
            <p className='font-semibold text-[1.1rem]'>Chọn gói dịch vụ</p>
            <p className='text-[1rem] font-normal leading-tight'>
              Chọn lịch làm việc với chuyên gia sao cho phù hợp nhất với mục tiêu và nhịp sống của bạn.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Right side --> */}
      <section className='flex-1 bg-primary rounded-3xl p-3 mx-auto md:mx-0 flex flex-col '>
        <div>
          <h2 className='font-bold text-3xl mb-6 text-black leading-6 text-center '>
            Tham gia ngay để biết <br />
            <span className='decoration-black decoration-2'>"VẤN ĐỀ"</span> của bạn!
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
            textDecoration: 'underline',
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
  )
}

import { Box, Typography, Button } from '@mui/material'
import InputBase from '../../../../components/input/InputBase'

export default function AdviceOnline() {
  return (
    <section className='flex-1 bg-primary rounded-3xl p-3 mx-auto md:mx-0 flex flex-col mt-10 md:w-[50%]'>
      <div>
        <h2 className='font-semibold text-3xl mb-6 text-black leading-6 text-center '>
          “VẤN ĐỀ” hiện tại của bạn là gì?
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
  )
}

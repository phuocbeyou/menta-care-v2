import { Box, Button } from '@mui/material'

export function WriteDiary() {
  return (
    <div className='bg-primary rounded-3xl p-2 md:p-4 w-full flex flex-col gap-3 relative items-center'>
      <div className='text-4xl font-bold  text-secondary'>Viết tự do</div>

      <Box borderRadius={4} width='100%'>
        <textarea
          name='postContent'
          rows={14}
          cols={40}
          className='border-2 border-gray-300 rounded-md p-2 bg-white w-full focus:outline-none'
          placeholder='Hôm nay mình cảm thấy'
        />
      </Box>
      <Button
        variant='contained'
        color='secondary'
        sx={{
          mt: 0,
          backgroundColor: '#4CAF83',
          px: 4,
          py: 1.2,
          fontWeight: 'bold',
          borderRadius: 999,
          textTransform: 'none'
        }}
      >
        Đăng nhập để lưu nhật ký
      </Button>
    </div>
  )
}

import { Box } from '@mui/material'

interface AiBoxProps {
  height?: number
  onClick?: () => void
}

export function AiBox({ height = 80, onClick }: AiBoxProps) {
  const textSize = height <= 80 ? 'text-xs' : height <= 120 ? 'text-sm' : 'text-base'
  const padding = height <= 80 ? 'p-1 px-2' : height <= 120 ? 'p-2 px-3' : 'p-[8px] px-3'

  return (
    <Box
      className='fixed bottom-6 right-6 z-50 cursor-pointer'
      onClick={onClick}
      sx={{
        animation: 'float 3s ease-in-out infinite',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.2s ease-in-out'
        },
        '@keyframes float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      }}
    >
      <Box className='flex items-center'>
        <Box
          component='img'
          src='/assets/images/components/ai-box.png'
          alt='AI Chat'
          height={height}
          sx={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))'
          }}
        />
        <Box
          className={`bg-primary rounded-lg ${padding} text-center font-medium underline ${textSize} shadow-lg`}
          sx={{
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            '&:hover': {
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
            }
          }}
        >
          Trò chuyện với
          <br />
          <Box
            className='font-bold'
            sx={{
              textDecoration: 'underline',
              color: 'rgb(0, 84, 43)',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Trợ Lý AI Mentacare
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

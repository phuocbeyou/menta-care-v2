import { Box } from '@mui/material'

interface AiBoxProps {
  height?: number
}

export function AiBox({ height = 100 }: AiBoxProps) {
  const textSize = height <= 80 ? 'text-xs' : height <= 120 ? 'text-sm' : 'text-base'
  const padding = height <= 80 ? 'p-1 px-2' : height <= 120 ? 'p-2 px-3' : 'p-[8px] px-3'

  return (
    <Box className='flex items-center '>
      <Box component='img' src='/assets/images/components/ai-box.png' alt='Arrow' height={height} />
      <Box className={`bg-primary rounded-lg ${padding} text-center font-medium underline ${textSize}`}>
        Trò chuyện với
        <br />
        <Box className='font-bold' sx={{ textDecoration: 'underline', color: 'rgb(0, 84, 43)' }}>
          Trợ Lý AI Mentacare
        </Box>
      </Box>
    </Box>
  )
}

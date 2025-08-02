import { Card, Button } from '@mui/material'
import { LineChart } from '@mui/x-charts'
import dayjs from 'dayjs'
import InputBase from '@src/components/input/InputBase'
import { useNavigate } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

// Custom LinearProgress với custom color
// const CustomLinearProgress = styled(LinearProgress, {
//   shouldForwardProp: (prop) => prop !== 'customColor'
// })<{ customColor?: string }>(({ theme, customColor }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[200],
//     ...theme.applyStyles('dark', {
//       backgroundColor: theme.palette.grey[800]
//     })
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: customColor || '#1a90ff',
//     ...theme.applyStyles('dark', {
//       backgroundColor: customColor || '#308fe8'
//     })
//   }
// }))

interface EmotionData {
  value: string
  user_id: string
  id: string
  created_time: string
}

interface EmotionDashboardProps {
  emotionDiaries: EmotionData[]
}

export default function EmotionDashboard({ emotionDiaries }: EmotionDashboardProps) {
  const navigate = useNavigate()

  const processChartData = () => {
    const today = dayjs()
    const xAxisData: string[] = []
    const emotionValues: number[] = []

    for (let i = 6; i >= 0; i--) {
      const targetDate = today.subtract(i, 'day')
      const dateStr = targetDate.format('YYYY-MM-DD')

      const dayData = emotionDiaries.find((diary) => {
        const diaryDate = dayjs.unix(Number(diary.created_time))
        return diaryDate.format('YYYY-MM-DD') === dateStr
      })

      const displayDate = targetDate.format('DD/MM')

      xAxisData.push(displayDate)
      emotionValues.push(dayData ? Number(dayData.value) : 0)
    }

    return { xAxisData, emotionValues }
  }

  const { xAxisData, emotionValues } = processChartData()

  return (
    <div className='flex-col sm:flex-row flex flex-1'>
      {/* Main Content */}
      <div className='flex flex-col flex-1 pr-2'>
        <div className='text-3xl font-semibold mb-3'>Cảm xúc của tôi</div>
        <Card className='border-1 border-gray-200 p-0'>
          <div className='w-full'>
            <LineChart
              width={undefined}
              height={300}
              margin={{ left: 0, right: 20, top: 20, bottom: 20 }}
              series={[
                {
                  data: emotionValues,
                  label: 'Cảm xúc',
                  color: '#82ca9d',
                  curve: 'monotoneX'
                }
              ]}
              xAxis={[{ scaleType: 'point', data: xAxisData }]}
              yAxis={[{ min: 0, max: 10 }]}
            />
          </div>
        </Card>

        {/* Welcome back card */}
        <Card className='border-1 border-gray-200 p-4 mt-4'>
          <div className='text-3xl font-semibold mb-2'>Chào mừng bạn trở lại</div>
          <div className='text-lg'>
            Cùng kiểm tra và đánh giá lại tiến độ phát triển tâm thân trí của bạn trong thời gian vừa qua.
          </div>
        </Card>

        {/* Action button */}
        <Button
          onClick={() => navigate('/expert?form-expert=true')}
          variant='outlined'
          color='secondary'
          sx={{
            color: 'black',
            borderColor: 'black',
            fontWeight: 400,
            fontSize: '1.1rem',
            textDecoration: 'none',
            borderRadius: 999,
            backgroundColor: 'white',
            marginTop: 2
          }}
        >
          Đăng ký trở thành chuyên gia của Mentacare
        </Button>
      </div>

      {/* Sidebar */}
      <div className='flex flex-col sm:w-[300px] w-full px-2 '>
        <div className='text-3xl font-semibold mb-3 text-white'>Cảm xúc của tôi</div>
        <Card className='border-1 border-gray-200 p-2' sx={{ backgroundColor: 'primary.main' }}>
          <div className='flex flex-col gap-2'>
            <InputBase placeholder='Bạn cần hỗ trợ gì' className='w-full' />
            <Button variant='contained' color='secondary' className='w-full h-[53px]'>
              Start Quiz
            </Button>
          </div>
        </Card>

        <Card className='mt-2 border-1 border-gray-200'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              defaultValue={dayjs()}
              readOnly
              sx={{
                width: '100%',
                maxWidth: '100%'
              }}
            />
          </LocalizationProvider>
        </Card>

        <Button
          href={'/become-partner'}
          variant='outlined'
          color='secondary'
          sx={{
            color: 'black',
            borderColor: 'black',
            fontWeight: 400,
            fontSize: '1.1rem',
            textDecoration: 'none',
            borderRadius: 999,
            backgroundColor: 'white',
            marginTop: 5
          }}
        >
          Trở thành đối tác
        </Button>
      </div>
    </div>
  )
}

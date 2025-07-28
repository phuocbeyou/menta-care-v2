import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import MoodModal, { MoodModalRef } from '../components/profile/MoodModal'
import { useEffect, useRef } from 'react'
import { LineChart } from '@mui/x-charts'
import { Box, Button, Card, LinearProgress, linearProgressClasses, styled } from '@mui/material'
import InputBase from '@src/components/input/InputBase'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'

// Custom LinearProgress với custom color
const CustomLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'customColor'
})<{ customColor?: string }>(({ theme, customColor }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800]
    })
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: customColor || '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: customColor || '#308fe8'
    })
  }
}))

export default function Profile() {
  const modalRef = useRef<MoodModalRef>(null)

  useEffect(() => {
    setTimeout(() => {
      modalRef.current?.open()
    }, 1000)
  }, [])

  return (
    <>
      <Helmet>
        <title> {`Profile - ${CONFIG.appName}`}</title>
      </Helmet>
      <div className='flex w-full flex-col sm:flex-row bg-white'>
        <div className='flex flex-col gap-4 w-35 sm:border-r border-gray-200 p-4'>
          <div>
            <div className='text-xl font-semibold'>Thư viện của tôi</div>
            <div className='mt-2 gap-2 flex flex-col'>
              <div className='flex items-center gap-1'>
                <Box
                  component='img'
                  src='/assets/images/profile/melody.png'
                  alt='avatar'
                  height={30}
                  sx={{ objectFit: 'cover' }}
                />
                Âm nhạc thư giãn
              </div>
              <div className='flex items-center gap-1'>
                <Box
                  component='img'
                  src='/assets/images/profile/mindfulness.png'
                  alt='avatar'
                  height={30}
                  sx={{ objectFit: 'cover' }}
                />
                Bài tập Yoga
              </div>
              <div className='flex items-center gap-1'>
                <Box
                  component='img'
                  src='/assets/images/profile/book.png'
                  alt='avatar'
                  height={30}
                  sx={{ objectFit: 'cover' }}
                />
                Tài nguyên quản trị
              </div>
              <div className='flex items-center gap-1'>
                <Box
                  component='img'
                  src='/assets/images/profile/sleep.png'
                  alt='avatar'
                  height={30}
                  sx={{ objectFit: 'cover' }}
                />
                Truyện ngủ ngon
              </div>
            </div>
          </div>

          <div>
            <div className='text-xl font-semibold'>Theo dõi nhật ký</div>
            <div className='mt-2 gap-2 flex flex-col'>
              <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className='flex-col sm:flex-row flex flex-1 py-4'>
          <div className='flex flex-col flex-1 pl-2'>
            <div className='text-3xl font-semibold mb-3'>Goal & Progress</div>
            <Card className='border-1 border-gray-200 p-0'>
              <div className='w-full'>
                <LineChart
                  width={undefined}
                  height={300}
                  margin={{ left: 0, right: 20, top: 20, bottom: 20 }}
                  series={[
                    {
                      data: [2, 4, 6, 5, 9],
                      label: 'Tinh thần',
                      color: '#82ca9d',
                      curve: 'monotoneX'
                    },
                    {
                      data: [1, 3, 2, 4, 6],
                      label: 'Thể chất',
                      color: '#ffc658',
                      curve: 'monotoneX'
                    },
                    {
                      data: [5, 4, 3, 4, 5],
                      label: 'Nghê nghiệp',
                      color: '#8884d8',
                      curve: 'monotoneX'
                    }
                  ]}
                  xAxis={[{ scaleType: 'point', data: ['A', 'B', 'C', 'D', 'E'] }]}
                  yAxis={[{ min: 0 }]}
                />
              </div>
              <div className='mt-0 flex flex-col sm:flex-row gap-2 p-4'>
                <div className='flex-1'>
                  <div className='text-sm text-gray-600'>Tinh thần</div>
                  <div className='flex items-center gap-2'>
                    <CustomLinearProgress variant='determinate' value={50} customColor='#82ca9d' className='w-full' />
                    <div className='text-sm text-gray-600'>50%</div>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='text-sm text-gray-600'>Thể chất</div>
                  <div className='flex items-center gap-2'>
                    <CustomLinearProgress variant='determinate' value={75} customColor='#ffc658' className='w-full' />
                    <div className='text-sm text-gray-600'>75%</div>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='text-sm text-gray-600'>Nghê nghiệp</div>
                  <div className='flex items-center gap-2'>
                    <CustomLinearProgress variant='determinate' value={30} customColor='#8884d8' className='w-full' />
                    <div className='text-sm text-gray-600'>30%</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className='border-1 border-gray-200 p-4 mt-2'>
              <div className='text-3xl font-semibold mb-2'>Chào mừng bạn trở lại</div>
              <div className='text-lg'>
                Cùng kiểm tra và đánh giá lại tiến độ phát triển tâm thân trí của bạn trong thời gian vừa qua.
              </div>
            </Card>

            <Button
              href={'/'}
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
          <div className='flex flex-col sm:w-[300px] w-full px-2 '>
            <div className='text-3xl font-semibold mb-3 text-white'>Goal & Progress</div>

            <Card className='border-1 border-gray-200 p-2' sx={{ backgroundColor: 'primary.main' }}>
              <div className='flex flex-col gap-2'>
                <InputBase placeholder='Bạn cần hỗ trợ gì' className='w-full' />
                <Button variant='contained' color='secondary' className='w-full h-[53px]'>
                  Start Quiz
                </Button>
              </div>
            </Card>

            <Card className=' mt-2 border-1 border-gray-200'>
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
                marginTop: 'auto'
              }}
            >
              Trở thành đối tác
            </Button>
          </div>
        </div>
      </div>
      <MoodModal ref={modalRef} />
    </>
  )
}

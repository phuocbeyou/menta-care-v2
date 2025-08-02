import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import MoodModal, { MoodModalRef } from '../components/profile/MoodModal'
import { useEffect, useRef, useState } from 'react'
import MusicLibrary from '../components/library/MusicLibrary'
import YogaLibrary from '../components/library/YogaLibrary'
import ManagementLibrary from '../components/library/ManagementLibrary'
import PodcastLibrary from '../components/library/PodcastLibrary'
import EmotionDashboard from '../components/dashboard/EmotionDashboard'
import CalendarManagement from '../components/calendar/CalendarManagement'
import ComingSoon from '../components/resources/ComingSoon'
import PersonalInfo from '../components/profile/PersonalInfo'
import ChangePassword from '../components/password/ChangePassword'
import { Box } from '@mui/material'
import dayjs from 'dayjs'
import { REQUEST_TYPE } from '@src/modules/home/apis/const'
import { callingAPI } from '@src/configs/axios/api'
import { getAuthToken } from '@src/stores/authHelpers'

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

interface GetEmotionDiaryReq {
  jwt_token: string
  pagging: number
  amount: number
}

interface GetEmotionDiaryRes {
  emotion_diaries: {
    value: string
    user_id: string
    id: string
    created_time: string
  }[]
}

type ViewType =
  | 'dashboard'
  | 'calendar'
  | 'resources'
  | 'profile'
  | 'password'
  | 'music'
  | 'yoga'
  | 'management'
  | 'podcast'

export default function Profile() {
  const modalRef = useRef<MoodModalRef>(null)
  const [emotionDiaries, setEmotionDiaries] = useState<GetEmotionDiaryRes['emotion_diaries']>([])
  const [currentView, setCurrentView] = useState<ViewType>('dashboard')

  const fetching = async () => {
    const response = await callingAPI<GetEmotionDiaryRes, GetEmotionDiaryReq>(REQUEST_TYPE.get_emotion_diaries, {
      jwt_token: getAuthToken() || '',
      pagging: 0,
      amount: 180500000
    })
    setEmotionDiaries(response.emotion_diaries)
    return response
  }

  const handleMenuClick = (view: ViewType) => {
    setCurrentView(view)
  }

  const renderMainContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <EmotionDashboard emotionDiaries={emotionDiaries} />
      case 'calendar':
        return <CalendarManagement />
      case 'resources':
        return <ComingSoon />
      case 'profile':
        return <PersonalInfo />
      case 'password':
        return <ChangePassword />
      case 'music':
        return <MusicLibrary />
      case 'yoga':
        return <YogaLibrary />
      case 'management':
        return <ManagementLibrary />
      case 'podcast':
        return <PodcastLibrary />
      default:
        return <EmotionDashboard emotionDiaries={emotionDiaries} />
    }
  }

  useEffect(() => {
    const checkAndOpenModal = async () => {
      try {
        const response = await fetching()
        // Check if any diary entry was created today
        const today = dayjs().startOf('day')
        const hasEntryToday = response.emotion_diaries.some((diary) => {
          const entryDate = dayjs.unix(Number(diary.created_time)).startOf('day')
          return entryDate.isSame(today)
        })

        // Only open modal if no entry was created today
        if (!hasEntryToday) {
          modalRef.current?.open()
        }
      } catch (error) {
        console.error('Error fetching emotion diaries:', error)
        // Open modal on error as fallback
        modalRef.current?.open()
      }
    }

    setTimeout(() => {
      checkAndOpenModal()
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
            <div className='text-xl font-semibold'>Thông tin</div>
            <div className='mt-2 gap-2 flex flex-col'>
              <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'dashboard' ? 'bg-gray-100 border-l-4 border-primary' : ''
                }`}
                onClick={() => handleMenuClick('dashboard')}
              >
                Cảm xúc của tôi
              </div>
              <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'calendar' ? 'bg-gray-100 border-l-4 border-primary' : ''
                }`}
                onClick={() => handleMenuClick('calendar')}
              >
                Quản lý lịch
              </div>
              {/* <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'resources' ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
                onClick={() => handleMenuClick('resources')}
              >
                Tài nguyên quản trị
              </div> */}
              <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'profile' ? 'bg-gray-100 border-l-4 border-primary' : ''
                }`}
                onClick={() => handleMenuClick('profile')}
              >
                Thông tin cá nhân
              </div>
              <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'password' ? 'bg-gray-100 border-l-4 border-primary' : ''
                }`}
                onClick={() => handleMenuClick('password')}
              >
                Đổi mật khẩu
              </div>
            </div>
          </div>
          <div>
            <div className='text-xl font-semibold'>Thư viện của tôi</div>
            <div className='mt-2 gap-2 flex flex-col'>
              <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'music' ? 'bg-gray-100 border-l-4 border-primary' : ''
                }`}
                onClick={() => handleMenuClick('music')}
              >
                <Box
                  component='img'
                  src='/assets/images/profile/melody.png'
                  alt='avatar'
                  height={30}
                  sx={{ objectFit: 'cover' }}
                />{' '}
                Âm nhạc thư giãn
              </div>
              <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'yoga' ? 'bg-gray-100 border-l-4 border-primary' : ''
                }`}
                onClick={() => handleMenuClick('yoga')}
              >
                <Box
                  component='img'
                  src='/assets/images/profile/mindfulness.png'
                  alt='avatar'
                  height={30}
                  sx={{ objectFit: 'cover' }}
                />{' '}
                Bài tập Yoga
              </div>
              <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'management' ? 'bg-gray-100 border-l-4 border-primary' : ''
                }`}
                onClick={() => handleMenuClick('management')}
              >
                <Box
                  component='img'
                  src='/assets/images/profile/book.png'
                  alt='avatar'
                  height={30}
                  sx={{ objectFit: 'cover' }}
                />{' '}
                Tài nguyên quản trị
              </div>
              <div
                className={`flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors ${
                  currentView === 'podcast' ? 'bg-gray-100 border-l-4 border-primary' : ''
                }`}
                onClick={() => handleMenuClick('podcast')}
              >
                {' '}
                <Box
                  component='img'
                  src='/assets/images/profile/sleep.png'
                  alt='avatar'
                  height={30}
                  sx={{ objectFit: 'cover' }}
                />{' '}
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
          <div className='flex flex-col w-full pl-2'>
            {/* Main Content Area */}
            {renderMainContent()}
          </div>
        </div>
      </div>
      <MoodModal ref={modalRef} fetching={fetching} />
    </>
  )
}

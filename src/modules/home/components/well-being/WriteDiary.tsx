import { Box, Button } from '@mui/material'
import { callingAPI } from '@src/configs/axios/api'
import { getAuthToken } from '@src/stores/authHelpers'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { REQUEST_TYPE } from '../../apis/const'
import { Dialog } from '@src/components/error-dialog'
import dayjs from 'dayjs'

interface SaveDiaryReq {
  jwt_token: string
  content: string
}

interface SaveDiaryRes {
  message: string
}

interface GetDiariesReq {
  jwt_token: string
  pagging: number
  amount: number
}

interface GetDiariesRes {
  diaries: {
    content: string
    user_id: string
    id: string
    created_time: string
  }[]
}

export function WriteDiary() {
  const navigate = useNavigate()
  const [content, setContent] = useState('')

  useEffect(() => {
    if (!getAuthToken()) return
    const fetchDiaries = async () => {
      try {
        const response = await callingAPI<GetDiariesRes, GetDiariesReq>(REQUEST_TYPE.get_diaries, {
          jwt_token: getAuthToken() || '',
          pagging: 0,
          amount: 180520000
        })

        // Check if there's a diary entry from today and set content
        const today = dayjs().startOf('day')
        const todayDiary = response.diaries.find((diary) => {
          const entryDate = dayjs.unix(Number(diary.created_time)).startOf('day')
          return entryDate.isSame(today)
        })

        // Set content if found today's diary entry
        if (todayDiary) {
          setContent(todayDiary.content)
        }
      } catch (error) {
        console.error('Error fetching diaries:', error)
      }
    }
    fetchDiaries()
  }, [])

  const handleSaveDiary = async () => {
    if (!content) {
      Dialog.error('Vui lòng nhập nội dung')
      return
    }
    const response = await callingAPI<SaveDiaryRes, SaveDiaryReq>(REQUEST_TYPE.save_diary, {
      jwt_token: getAuthToken() || '',
      content: content
    })
    if (response.message) {
      Dialog.success('Lưu nhật ký thành công')
    }
  }
  return (
    <div className='bg-primary rounded-3xl p-2 md:p-4 w-full flex flex-col gap-3 relative items-center'>
      <div className='text-4xl font-semibold  text-secondary'>Viết tự do</div>

      <Box borderRadius={4} width='100%'>
        <textarea
          name='postContent'
          rows={14}
          cols={40}
          className='border-2 border-gray-300 rounded-md p-2 bg-white w-full focus:outline-none'
          placeholder='Hôm nay mình cảm thấy'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Box>
      {getAuthToken() ? (
        <Button variant='contained' color='secondary' onClick={handleSaveDiary}>
          Lưu nhật ký
        </Button>
      ) : (
        <Button variant='contained' color='secondary' onClick={() => navigate('/auth')}>
          Đăng nhập để lưu nhật ký
        </Button>
      )}
    </div>
  )
}

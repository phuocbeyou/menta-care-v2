import { Box, Typography, Card, Button, Skeleton } from '@mui/material'
import { callingAPI } from '@src/configs/axios/api'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { REQUEST_TYPE } from '@src/modules/home/apis/const'
import { getAuthToken } from '@src/stores/authHelpers'

interface DiaryData {
  content: string
  user_id: string
  id: string
  created_time: string
}

interface DiaryResponse {
  diaries: DiaryData[]
}

interface DiaryRequest {
  jwt_token: string
  pagging: number
  amount: number
}

const MOCK_DIARY_DATA: DiaryData[] = [
  {
    content: 'Hôm nay công việc hơi bận rộn, tôi cảm thấy hơi mệt nhưng vẫn hoàn thành được các task quan trọng.',
    user_id: '40b434d5-0fe1-471b-b3a9-c33fec797a4f',
    id: 'b35c9342-b1c1-42c6-a014-7cfdcbb5e53b',
    created_time: '1753942791'
  },
  {
    content: 'Ngày hôm nay tôi đã có buổi yoga thật tuyệt vời, cảm thấy thư giãn và tràn đầy năng lượng.',
    user_id: '40b434d5-0fe1-471b-b3a9-c33fec797a4f',
    id: 'b35c9342-b1c1-42c6-a014-7cfdcbb5e52c',
    created_time: '1753856391'
  },
  {
    content: 'Đọc được một cuốn sách hay về phát triển bản thân. Có nhiều insight thú vị mà tôi muốn áp dụng.',
    user_id: '40b434d5-0fe1-471b-b3a9-c33fec797a4f',
    id: 'b35c9342-b1c1-42c6-a014-7cfdcbb5e52d',
    created_time: '1753769991'
  }
]

export default function DiaryManagement() {
  const [diaries, setDiaries] = useState<DiaryData[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const itemsPerPage = 10

  const formatDate = (timestamp: string) => {
    return dayjs.unix(Number(timestamp)).format('DD/MM/YYYY')
  }

  const formatTime = (timestamp: string) => {
    return dayjs.unix(Number(timestamp)).format('HH:mm')
  }

  const formatRelativeTime = (timestamp: string) => {
    const now = dayjs()
    const entryTime = dayjs.unix(Number(timestamp))
    const diffDays = now.diff(entryTime, 'day')

    if (diffDays === 0) return 'Hôm nay'
    if (diffDays === 1) return 'Hôm qua'
    if (diffDays <= 7) return `${diffDays} ngày trước`
    return entryTime.format('DD/MM/YYYY')
  }

  const fetchDiaries = async (page: number = 0, isLoadMore: boolean = false) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true)
      } else {
        setLoading(true)
      }

      const jwt_token = getAuthToken()

      const response = await callingAPI<DiaryResponse, DiaryRequest>(REQUEST_TYPE.get_diaries, {
        jwt_token: jwt_token || '',
        pagging: page,
        amount: 10
      })

      if (response?.diaries) {
        const newDiaries = response.diaries

        if (isLoadMore) {
          setDiaries((prev) => [...prev, ...newDiaries])
        } else {
          setDiaries(newDiaries)
        }

        // Check if there are more items to load
        setHasMore(newDiaries.length === itemsPerPage)
        setCurrentPage(page)
      }
    } catch (error) {
      console.error('Error fetching diaries:', error)
      // Fallback to mock data on error
      if (!isLoadMore) {
        setDiaries(MOCK_DIARY_DATA.slice(0, itemsPerPage))
        setHasMore(MOCK_DIARY_DATA.length > itemsPerPage)
      }
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchDiaries(currentPage + 1, true)
    }
  }

  useEffect(() => {
    fetchDiaries(0, false)
  }, [])

  const renderSkeletonCard = () => (
    <Card
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px solid #e0e0e0'
      }}
    >
      <div className='flex items-start gap-3 mb-3'>
        <Skeleton variant='circular' width={50} height={50} />
        <div className='flex-1'>
          <div className='flex items-center justify-between mb-2'>
            <Skeleton variant='text' width={120} height={20} />
            <Skeleton variant='text' width={80} height={16} />
          </div>
          <Skeleton variant='text' width='100%' height={20} sx={{ mb: 1 }} />
          <Skeleton variant='text' width='85%' height={20} sx={{ mb: 1 }} />
          <Skeleton variant='text' width='60%' height={20} />
        </div>
      </div>
    </Card>
  )

  return (
    <div className='p-4'>
      <Typography variant='h4' sx={{ mb: 3, fontWeight: 'bold' }}>
        Nhật ký của tôi
      </Typography>

      <div className='grid gap-4'>
        {loading
          ? // Show skeleton loading
            Array.from({ length: itemsPerPage }).map((_, index) => <div key={index}>{renderSkeletonCard()}</div>)
          : // Show actual data
            diaries.map((diary) => (
              <Card
                key={diary.id}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 3,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <div className='flex items-start gap-3'>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                        Nhật ký {formatRelativeTime(diary.created_time)}
                      </Typography>
                      <div className='text-right'>
                        <Typography variant='caption' color='text.secondary' sx={{ display: 'block' }}>
                          📅 {formatDate(diary.created_time)}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          ⏰ {formatTime(diary.created_time)}
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      variant='body1'
                      sx={{
                        lineHeight: 1.6,
                        color: 'text.primary',
                        fontStyle: 'italic',
                        pl: 2,
                        borderLeft: '3px solid',
                        borderColor: 'primary.main',
                        bgcolor: 'grey.50',
                        p: 2,
                        borderRadius: 1
                      }}
                    >
                      "{diary.content}"
                    </Typography>
                  </div>
                </div>
              </Card>
            ))}
      </div>

      {/* Load More Button */}
      {!loading && hasMore && diaries.length > 0 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant='outlined'
            onClick={handleLoadMore}
            disabled={loadingMore}
            sx={{
              borderRadius: 999,
              px: 4,
              py: 1.5,
              fontWeight: 'bold'
            }}
          >
            {loadingMore ? 'Đang tải...' : 'Tải thêm'}
          </Button>
        </Box>
      )}

      {/* Loading More Skeletons */}
      {loadingMore && (
        <div className='grid gap-4 mt-4'>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={`loading-more-${index}`}>{renderSkeletonCard()}</div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && diaries.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            color: 'text.secondary'
          }}
        >
          <Typography variant='h6' sx={{ mb: 1 }}>
            📝 Chưa có nhật ký nào
          </Typography>
          <Typography variant='body2'>Hãy bắt đầu viết nhật ký để ghi lại những cảm xúc và suy nghĩ của bạn</Typography>
        </Box>
      )}
    </div>
  )
}

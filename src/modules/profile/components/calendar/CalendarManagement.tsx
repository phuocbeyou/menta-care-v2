import { Box, Typography, Card, Chip, Avatar, Button, Skeleton } from '@mui/material'
import { callingAPI } from '@src/configs/axios/api'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { getAuthToken, parseJWTPayload } from '@src/stores/authHelpers'
import { REQUEST_TYPE } from '../../apis/const'

interface BookingData {
  date: string
  user_id: string
  created_at: string
  booking_id: string
  status: string
  expert_id: string
  time_start: string
  time_end: string
  name: string
  title: string
  yoe: number
  rating: number
  slots: {
    date: string // "2025-08-10",
    time_start: string // 18:22:00Z
    time_end: string // 20:25:00Z
  }[]
}

interface BookingHistoryResponse {
  history: BookingData[]
}

interface BookingHistoryRequest {
  jwt_token: string
  user_id: string
  pagging: number
  amount: number
}

const MOCK_BOOKING_DATA: BookingData[] = [
  {
    date: '2025-07-25',
    user_id: '40b434d5-0fe1-471b-b3a9-c33fec797a4f',
    created_at: '1753602577',
    booking_id: '04dd08bc-f237-47a9-a23d-483e22a17649',
    status: 'pending',
    expert_id: 'b9d607ff-59ca-4f73-871a-f88a8358cc46',
    time_start: '14:00',
    time_end: '15:00',
    name: 'Dr. Nguyễn Văn A',
    title: 'Chuyên gia tâm lý',
    yoe: 8,
    rating: 4.8,
    slots: []
  },
  {
    date: '2025-07-28',
    user_id: '40b434d5-0fe1-471b-b3a9-c33fec797a4f',
    created_at: '1753705577',
    booking_id: '04dd08bc-f237-47a9-a23d-483e22a17650',
    status: 'confirmed',
    expert_id: 'b9d607ff-59ca-4f73-871a-f88a8358cc47',
    time_start: '10:00',
    time_end: '11:00',
    name: 'TS. Trần Thị B',
    title: 'Chuyên gia dinh dưỡng',
    yoe: 12,
    rating: 4.9,
    slots: []
  },
  {
    date: '2025-07-30',
    user_id: '40b434d5-0fe1-471b-b3a9-c33fec797a4f',
    created_at: '1753808577',
    booking_id: '04dd08bc-f237-47a9-a23d-483e22a17651',
    status: 'completed',
    expert_id: 'b9d607ff-59ca-4f73-871a-f88a8358cc48',
    time_start: '16:00',
    time_end: '17:00',
    name: 'ThS. Lê Văn C',
    title: 'Chuyên gia coaching',
    yoe: 5,
    rating: 4.7,
    slots: []
  }
]

export default function CalendarManagement() {
  const [bookings, setBookings] = useState<BookingData[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const itemsPerPage = 10

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#FF9800'
      case 'confirmed':
        return '#4CAF50'
      case 'completed':
        return '#2196F3'
      case 'cancelled':
        return '#F44336'
      default:
        return '#9E9E9E'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Chờ xác nhận'
      case 'confirmed':
        return 'Đã xác nhận'
      case 'completed':
        return 'Đã hoàn thành'
      case 'cancelled':
        return 'Đã hủy'
      default:
        return status
    }
  }

  const formatDate = (dateStr: string) => {
    return dayjs(dateStr).format('DD/MM/YYYY')
  }

  const formatTime = (timeStr: string) => {
    return timeStr
  }

  const fetchBookingHistory = async (page: number = 0, isLoadMore: boolean = false) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true)
      } else {
        setLoading(true)
      }

      const jwt_token = getAuthToken()
      const parseToken = parseJWTPayload(jwt_token || '')

      const response = await callingAPI<BookingHistoryResponse, BookingHistoryRequest>(
        REQUEST_TYPE.get_booking_history,
        {
          jwt_token: jwt_token || '',
          user_id: parseToken?.user_id,
          pagging: page,
          amount: 180555
        }
      )

      if (response?.history) {
        const newBookings = response.history

        if (isLoadMore) {
          setBookings((prev) => [...prev, ...newBookings])
        } else {
          setBookings(newBookings)
        }

        // Check if there are more items to load
        setHasMore(newBookings?.length === itemsPerPage)
        setCurrentPage(page)
      }
    } catch (error) {
      console.error('Error fetching booking history:', error)
      // Fallback to mock data on error
      if (!isLoadMore) {
        setBookings(MOCK_BOOKING_DATA.slice(0, itemsPerPage))
        setHasMore(MOCK_BOOKING_DATA.length > itemsPerPage)
      }
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchBookingHistory(currentPage + 1, true)
    }
  }

  useEffect(() => {
    fetchBookingHistory(0, false)
  }, [])

  const renderSkeletonCard = () => (
    <Card
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px solid #e0e0e0'
      }}
    >
      <div className='flex items-start justify-between mb-3'>
        <div className='flex items-center gap-3'>
          <Skeleton variant='circular' width={60} height={60} />
          <div>
            <Skeleton variant='text' width={150} height={24} sx={{ mb: 0.5 }} />
            <Skeleton variant='text' width={120} height={20} sx={{ mb: 0.5 }} />
            <Skeleton variant='text' width={100} height={16} />
          </div>
        </div>
        <Skeleton variant='rectangular' width={100} height={24} sx={{ borderRadius: '12px' }} />
      </div>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 2,
          p: 2,
          bgcolor: 'grey.50',
          borderRadius: 1
        }}
      >
        <div>
          <Skeleton variant='text' width={80} height={16} sx={{ mb: 0.5 }} />
          <Skeleton variant='text' width={100} height={20} />
        </div>
        <div>
          <Skeleton variant='text' width={80} height={16} sx={{ mb: 0.5 }} />
          <Skeleton variant='text' width={120} height={20} />
        </div>
        <div>
          <Skeleton variant='text' width={80} height={16} sx={{ mb: 0.5 }} />
          <Skeleton variant='text' width={90} height={20} />
        </div>
      </Box>
    </Card>
  )

  return (
    <div className='p-4'>
      <Typography variant='h4' sx={{ mb: 3, fontWeight: 'bold' }}>
        Quản lý đặt lịch
      </Typography>

      <div className='grid gap-4'>
        {loading
          ? // Show skeleton loading
            Array.from({ length: itemsPerPage }).map((_, index) => <div key={index}>{renderSkeletonCard()}</div>)
          : // Show actual data
            bookings.map((booking) => (
              <Card
                key={booking.booking_id}
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
                <div className='flex items-start justify-between mb-3'>
                  <div className='flex items-center gap-3'>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: 'primary.main'
                      }}
                    >
                      {booking.name.split(' ').pop()?.charAt(0)}
                    </Avatar>
                    <div>
                      <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        {booking.name}
                      </Typography>
                      <Typography variant='body2' color='text.secondary' sx={{ mb: 0.5 }}>
                        {booking.title}
                      </Typography>
                      <div className='flex items-center gap-2'>
                        <Typography variant='caption' color='text.secondary'>
                          {booking.yoe} năm kinh nghiệm
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          ⭐ {booking.rating}
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <Chip
                    label={getStatusText(booking.status)}
                    sx={{
                      backgroundColor: getStatusColor(booking.status),
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  />
                </div>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                    gap: 2,
                    p: 2,
                    bgcolor: 'grey.50',
                    borderRadius: 1
                  }}
                >
                  <div>
                    <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mb: 0.5 }}>
                      📅 Ngày hẹn
                    </Typography>
                    <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                      {formatDate(booking.date)}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mb: 0.5 }}>
                      ⏰ Thời gian
                    </Typography>
                    <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                      {formatTime(booking.time_start)} - {formatTime(booking.time_end)}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mb: 0.5 }}>
                      📝 Booking ID
                    </Typography>
                    <Typography variant='body2' sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>
                      {booking.booking_id.slice(0, 8)}...
                    </Typography>
                  </div>
                </Box>
              </Card>
            ))}
      </div>

      {/* Load More Button */}
      {!loading && hasMore && bookings?.length > 0 && (
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
      {!loading && bookings?.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            color: 'text.secondary'
          }}
        >
          <Typography variant='h6' sx={{ mb: 1 }}>
            📅 Chưa có lịch hẹn nào
          </Typography>
          <Typography variant='body2'>Hãy đặt lịch với chuyên gia để được hỗ trợ tốt nhất</Typography>
        </Box>
      )}
    </div>
  )
}

import { Typography, Box, Card, Button, Chip, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useState } from 'react'
import dayjs from 'dayjs'

interface Appointment {
  id: string
  customerName: string
  customerEmail: string
  date: string
  timeStart: string
  timeEnd: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  title?: string
}

type FilterStatus = 'all' | 'pending' | 'confirmed' | 'cancelled' | 'completed'

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      customerName: 'User 1',
      customerEmail: 'user1@mentacare.vn',
      date: '2025-07-25',
      timeStart: '14:00',
      timeEnd: '15:00',
      status: 'pending'
    },
    {
      id: '2',
      customerName: 'User 1',
      customerEmail: 'user1@mentacare.vn',
      date: '2025-07-25',
      timeStart: '14:00',
      timeEnd: '15:00',
      status: 'confirmed'
    },
    {
      id: '3',
      customerName: 'Nguyễn Văn B',
      customerEmail: 'user1@mentacare.vn',
      date: '2025-07-25',
      timeStart: '14:00',
      timeEnd: '15:00',
      status: 'confirmed',
      title: 'Chuyên viên trị liệu'
    }
  ])

  const [filter, setFilter] = useState<FilterStatus>('all')

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Đang Chờ'
      case 'confirmed':
        return 'Đã xác nhận'
      case 'cancelled':
        return 'Đã hủy'
      case 'completed':
        return 'Đã hoàn thành'
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'warning'
      case 'confirmed':
        return 'success'
      case 'cancelled':
        return 'error'
      case 'completed':
        return 'info'
      default:
        return 'default'
    }
  }

  const handleStatusChange = (appointmentId: string, newStatus: 'confirmed' | 'cancelled' | 'completed') => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === appointmentId ? { ...appointment, status: newStatus } : appointment
      )
    )
  }

  const filteredAppointments = appointments.filter((appointment) => {
    if (filter === 'all') return true
    return appointment.status === filter
  })

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format('DD [tháng] MM, YYYY')
  }

  return (
    <div className='p-4 space-y-6'>
      <div className='flex items-center justify-between'>
        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'black' }}>
          Danh sách Lịch hẹn
        </Typography>

        <FormControl size='small' sx={{ minWidth: 180 }}>
          <InputLabel>Lọc theo trạng thái:</InputLabel>
          <Select
            value={filter}
            label='Lọc theo trạng thái:'
            onChange={(e) => setFilter(e.target.value as FilterStatus)}
          >
            <MenuItem value='all'>Tất cả</MenuItem>
            <MenuItem value='pending'>Đang chờ</MenuItem>
            <MenuItem value='confirmed'>Đã xác nhận</MenuItem>
            <MenuItem value='cancelled'>Đã hủy</MenuItem>
            <MenuItem value='completed'>Đã hoàn thành</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className='grid gap-4'>
        {filteredAppointments?.length === 0 ? (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              color: 'text.secondary'
            }}
          >
            <Typography variant='h6' sx={{ mb: 1, color: 'black' }}>
              📅 Không có lịch hẹn nào
            </Typography>
            <Typography variant='body2' sx={{ color: 'black' }}>
              {filter === 'all'
                ? 'Chưa có lịch hẹn nào được đặt'
                : `Không có lịch hẹn nào ở trạng thái "${getStatusLabel(filter)}"`}
            </Typography>
          </Box>
        ) : (
          filteredAppointments.map((appointment) => (
            <Card
              key={appointment.id}
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
              <div className='flex justify-between items-start'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
                      Lịch hẹn với {appointment.customerName}
                    </Typography>
                    <Chip
                      label={getStatusLabel(appointment.status)}
                      color={getStatusColor(appointment.status) as any}
                      size='small'
                      variant='filled'
                    />
                  </div>

                  <div className='space-y-1 text-gray-700'>
                    <div className='flex items-center gap-2'>
                      <span>👤</span>
                      <Typography variant='body2'>Khách hàng: {appointment.customerName}</Typography>
                    </div>

                    <div className='flex items-center gap-2'>
                      <span>📅</span>
                      <Typography variant='body2'>Ngày: {formatDate(appointment.date)}</Typography>
                    </div>

                    <div className='flex items-center gap-2'>
                      <span>🕐</span>
                      <Typography variant='body2'>
                        Thời gian: {appointment.timeStart} - {appointment.timeEnd}
                      </Typography>
                    </div>

                    <div className='flex items-center gap-2'>
                      <span>✉️</span>
                      <Typography variant='body2'>Email/SĐT: {appointment.customerEmail}</Typography>
                    </div>

                    {appointment.title && (
                      <div className='flex items-center gap-2'>
                        <span>💼</span>
                        <Typography variant='body2'>Chức danh: {appointment.title}</Typography>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className='flex flex-col gap-2 ml-4'>
                  {appointment.status === 'pending' && (
                    <>
                      <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                        sx={{
                          borderRadius: 999,
                          minWidth: 100,
                          height: 40
                        }}
                      >
                        Xác nhận
                      </Button>
                      <Button
                        variant='outlined'
                        color='error'
                        size='small'
                        onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                        sx={{
                          borderRadius: 999,
                          minWidth: 100,
                          height: 40
                        }}
                      >
                        Huỷ
                      </Button>
                    </>
                  )}

                  {appointment.status === 'confirmed' && (
                    <>
                      <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        onClick={() => handleStatusChange(appointment.id, 'completed')}
                        sx={{
                          borderRadius: 999,
                          minWidth: 100,
                          height: 40,
                          backgroundColor: 'secondary.main'
                        }}
                      >
                        Hoàn thành
                      </Button>
                      <Button
                        variant='outlined'
                        color='error'
                        size='small'
                        onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                        sx={{
                          borderRadius: 999,
                          minWidth: 100,
                          height: 40
                        }}
                      >
                        Huỷ
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

import { Typography, Box, Card, Button, TextField, Chip, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { ExpertDetailReq, ExpertDetailRes } from '@src/modules/home/pages/ExpertDetail'
import { REQUEST_TYPE } from '@src/modules/home/apis/const'
import { callingAPI } from '@src/configs/axios/api'

interface AvailableSlot {
  id: string
  date: string
  time_start: string
  time_end: string
}

interface APISlot {
  date: string
  time_start: string
  time_end: string
}

interface GroupedSlots {
  [date: string]: AvailableSlot[]
}

export default function AddAvailableSlots() {
  const [slots, setSlots] = useState<AvailableSlot[]>([])
  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({
    date: '',
    time_start: '',
    time_end: ''
  })

  const [showForm, setShowForm] = useState(false)
  const [errors, setErrors] = useState({
    date: '',
    time_start: '',
    time_end: ''
  })

  const groupSlotsByDate = (slots: AvailableSlot[]): GroupedSlots => {
    return slots.reduce((acc, slot) => {
      if (!acc[slot.date]) {
        acc[slot.date] = []
      }
      acc[slot.date].push(slot)
      return acc
    }, {} as GroupedSlots)
  }

  // Convert API slots to component format
  const convertSlotsFromAPI = (apiSlots: APISlot[]): AvailableSlot[] => {
    return apiSlots.map((slot, index) => ({
      id: `${slot.date}-${slot.time_start}-${index}`,
      date: slot.date,
      time_start: slot.time_start,
      time_end: slot.time_end
    }))
  }

  useEffect(() => {
    const fetchExpert = async () => {
      try {
        setLoading(true)

        const expertId = 'current-expert-id' // Đợi thêm expert_id trong token rồi lấy ra
        
        const response = await callingAPI<ExpertDetailRes, ExpertDetailReq>(REQUEST_TYPE.expert_details, {
          expert_id: expertId
        })
        
        if (response.experts && response.experts.length > 0) {
          const expertData = response.experts[0]
          // setExpert(expertData)
          
          // Convert slots from API format to component format
          if (expertData.slots && Array.isArray(expertData.slots)) {
            const apiSlots = expertData.slots as APISlot[]
            const convertedSlots = convertSlotsFromAPI(apiSlots)
            setSlots(convertedSlots)
          }
        }
      } catch (error) {
        console.error('Error fetching expert data:', error)
        // Keep empty slots array on error
      } finally {
        setLoading(false)
      }
    }
    
    fetchExpert()
  }, [])


  const validateDate = (date: string): string => {
    if (!date) return ''
    const selectedDate = dayjs(date)
    const today = dayjs().startOf('day')
    if (selectedDate.isBefore(today)) {
      return 'Không thể chọn ngày trong quá khứ'
    }
    return ''
  }

  const validateTimeSlot = (date: string, timeStart: string, timeEnd: string): string => {
    if (!date || !timeStart || !timeEnd) return ''
    
    // Check if end time is after start time
    if (timeStart >= timeEnd) {
      return 'Giờ kết thúc phải sau giờ bắt đầu'
    }

    // Check for time overlap with existing slots
    const existingSlotsForDate = slots.filter(slot => slot.date === date)
    const newStart = dayjs(`${date} ${timeStart}`)
    const newEnd = dayjs(`${date} ${timeEnd}`)

    for (const slot of existingSlotsForDate) {
      const existingStart = dayjs(`${slot.date} ${slot.time_start}`)
      const existingEnd = dayjs(`${slot.date} ${slot.time_end}`)
      
      // Check if times overlap
      if (
        (newStart.isBefore(existingEnd) && newEnd.isAfter(existingStart)) ||
        (newStart.isSame(existingStart)) ||
        (newEnd.isSame(existingEnd))
      ) {
        return `Thời gian trùng với slot ${slot.time_start} - ${slot.time_end}`
      }
    }
    
    return ''
  }

  const handleInputChange = (field: string, value: string) => {
    const newFormData = {
      ...formData,
      [field]: value
    }
    
    setFormData(newFormData)

    // Validate in real-time
    const newErrors = { ...errors }
    
    if (field === 'date') {
      newErrors.date = validateDate(value)
      // Also revalidate time when date changes
      if (newFormData.time_start && newFormData.time_end) {
        newErrors.time_start = validateTimeSlot(value, newFormData.time_start, newFormData.time_end)
        newErrors.time_end = ''
      }
    } else if (field === 'time_start' || field === 'time_end') {
      const timeError = validateTimeSlot(newFormData.date, newFormData.time_start, newFormData.time_end)
      newErrors.time_start = timeError
      newErrors.time_end = ''
    }
    
    setErrors(newErrors)
  }

  const handleAddSlot = () => {
    // Final validation before adding
    const dateError = validateDate(formData.date)
    const timeError = validateTimeSlot(formData.date, formData.time_start, formData.time_end)
    
    if (dateError || timeError) {
      setErrors({
        date: dateError,
        time_start: timeError,
        time_end: ''
      })
      return
    }

    if (formData.date && formData.time_start && formData.time_end) {
      const newSlot: AvailableSlot = {
        id: `${formData.date}-${formData.time_start}-${Date.now()}`,
        ...formData
      }
      
      setSlots(prev => [...prev, newSlot])
    
      
      setFormData({ date: '', time_start: '', time_end: '' })
      setErrors({ date: '', time_start: '', time_end: '' })
      setShowForm(false)
    }
  }

  const hasErrors = () => {
    return errors.date || errors.time_start || errors.time_end
  }

  const isFormValid = () => {
    return formData.date && formData.time_start && formData.time_end && !hasErrors()
  }



  const formatDate = (dateString: string) => {
    return dayjs(dateString).format('DD/MM/YYYY - dddd')
  }

  const groupedSlots = groupSlotsByDate(slots)

  return (
    <div className='p-4 space-y-6'>
      <div className='flex items-center justify-between'>
        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'black' }}>
          Quản lý lịch trống
        </Typography>
        <Button
          variant='contained'
          onClick={() => setShowForm(!showForm)}
          sx={{
            borderRadius: 999,
            px: 3,
            py: 1.5,
            fontWeight: 'bold',
            backgroundColor: 'secondary.main',
          }}
        >
           Thêm lịch trống
        </Button>
      </div>

      {/* Add Form */}
      {showForm && (
        <Card sx={{ p: 4, borderRadius: 2, border: '2px solid', borderColor: 'primary.main' }}>
          <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
            ➕ Thêm lịch trống mới
          </Typography>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
            <TextField
              label='Ngày'
              type='date'
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: dayjs().format('YYYY-MM-DD') }}
              error={!!errors.date}
              helperText={errors.date}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Giờ bắt đầu'
              type='time'
              value={formData.time_start}
              onChange={(e) => handleInputChange('time_start', e.target.value)}
              InputLabelProps={{ shrink: true }}
              error={!!errors.time_start}
              helperText={errors.time_start}
              fullWidth
              variant='outlined'
            />
            <TextField
              label='Giờ kết thúc'
              type='time'
              value={formData.time_end}
              onChange={(e) => handleInputChange('time_end', e.target.value)}
              InputLabelProps={{ shrink: true }}
              error={!!errors.time_end}
              helperText={errors.time_end}
              fullWidth
              variant='outlined'
            />
          </div>
          <div className='flex gap-2'>
            <Button
              variant='contained'
              onClick={handleAddSlot}
              disabled={!isFormValid()}
              sx={{ borderRadius: 999, backgroundColor: 'secondary.main', color: 'white' }}
            >
              Thêm
            </Button>
            <Button
              variant='outlined'
              onClick={() => {
                setShowForm(false)
                setFormData({ date: '', time_start: '', time_end: '' })
                setErrors({ date: '', time_start: '', time_end: '' })
              }}
              sx={{ borderRadius: 999, backgroundColor: 'grey.300', color: 'black'}}
            >
              Hủy
            </Button>
          </div>
        </Card>
      )}

      {/* Slots List */}
      <div className='space-y-4'>
        {loading ? (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              color: 'text.secondary'
            }}
          >
            <Typography variant='h6' sx={{ mb: 1, color: 'black' }}>
              🔄 Đang tải...
            </Typography>
            <Typography variant='body2' sx={{ color: 'black' }}>
              Đang tải dữ liệu lịch trống
            </Typography>
          </Box>
        ) : Object.keys(groupedSlots).length === 0 ? (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              color: 'text.secondary'
            }}
          >
            <Typography variant='h6' sx={{ mb: 1, color: 'black' }}>
              Chưa có lịch trống nào
            </Typography>
            <Typography variant='body2' sx={{ color: 'black' }}>
              Hãy thêm lịch trống để khách hàng có thể đặt lịch hẹn với bạn
            </Typography>
          </Box>
        ) : (
          Object.entries(groupedSlots)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([date, dateSlots]) => (
              <Card key={date} sx={{ p: 3, borderRadius: 2, border: '1px solid #e0e0e0' }}>
                <div className='flex items-center gap-2 mb-3'>
                  <span style={{ fontSize: '20px' }}>📅</span>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                    {formatDate(date)}
                  </Typography>
                  <Chip
                    label={`${dateSlots.length} slot${dateSlots.length > 1 ? 's' : ''}`}
                    size='small'
                    color='primary'
                    variant='outlined'
                  />
                </div>
                <Divider sx={{ mb: 2 }} />
                <div className='flex flex-wrap gap-2'>
                  {dateSlots
                    .sort((a, b) => a.time_start.localeCompare(b.time_start))
                    .map((slot) => (
                      <Chip
                        key={slot.id}
                        label={`🕐 ${slot.time_start} - ${slot.time_end}`}
                        variant='filled'
                        color='primary'
                        sx={{
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          backgroundColor: 'secondary.main',
                          px: 1,
                          py: 0.5,
                          height: 'auto',
                          '& .MuiChip-label': {
                            px: 2,
                            py: 1
                          }
                        }}
                      />
                    ))}
                </div>
              </Card>
            ))
        )}
      </div>
    </div>
  )
} 
import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import InputBase from '@src/components/input/InputBase'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import { Expert } from '@src/modules/chatting/components/ListExpert'
import { getAuthToken } from '@src/stores/authHelpers'
import { useState, useMemo } from 'react'
import { Dialog } from '@src/components/error-dialog'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { callingAPI } from '@src/configs/axios/api'

interface Slot {
  date: string
  time_start: string
  time_end: string
}

interface OrderExpertProps {
  expert?: Expert
}

interface BookExpertReq {
  jwt_token: string
  expert_id: string
  date: string
  time_start: string
  time_end: string
}

interface BookExpertRes {
  message: string
}

export function OrderExpert({ expert }: OrderExpertProps) {
  // const today = dayjs()
  // const fakeSlots: Slot[] = [
  //   { date: today.add(1, 'day').format('YYYY-MM-DD'), time_start: '08:00:00Z', time_end: '09:30:00Z' },
  //   { date: today.add(1, 'day').format('YYYY-MM-DD'), time_start: '14:00:00Z', time_end: '15:30:00Z' },
  //   { date: today.add(2, 'day').format('YYYY-MM-DD'), time_start: '09:00:00Z', time_end: '10:30:00Z' },
  //   { date: today.add(2, 'day').format('YYYY-MM-DD'), time_start: '15:00:00Z', time_end: '16:30:00Z' },
  //   { date: today.add(3, 'day').format('YYYY-MM-DD'), time_start: '10:00:00Z', time_end: '11:30:00Z' },
  //   { date: today.add(4, 'day').format('YYYY-MM-DD'), time_start: '08:30:00Z', time_end: '10:00:00Z' },
  //   { date: today.add(4, 'day').format('YYYY-MM-DD'), time_start: '13:00:00Z', time_end: '14:30:00Z' },
  //   { date: today.add(4, 'day').format('YYYY-MM-DD'), time_start: '16:00:00Z', time_end: '17:30:00Z' },
  //   { date: today.add(5, 'day').format('YYYY-MM-DD'), time_start: '09:30:00Z', time_end: '11:00:00Z' },
  //   { date: today.add(6, 'day').format('YYYY-MM-DD'), time_start: '14:30:00Z', time_end: '16:00:00Z' },
  //   { date: today.add(7, 'day').format('YYYY-MM-DD'), time_start: '08:00:00Z', time_end: '09:30:00Z' },
  //   { date: today.add(7, 'day').format('YYYY-MM-DD'), time_start: '11:00:00Z', time_end: '12:30:00Z' },
  //   { date: today.add(8, 'day').format('YYYY-MM-DD'), time_start: '15:30:00Z', time_end: '17:00:00Z' },
  //   { date: today.add(9, 'day').format('YYYY-MM-DD'), time_start: '09:00:00Z', time_end: '10:30:00Z' },
  //   { date: today.add(9, 'day').format('YYYY-MM-DD'), time_start: '13:30:00Z', time_end: '15:00:00Z' },
  //   { date: today.add(10, 'day').format('YYYY-MM-DD'), time_start: '10:30:00Z', time_end: '12:00:00Z' }
  // ]

  // Override expert slots với fake data
  const expertWithFakeSlots = expert ? { ...expert } : undefined
  const [form, setForm] = useState<{
    name: string
    phone: string
    email: string
    title: string
  }>({
    name: '',
    phone: '',
    email: '',
    title: ''
  })

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('')
  const [isBooking, setIsBooking] = useState(false)

  // Process slots data để group theo date
  const processedSlots = useMemo(() => {
    if (!expertWithFakeSlots?.slots || expertWithFakeSlots.slots?.length === 0) return {}

    const grouped: { [date: string]: Array<{ time_start: string; time_end: string }> } = {}

    ;(expertWithFakeSlots.slots as Slot[]).forEach((slot) => {
      const date = slot.date
      if (!grouped[date]) {
        grouped[date] = []
      }
      grouped[date].push({
        time_start: slot.time_start,
        time_end: slot.time_end
      })
    })

    return grouped
  }, [expertWithFakeSlots?.slots])

  // Get available dates (không bao gồm ngày quá khứ)
  const availableDates = useMemo(() => {
    const dates = Object.keys(processedSlots)
    const today = dayjs().startOf('day')
    return dates.filter((date) => dayjs(date).isAfter(today) || dayjs(date).isSame(today))
  }, [processedSlots])

  // Get time slots cho ngày được chọn
  const availableTimeSlots = useMemo(() => {
    if (!selectedDate) return []
    const dateStr = selectedDate.format('YYYY-MM-DD')
    return processedSlots[dateStr] || []
  }, [selectedDate, processedSlots])

  // Set default date and time khi có slots
  useMemo(() => {
    if (availableDates.length > 0 && !selectedDate) {
      const firstDate = dayjs(availableDates[0])
      setSelectedDate(firstDate)

      // Set default time slot
      const firstDateSlots = processedSlots[availableDates[0]]
      if (firstDateSlots && firstDateSlots?.length > 0) {
        setSelectedTimeSlot(`${firstDateSlots[0].time_start}-${firstDateSlots[0].time_end}`)
      }
    }
  }, [availableDates, selectedDate, processedSlots])

  const shouldDisableDate = (date: Dayjs) => {
    const dateStr = date.format('YYYY-MM-DD')
    const today = dayjs().startOf('day')

    // Disable ngày quá khứ
    if (date.isBefore(today)) return true

    // Disable ngày không có trong slots
    return !availableDates.includes(dateStr)
  }

  // Format time để bỏ seconds và Z
  const formatTime = (timeString: string) => {
    // Remove seconds and Z from time like "20:25:00Z" -> "20:25"
    return timeString.replace(/:\d{2}Z?$/, '')
  }

  const fetchBookExpert = async () => {
    try {
      setIsBooking(true)
      await callingAPI<BookExpertRes, BookExpertReq>(`book_experts`, {
        expert_id: expert?.expert_id || '',
        date: selectedDate?.format('YYYY-MM-DD') || '',
        time_start: selectedTimeSlot.split('-')[0] || '',
        time_end: selectedTimeSlot.split('-')[1] || '',
        jwt_token: getAuthToken() || ''
      })
      Dialog.success('Đặt lịch thành công!')
    } catch (error) {
      Dialog.error('Đặt lịch thất bại!')
    } finally {
      setIsBooking(false)
    }
  }

  const bookingExpert = async () => {
    // Validate form fields
    if ((form.name === '' || form.phone === '' || form.email === '' || form.title === '') && !getAuthToken()) {
      Dialog.error('Vui lòng nhập đầy đủ thông tin')
      return
    }

    // Validate slots selection if expert has slots
    if (expertWithFakeSlots?.slots && expertWithFakeSlots.slots?.length > 0) {
      if (!selectedDate || !selectedTimeSlot) {
        Dialog.error('Vui lòng chọn ngày và giờ hẹn')
        return
      }
    }
    fetchBookExpert()
  }
  return (
    <>
      <Helmet>
        <title> {`Order expert - ${CONFIG.appName}`}</title>
      </Helmet>

      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <section className='flex-1 bg-primary rounded-3xl p-3 mx-auto mt-1 md:w-[50%]'>
          <div>
            <h2 className='font-semibold text-3xl mb-6 text-black leading-6 text-center '>ĐẶT LỊCH VỚI CHUYÊN GIA</h2>

            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {!getAuthToken() && (
                <>
                  <InputBase
                    fullWidth
                    placeholder='Họ tên'
                    variant='outlined'
                    label='Họ tên'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <InputBase
                    fullWidth
                    placeholder='Số điện thoại'
                    variant='outlined'
                    label='Số điện thoại'
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <InputBase
                    fullWidth
                    placeholder='Chức vụ công việc hiện tại...'
                    variant='outlined'
                    label='Chức vụ công việc hiện tại...'
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                  <InputBase
                    fullWidth
                    placeholder='Email...'
                    variant='outlined'
                    label='Email...'
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </>
              )}

              {/* <InputUpLoadFile text='Click để tải lên kết quả tư vấn chatbot' /> */}
            </Box>

            {/* Slots Booking Section */}
            <Box sx={{ mt: 3 }}>
              {!expertWithFakeSlots?.slots || expertWithFakeSlots.slots?.length === 0 ? (
                <Typography
                  variant='body1'
                  sx={{
                    textAlign: 'center',
                    color: 'error.main',
                    fontWeight: 500,
                    py: 2,
                    bgcolor: 'error.light',
                    borderRadius: 2,
                    opacity: 0.8
                  }}
                >
                  Chuyên gia này không có lịch trống
                </Typography>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Chọn lịch hẹn
                  </Typography>

                  {/* Date Picker */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                      value={selectedDate}
                      onChange={(newValue: Dayjs | null) => {
                        setSelectedDate(newValue)
                        setSelectedTimeSlot('') // Reset time slot khi đổi ngày
                      }}
                      shouldDisableDate={shouldDisableDate}
                      displayStaticWrapperAs='desktop'
                      sx={{
                        '& .MuiPickersCalendarHeader-root': {
                          bgcolor: 'white',
                          borderRadius: 2
                        },
                        '& .MuiPickersDay-root': {
                          '&:hover': {
                            // bgcolor: 'secondary.light'
                          },
                          // Highlight ngày có thể chọn
                          '&:not(.Mui-disabled)': {
                            bgcolor: 'primary.main',
                            color: 'black',
                            fontWeight: 600,
                            '&:hover': {
                              bgcolor: 'secondary.main',
                              color: 'white'
                            }
                          },
                          '&.Mui-selected': {
                            bgcolor: 'secondary.main',
                            color: 'white',
                            '&:hover': {
                              bgcolor: 'secondary.dark'
                            }
                          }
                        }
                      }}
                    />
                  </LocalizationProvider>

                  {/* Time Slot Selector */}
                  {selectedDate && availableTimeSlots?.length > 0 && (
                    <FormControl fullWidth>
                      <InputLabel>Chọn giờ</InputLabel>
                      <Select
                        value={selectedTimeSlot}
                        label='Chọn giờ'
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        sx={{
                          bgcolor: 'white',
                          borderRadius: 2
                        }}
                      >
                        {availableTimeSlots.map((timeSlot, index) => (
                          <MenuItem key={index} value={`${timeSlot.time_start}-${timeSlot.time_end}`}>
                            {formatTime(timeSlot.time_start)} - {formatTime(timeSlot.time_end)}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}

                  {/* Selected booking info */}
                  {selectedDate && selectedTimeSlot && (
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: 'primary.main',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'secondary.main'
                      }}
                    >
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        📅 Lịch hẹn đã chọn:
                      </Typography>
                      <Typography variant='body2'>🗓️ Ngày: {selectedDate.format('DD/MM/YYYY')}</Typography>
                      <Typography variant='body2'>
                        ⏰ Giờ:{' '}
                        {selectedTimeSlot
                          .split('-')
                          .map((time) => formatTime(time))
                          .join(' - ')}
                      </Typography>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </div>

          <div className='flex flex-col justify-center mt-4'>
            <Button
              onClick={bookingExpert}
              type='submit'
              fullWidth
              variant='contained'
              disabled={isBooking}
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                fontWeight: 600,
                fontSize: '1.125rem',
                textDecorationColor: 'white',
                textDecorationThickness: 2,
                width: '50%',
                margin: '0 auto',
                py: 1,
                borderRadius: 30,
                '&:hover': {
                  bgcolor: 'secondary.dark'
                },
                '&:disabled': {
                  bgcolor: 'grey.400',
                  color: 'grey.600'
                }
              }}
            >
              {isBooking ? (
                <div className='flex items-center gap-2'>
                  <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  ĐANG XỬ LÝ...
                </div>
              ) : (
                'XÁC NHẬN'
              )}
            </Button>
          </div>
        </section>
      </Box>
    </>
  )
}

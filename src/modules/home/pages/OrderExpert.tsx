import { Box, Button } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import InputBase from '@src/components/input/InputBase'
import { InputUpLoadFile } from '@src/components/input/InputUpLoadFile'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'

export function OrderExpert() {
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
              <InputBase fullWidth placeholder='Họ tên' variant='outlined' label='Họ tên' />
              <InputBase fullWidth placeholder='Số điện thoại' variant='outlined' label='Số điện thoại' />
              <InputBase
                fullWidth
                placeholder='Chức vụ công việc hiện tại...'
                variant='outlined'
                label='Chức vụ công việc hiện tại...'
              />
              <InputBase fullWidth placeholder='Email...' variant='outlined' label='Email...' />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label='Chọn ngày giờ'
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                      placeholder: 'Chọn ngày giờ',
                      sx: {
                        '& .MuiInputLabel-root': {
                          color: 'secondary.main',
                          '&.Mui-focused': {
                            color: 'secondary.main'
                          }
                        },
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1,
                          '&:hover fieldset': {
                            borderColor: 'secondary.main'
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'secondary.main',
                            borderWidth: 2
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'secondary.main'
                          },
                          '& input': {
                            color: 'secondary.main !important',
                            backgroundColor: 'white',
                            borderRadius: 1,
                            '&::placeholder': {
                              color: 'secondary.main !important',
                              opacity: 1
                            }
                          }
                        }
                      }
                    }
                  }}
                />
              </LocalizationProvider>
              <InputUpLoadFile text='Click để tải lên kết quả tư vấn chatbot' />
            </Box>
          </div>

          <div className='flex flex-col justify-center mt-4'>
            <Button
              type='submit'
              fullWidth
              variant='contained'
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
                }
              }}
            >
              XÁC NHẬN
            </Button>
          </div>
        </section>
      </Box>
    </>
  )
}

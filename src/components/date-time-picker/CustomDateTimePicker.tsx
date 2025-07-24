import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material'
import type { Dayjs } from 'dayjs'

interface CustomDateTimePickerProps {
  label?: string
  placeholder?: string
  value?: Dayjs | null
  onChange?: (value: Dayjs | null) => void
  fullWidth?: boolean
  variant?: 'outlined' | 'filled' | 'standard'
}

export default function CustomDateTimePicker({
  label,
  placeholder,
  value,
  onChange,
  fullWidth = true,
  variant = 'outlined'
}: CustomDateTimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        slots={{
          textField: (params) => (
            <TextField
              {...params}
              fullWidth={fullWidth}
              variant={variant}
              placeholder={placeholder}
              sx={{
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
              }}
            />
          )
        }}
      />
    </LocalizationProvider>
  )
}

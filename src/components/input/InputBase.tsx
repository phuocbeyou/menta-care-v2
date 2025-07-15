import { TextField, TextFieldProps } from '@mui/material'

export default function InputBase({ ...props }: TextFieldProps) {
  return (
    <TextField
      {...props}
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
}

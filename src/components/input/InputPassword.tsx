import { useState } from 'react'
import { TextField, TextFieldProps, InputAdornment, IconButton, Typography } from '@mui/material'

interface InputPasswordProps extends Omit<TextFieldProps, 'type'> {
  showToggle?: boolean
}

export default function InputPassword({ showToggle = true, ...props }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      slotProps={{
        input: {
          endAdornment: showToggle ? (
            <InputAdornment
              position='end'
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                marginRight: '4px'
              }}
            >
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleTogglePassword}
                edge='end'
                sx={{
                  color: 'secondary.main',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    opacity: 0.8
                  }
                }}
              >
                <Typography
                  sx={{
                    fontSize: '18px',
                    lineHeight: 1,
                    userSelect: 'none',
                    color: 'secondary.main'
                  }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </Typography>
              </IconButton>
            </InputAdornment>
          ) : undefined,
          ...props.slotProps?.input
        }
      }}
      sx={{
        '& .MuiInputLabel-root': {
          color: 'secondary.main',
          '&.Mui-focused': {
            color: 'secondary.main'
          }
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: 1,
          backgroundColor: 'white',
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
        },
        ...props.sx
      }}
    />
  )
}

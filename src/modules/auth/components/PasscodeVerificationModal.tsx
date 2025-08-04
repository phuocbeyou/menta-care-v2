import { useState, useEffect } from 'react'
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Typography, 
  Box, 
} from '@mui/material'
import { callingAPI } from '@src/configs/axios/api'
import { Dialog as ErrorDialog } from '@src/components/error-dialog'
import { InputBase } from '@src/components/input'

interface VerifyPasscodeReq {
  user_id: string
  passcode: string
}

interface VerifyPasscodeRes {
  message: string
  success: boolean
}

// interface ResendPasscodeReq {
//   user_id: string
// }

// interface ResendPasscodeRes {
//   message: string
// }

interface PasscodeVerificationModalProps {
  open: boolean
  onClose: () => void
  onSuccess: () => void
  userId: string
  email: string
}

export default function PasscodeVerificationModal({
  open,
  onClose,
  onSuccess,
  userId,
  email
}: PasscodeVerificationModalProps) {
  const [passcode, setPasscode] = useState('')
  const [isVerifyingPasscode, setIsVerifyingPasscode] = useState(false)
  const [isResendingCode, setIsResendingCode] = useState(false)
  const [resendCountdown, setResendCountdown] = useState(0)

  // Countdown timer for resend button
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => {
        setResendCountdown(resendCountdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [resendCountdown])

  useEffect(() => {
    if (open) {
      setPasscode('')
      setResendCountdown(60)
    }
  }, [open])

  const verifyPasscode = async () => {
    if (!passcode.trim()) {
      ErrorDialog.error('Vui lòng nhập mã xác thực')
      return
    }

    try {
      setIsVerifyingPasscode(true)
      const response = await callingAPI<VerifyPasscodeRes, VerifyPasscodeReq>('verify_passcode', {
        user_id: userId,
        passcode: passcode.trim()
      })

      if (response.success) {
        ErrorDialog.success('Xác thực thành công!')
        onSuccess()
      } else {
        ErrorDialog.error('Mã xác thực không đúng')
      }
    } catch (error) {
      console.log(error)
      ErrorDialog.error('Có lỗi xảy ra khi xác thực')
    } finally {
      setIsVerifyingPasscode(false)
    }
  }

  // Resend passcode function
  const resendPasscode = async () => {
    try {
      setIsResendingCode(true)
    //  await callingAPI<ResendPasscodeRes, ResendPasscodeReq>('resend_passcode', {
    //     user_id: userId
    //   })

      ErrorDialog.success('Mã xác thực đã được gửi lại')
      setResendCountdown(60) // Reset countdown to 60 seconds
    } catch (error) {
      console.log(error)
      ErrorDialog.error('Có lỗi xảy ra khi gửi lại mã')
    } finally {
      setIsResendingCode(false)
    }
  }

  const handleClose = () => {
    setPasscode('')
    onClose()
  }

  return (
    <Dialog 
      open={open} 
      onClose={() => {}} // Prevent closing by clicking outside
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 2
        }
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
           Xác thực tài khoản
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          Mã xác thực đã được gửi đến {email}
        </Typography>
      </DialogTitle>

      <DialogContent >
       <div className='my-2'>
       <InputBase
          fullWidth
          label="Mã xác thực"
          placeholder="Nhập mã 6 chữ số"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          disabled={isVerifyingPasscode}
          inputProps={{ 
            maxLength: 6,
          }}
         
          onKeyPress={(e) => {
            if (e.key === 'Enter' && passcode.trim() && !isVerifyingPasscode) {
              verifyPasscode()
            }
          }}
        />
       </div>

        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Không nhận được mã?
          </Typography>
          <Button
            variant="text"
            onClick={resendPasscode}
            disabled={isResendingCode || resendCountdown > 0}
            sx={{ 
              color: 'secondary.main',
              fontWeight: 'bold',
              textTransform: 'none'
            }}
          >
            {isResendingCode ? (
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></div>
                Đang gửi...
              </div>
            ) : resendCountdown > 0 ? (
              `Gửi lại sau ${resendCountdown}s`
            ) : (
              'Gửi lại mã'
            )}
          </Button>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3, gap: 2 }}>
        <Button
          variant="outlined"
          onClick={handleClose}
          disabled={isVerifyingPasscode}
          sx={{
            flex: 1,
            borderRadius: 999,
            borderColor: 'grey.300',
            color: 'text.secondary',
            '&:hover': {
              borderColor: 'grey.400'
            }
          }}
        >
          Hủy
        </Button>
        <Button
          variant="contained"
          onClick={verifyPasscode}
          disabled={isVerifyingPasscode || !passcode.trim()}
          sx={{
            flex: 1,
            borderRadius: 999,
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.dark'
            },
            '&:disabled': {
              bgcolor: 'grey.300'
            }
          }}
        >
          {isVerifyingPasscode ? (
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
              Đang xác thực...
            </div>
          ) : (
            'Xác thực'
          )}
        </Button>
      </DialogActions>
    </Dialog>
  )
} 
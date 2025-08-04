import { useState } from 'react'
import { Box, Typography, Card, Button, Alert } from '@mui/material'
import { InputPassword } from '@src/components/input'

interface PasswordForm {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export default function ChangePassword() {
  const [passwordForm, setPasswordForm] = useState<PasswordForm>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState<Partial<PasswordForm>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (field: keyof PasswordForm) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm((prev) => ({
      ...prev,
      [field]: event.target.value
    }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<PasswordForm> = {}

    // Check current password
    if (!passwordForm.currentPassword) {
      newErrors.currentPassword = 'Vui lòng nhập mật khẩu hiện tại'
    }

    // Check new password
    if (!passwordForm.newPassword) {
      newErrors.newPassword = 'Vui lòng nhập mật khẩu mới'
    } else if (passwordForm.newPassword.length < 6) {
      newErrors.newPassword = 'Mật khẩu mới phải có ít nhất 6 ký tự'
    } else if (passwordForm.newPassword === passwordForm.currentPassword) {
      newErrors.newPassword = 'Mật khẩu mới phải khác mật khẩu hiện tại'
    }

    // Check confirm password
    if (!passwordForm.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu mới'
    } else if (passwordForm.confirmPassword !== passwordForm.newPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp'
    }

    setErrors(newErrors)
    return Object.keys(newErrors)?.length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // TODO: API call to change password
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate API call

      console.log('Changing password:', {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      })

      setSuccess(true)
      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      })

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Error changing password:', error)
      setErrors({ currentPassword: 'Mật khẩu hiện tại không đúng' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setErrors({})
    setSuccess(false)
  }

  return (
    <div className='p-4'>
      <Typography variant='h4' sx={{ mb: 3, fontWeight: 'bold' }}>
        Đổi mật khẩu
      </Typography>

      <div className='max-w-md mx-auto'>
        <Card sx={{ p: 4, borderRadius: 2 }}>
          {/* Success Alert */}
          {success && (
            <Alert severity='success' sx={{ mb: 3 }}>
              ✅ Đổi mật khẩu thành công! Vui lòng đăng nhập lại.
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <InputPassword
                label='Mật khẩu hiện tại'
                value={passwordForm.currentPassword}
                onChange={handleInputChange('currentPassword')}
                error={!!errors.currentPassword}
                helperText={errors.currentPassword}
                disabled={isLoading}
                fullWidth
                placeholder='Nhập mật khẩu hiện tại'
              />

              <InputPassword
                label='Mật khẩu mới'
                value={passwordForm.newPassword}
                onChange={handleInputChange('newPassword')}
                error={!!errors.newPassword}
                helperText={errors.newPassword}
                disabled={isLoading}
                fullWidth
                placeholder='Nhập mật khẩu mới'
              />

              <InputPassword
                label='Xác nhận mật khẩu mới'
                value={passwordForm.confirmPassword}
                onChange={handleInputChange('confirmPassword')}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                disabled={isLoading}
                fullWidth
                placeholder='Nhập lại mật khẩu mới'
              />
            </Box>

            {/* Action Buttons */}
            <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button
                type='button'
                variant='outlined'
                onClick={handleReset}
                disabled={isLoading}
                sx={{ minWidth: 120, color: 'black', borderColor: 'black' }}
              >
                Hủy
              </Button>
              <Button
                type='submit'
                variant='contained'
                sx={{
                  backgroundColor: 'secondary.main'
                }}
                disabled={isLoading}
              >
                Đổi mật khẩu
              </Button>
            </Box>
          </form>
        </Card>
      </div>
    </div>
  )
}

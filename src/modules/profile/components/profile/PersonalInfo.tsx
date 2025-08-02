import { useState } from 'react'
import { Box, Typography, Card, Button, Avatar, TextField, Grid } from '@mui/material'

interface UserInfo {
  fullName: string
  email: string
  phone: string
  address: string
  dateOfBirth: string
  avatar: string
}

export default function PersonalInfo() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    dateOfBirth: '1990-01-01',
    avatar: ''
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (field: keyof UserInfo) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  const handleSave = () => {
    console.log('Saving user info:', userInfo)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUserInfo((prev) => ({
          ...prev,
          avatar: reader.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className='p-4'>
      <Typography variant='h4' sx={{ mb: 3, fontWeight: 'bold' }}>
        Thông tin cá nhân
      </Typography>

      <Card sx={{ p: 4, borderRadius: 2 }}>
        {/* Avatar Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 3 }}>
          <Avatar
            src={userInfo.avatar || undefined}
            sx={{
              width: 120,
              height: 120,
              fontSize: '3rem',
              bgcolor: 'primary.main'
            }}
          >
            {userInfo.fullName
              .split(' ')
              .map((name) => name.charAt(0))
              .join('')}
          </Avatar>

          <Box>
            <Typography variant='h6' sx={{ mb: 1 }}>
              Ảnh đại diện
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              Kích thước khuyến nghị: 400x400px. Định dạng: JPG, PNG
            </Typography>

            {isEditing && (
              <Button variant='outlined' component='label' size='small'>
                Chọn ảnh
                <input type='file' hidden accept='image/*' onChange={handleAvatarChange} />
              </Button>
            )}
          </Box>
        </Box>

        {/* Form Fields */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Họ và tên'
              value={userInfo.fullName}
              onChange={handleInputChange('fullName')}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Email'
              type='email'
              value={userInfo.email}
              onChange={handleInputChange('email')}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Số điện thoại'
              value={userInfo.phone}
              onChange={handleInputChange('phone')}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Ngày sinh'
              type='date'
              value={userInfo.dateOfBirth}
              onChange={handleInputChange('dateOfBirth')}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Địa chỉ'
              multiline
              rows={3}
              value={userInfo.address}
              onChange={handleInputChange('address')}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
            />
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          {!isEditing ? (
            <Button
              variant='contained'
              onClick={() => setIsEditing(true)}
              sx={{ minWidth: 120, backgroundColor: 'secondary.main', color: 'white' }}
            >
              Chỉnh sửa
            </Button>
          ) : (
            <>
              <Button
                variant='outlined'
                onClick={handleCancel}
                sx={{ minWidth: 120, color: 'black', borderColor: 'black' }}
              >
                Hủy
              </Button>
              <Button
                variant='contained'
                onClick={handleSave}
                sx={{ minWidth: 120, backgroundColor: 'secondary.main', color: 'white' }}
              >
                Lưu thông tin
              </Button>
            </>
          )}
        </Box>
      </Card>
    </div>
  )
}

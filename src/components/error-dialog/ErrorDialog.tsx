import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  Alert,
  Slide
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />
})

export type ErrorType = 'error' | 'warning' | 'info' | 'success'

export interface ErrorDialogData {
  title?: string
  message: string
  type?: ErrorType
  details?: string
  onConfirm?: () => void
  onCancel?: () => void
  confirmText?: string
  cancelText?: string
  showCancel?: boolean
}

interface ErrorDialogProps {
  open: boolean
  data: ErrorDialogData | null
  onClose: () => void
}

const getIcon = (type: ErrorType) => {
  const iconStyle = {
    fontSize: '14px',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48
  }

  switch (type) {
    case 'error':
      return <Box sx={iconStyle}>❌</Box>
    case 'warning':
      return <Box sx={iconStyle}>⚠️</Box>
    case 'info':
      return <Box sx={iconStyle}>ℹ️</Box>
    case 'success':
      return <Box sx={iconStyle}>✅</Box>
    default:
      return <Box sx={iconStyle}>❌</Box>
  }
}

const getTitle = (type: ErrorType, customTitle?: string) => {
  if (customTitle) return customTitle

  switch (type) {
    case 'error':
      return 'Có lỗi xảy ra'
    case 'warning':
      return 'Cảnh báo'
    case 'info':
      return 'Thông tin'
    case 'success':
      return 'Thành công'
    default:
      return 'Có lỗi xảy ra'
  }
}

const getAlertSeverity = (type: ErrorType) => {
  switch (type) {
    case 'error':
      return 'error' as const
    case 'warning':
      return 'warning' as const
    case 'info':
      return 'info' as const
    case 'success':
      return 'success' as const
    default:
      return 'error' as const
  }
}

export function ErrorDialog({ open, data, onClose }: ErrorDialogProps) {
  if (!data) return null

  const {
    title,
    message,
    type = 'error',
    details,
    onConfirm,
    onCancel,
    confirmText = 'Đồng ý',
    cancelText = 'Hủy',
    showCancel = false
  } = data

  const handleConfirm = () => {
    onConfirm?.()
    onClose()
  }

  const handleCancel = () => {
    onCancel?.()
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth='sm'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          margin: 2
        }
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Box display='flex' alignItems='center' gap={2}>
            {getIcon(type)}
            <Typography variant='h6' component='div' fontWeight={600}>
              {getTitle(type, title)}
            </Typography>
          </Box>
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              color: 'grey.500'
            }}
          >
            <Typography sx={{ fontSize: '20px', lineHeight: 1 }}>✕</Typography>
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ pt: 1 }}>
        <Alert severity={getAlertSeverity(type)} sx={{ mb: 2 }}>
          <Typography variant='body1' component='div'>
            {message}
          </Typography>
        </Alert>

        {details && (
          <Box sx={{ mt: 2 }}>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
              Chi tiết lỗi:
            </Typography>
            <Box
              sx={{
                p: 2,
                backgroundColor: 'grey.50',
                borderRadius: 1,
                border: 1,
                borderColor: 'grey.200',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                maxHeight: 200,
                overflow: 'auto'
              }}
            >
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{details}</pre>
            </Box>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        {showCancel && (
          <Button onClick={handleCancel} variant='outlined' color='inherit'>
            {cancelText}
          </Button>
        )}
        <Button onClick={handleConfirm} variant='contained' color={type === 'error' ? 'error' : 'secondary'} autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

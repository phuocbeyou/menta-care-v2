import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Divider
} from '@mui/material'
import { useState } from 'react'

interface ThreadData {
  id: string
  title: string
  content: string
  user_id: string
  up_votes: string[]
  down_votes: string[]
  group_id: string
  last_updated: string
}

interface CommentModalProps {
  open: boolean
  onClose: () => void
  thread: ThreadData | null
}

export default function CommentModal({ open, onClose, thread }: CommentModalProps) {
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!comment.trim() || !thread) return

    setIsSubmitting(true)
    try {
      // TODO: Call API to submit comment
      console.log('Submitting comment:', { threadId: thread.id, comment })

      // Clear comment after successful submission
      setComment('')
      // Show success message
    } catch (error) {
      console.error('Error submitting comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setComment('')
    onClose()
  }

  if (!thread) return null

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='md'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxHeight: '80vh'
        }
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <div className='flex items-center justify-between'>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Thảo luận
          </Typography>
          <IconButton onClick={handleClose} size='small'>
            ✕
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent sx={{ pt: 1 }}>
        {/* Thread Title */}
        <Box sx={{ mb: 3 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}>
            {thread.title}
          </Typography>
          <Typography variant='body1' sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            {thread.content}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Comment Section */}
        <Box>
          <Typography variant='subtitle1' sx={{ fontWeight: 'bold', mb: 2 }}>
            📝 Chia sẻ ý kiến của bạn
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder='Nhập bình luận của bạn...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant='outlined'
            disabled={isSubmitting}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '&:hover fieldset': {
                  borderColor: 'primary.main'
                }
              }
            }}
          />

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='caption' color='text.secondary'>
              {comment.length}/500 ký tự
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant='outlined'
                onClick={handleClose}
                disabled={isSubmitting}
                sx={{ borderRadius: 999, color: 'black', borderColor: 'gray' }}
              >
                Hủy
              </Button>
              <Button
                variant='contained'
                onClick={handleSubmit}
                disabled={!comment.trim() || isSubmitting || comment.length > 500}
                sx={{ borderRadius: 999, color: 'white', backgroundColor: 'secondary.main' }}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi bình luận'}
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

import { Dialog, DialogContent, IconButton, Box, Typography, Fade } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import { isYouTubeUrl, extractYouTubeVideoId } from '@src/shared/utils/youtube-thumbnail'

export interface VideoModalProps {
  open: boolean
  onClose: () => void
  videoUrl: string
  title?: string
}

export function VideoModal({ open, onClose, videoUrl, title }: VideoModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const getEmbedUrl = (url: string): string | null => {
    if (!isYouTubeUrl(url)) {
      return null
    }

    const videoId = extractYouTubeVideoId(url)
    if (!videoId) {
      return null
    }

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`
  }

  const embedUrl = getEmbedUrl(videoUrl)

  const handleClose = () => {
    setIsLoading(true)
    setHasError(false)

    if (iframeRef.current) {
      iframeRef.current.src = 'about:blank'
    }

    onClose()
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  useEffect(() => {
    if (open) {
      setIsLoading(true)
      setHasError(false)
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  if (!embedUrl) {
    return (
      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
        <DialogContent className='text-center p-8'>
          <Typography variant='h6' className='mb-4'>
            ❌ URL không hợp lệ
          </Typography>
          <Typography color='text.secondary'>Chỉ hỗ trợ video YouTube</Typography>
          <Box className='mt-4'>
            <IconButton
              onClick={handleClose}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' }
              }}
            >
              Đóng
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='lg'
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'primary.main',
          borderRadius: 2,
          overflow: 'hidden'
        }
      }}
      TransitionComponent={Fade}
      transitionDuration={300}
    >
      {/* Header with title and close button */}
      <Box
        className='flex items-center justify-between p-4 bg-primary text-white'
        sx={{ borderBottom: '1px solid primary.main' }}
      >
        <Typography variant='h6' className='truncate flex-1 mr-4 text-black'>
          {title || 'Video Player'}
        </Typography>
        <IconButton
          onClick={handleClose}
          sx={{
            color: 'black',
            '&:hover': {
              bgcolor: 'primary.main',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.2s ease'
          }}
        >
          ✕
        </IconButton>
      </Box>

      <DialogContent className='p-0 bg-primary relative'>
        {/* Loading indicator */}
        {isLoading && (
          <Box className='absolute inset-0 flex items-center justify-center bg-black' sx={{ zIndex: 10 }}>
            <Box className='text-center text-black'>
              <Box className='mb-4'>
                <div className='w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto'></div>
              </Box>
              <Typography>Đang tải video...</Typography>
            </Box>
          </Box>
        )}

        {hasError && (
          <Box className='absolute inset-0 flex items-center justify-center bg-primary text-black' sx={{ zIndex: 10 }}>
            <Box className='text-center'>
              <Typography variant='h6' className='mb-2'>
                ⚠️ Không thể tải video
              </Typography>
              <Typography color='text.secondary' className='mb-4'>
                Vui lòng thử lại sau
              </Typography>
              <IconButton
                onClick={handleClose}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              >
                Đóng
              </IconButton>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            height: 0,
            overflow: 'hidden'
          }}
        >
          <iframe
            ref={iframeRef}
            src={embedUrl}
            title={title || 'YouTube Video'}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }}
          />
        </Box>

        <Box
          className='absolute bottom-4 right-4 bg-primary bg-opacity-70 text-black px-3 py-1 rounded text-sm'
          sx={{
            opacity: 0.7,
            transition: 'opacity 0.3s ease',
            '&:hover': { opacity: 1 }
          }}
        >
          Press ESC to close
        </Box>
      </DialogContent>
    </Dialog>
  )
}

import { useState, forwardRef, useImperativeHandle } from 'react'
import { Box, Button, Modal, Slider, Typography, IconButton } from '@mui/material'
import { getAuthToken } from '@src/stores/authHelpers'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '@src/modules/home/apis/const'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
}

export interface MoodModalRef {
  open: () => void
  close: () => void
}

interface MoodSaveReq {
  jwt_token: string
  value: number
}

interface MoodSaveRes {
  message: string
}

const MoodModal = forwardRef<MoodModalRef, { fetching: () => void }>(({ fetching }, ref) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(9)
  const [isLoading, setIsLoading] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose
  }))

  const handleSave = async () => {
    setIsLoading(true)
    await callingAPI<MoodSaveRes, MoodSaveReq>(REQUEST_TYPE.save_emotion_diary, {
      jwt_token: getAuthToken() || '',
      value: value
    })
    await fetching()
    handleClose()
    setIsLoading(false)
  }

  return (
    <div>
      <Modal closeAfterTransition={true} open={open}>
        <Box className='bg-primary' sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8
            }}
          >
            ×
          </IconButton>

          <Typography variant='h6' fontWeight='bold' mb={2}>
            Hôm nay bạn cảm thấy thế nào?
          </Typography>

          <Slider
            value={value}
            onChange={(_, newValue) => setValue(newValue as number)}
            step={1}
            marks
            min={1}
            max={10}
            valueLabelDisplay='off'
            sx={{
              color: 'secondary.main',
              '& .MuiSlider-thumb': {
                height: 20,
                width: 20,
                backgroundColor: 'black'
              }
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 0.5, mt: 1 }}>
            {Array.from({ length: 10 }, (_, i) => (
              <Typography key={i + 1} variant='body2' sx={{ fontSize: '14px', color: 'black' }}>
                {i + 1}
              </Typography>
            ))}
          </Box>

          <Button
            variant='contained'
            onClick={handleSave}
            disabled={isLoading}
            loading={isLoading}
            sx={{ mt: 2, backgroundColor: 'secondary.main' }}
          >
            Xác nhận
          </Button>
        </Box>
      </Modal>
    </div>
  )
})

MoodModal.displayName = 'MoodModal'

export default MoodModal

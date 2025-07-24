import { useState, forwardRef, useImperativeHandle } from 'react'
import { Box, Button, Modal, Slider, Typography, IconButton } from '@mui/material'

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

const MoodModal = forwardRef<MoodModalRef>((props, ref) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(9)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose
  }))

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className='bg-primary' sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#666'
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
              color: '#2e7d32',
              '& .MuiSlider-thumb': {
                height: 24,
                width: 24,
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
            onClick={() => {
              alert(`Bạn chọn mức ${value}`)
              handleClose()
            }}
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

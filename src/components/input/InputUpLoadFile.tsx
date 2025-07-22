import { Box } from '@mui/material'
import { useState, useRef } from 'react'

interface InputUpLoadFileProps {
  onFileSelect?: (file: File) => void
  accept?: string
  multiple?: boolean
  text?: string
}

export function InputUpLoadFile({
  onFileSelect,
  accept = '*',
  multiple = false,
  text = 'Click để tải lên CV của bạn'
}: InputUpLoadFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      setSelectedFile(file)
      onFileSelect?.(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Box
      onClick={handleClick}
      className='relative cursor-pointer bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-primary transition-colors duration-200'
      sx={{
        background: 'white',
        minHeight: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <input
        ref={fileInputRef}
        type='file'
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className='hidden'
      />

      <Box className='flex items-center gap-3'>
        {/* Upload Icon */}
        <Box className='flex items-center justify-center w-10 h-10 rounded-full bg-white'>
          <Box component={'img'} src={'/assets/images/expert/upload-file.png'} alt='upload' height={36} />
        </Box>

        {/* Text */}
        <div className='text-secondary text-xl font-semibold'>{selectedFile ? selectedFile.name : text}</div>

        {/* Hover effect */}
        <Box
          className='absolute inset-0 bg-green-50 opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-lg'
          sx={{ pointerEvents: 'none' }}
        />
      </Box>
    </Box>
  )
}

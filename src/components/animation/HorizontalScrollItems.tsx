// HorizontalScrollItems.tsx
'use client'

import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface HorizontalScrollItemsProps {
  children: ReactNode
  duration?: number
  gap?: number
  className?: string
  speed?: 'slow' | 'normal' | 'fast' | 'very-fast'
}

export default function HorizontalScrollItems({
  children,
  duration = 30,
  gap = 6,
  className = '',
  speed = 'normal'
}: HorizontalScrollItemsProps) {
  const getSpeedDuration = () => {
    switch (speed) {
      case 'slow':
        return duration * 1.5
      case 'fast':
        return duration * 0.7
      case 'very-fast':
        return duration * 0.4
      default:
        return duration
    }
  }
  return (
    <Box
      className={`w-full overflow-hidden py-8 ${className}`}
      sx={{
        '&:hover .scroll-content': {
          animationPlayState: 'paused'
        }
      }}
    >
      <div
        className='scroll-content flex'
        style={{
          animation: `scroll ${getSpeedDuration()}s linear infinite`,
          width: 'max-content',
          gap: `${gap * 0.25}rem`
        }}
      >
        {/* Duplicate children for seamless loop */}
        {children}
        {children}
        {children}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  )
}

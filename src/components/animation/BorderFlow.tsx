import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BorderFlowProps {
  children: ReactNode
  className?: string
  duration?: number
  color?: string
}

export function BorderFlow({ children, className = '', duration = 2, color = '#2c975e' }: BorderFlowProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Original content */}
      <div className='relative z-10'>{children}</div>

      {/* Animated border overlay */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0.6
        }}
        initial={{ x: '100%' }}
        whileInView={{ x: '-100%' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration, ease: 'linear' }}
      />
    </div>
  )
}

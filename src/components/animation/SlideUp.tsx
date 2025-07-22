import { motion } from 'framer-motion'

type Direction = 'ttb' | 'btt' | 'ltr' | 'rtl'

export function SlideUp({
  children,
  duration = 0.6,
  delay = 0,
  className,
  direction = 'btt'
}: {
  children: React.ReactNode
  duration?: number
  delay?: number
  className?: string
  direction?: Direction
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'ttb':
        return { opacity: 0, y: -40 }
      case 'ltr':
        return { opacity: 0, x: -80 }
      case 'rtl':
        return { opacity: 0, x: 40 }
      case 'btt':
      default:
        return { opacity: 0, y: 40 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case 'ttb':
      case 'btt':
        return { opacity: 1, y: 0 }
      case 'ltr':
      case 'rtl':
        return { opacity: 1, x: 0 }
    }
  }

  return (
    <motion.div
      className={`flex h-full ${className}`}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

import { motion } from 'framer-motion'

type FadeProps = {
  children: React.ReactNode
  duration?: number
  delay?: number
  className?: string
}

export function Fade({ children, duration = 0.6, delay = 0, className = '' }: FadeProps) {
  return (
    <motion.div
      className={`flex h-full ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

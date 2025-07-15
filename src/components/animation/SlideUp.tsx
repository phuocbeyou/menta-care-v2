import { motion } from 'framer-motion'

export function SlideUp({
  children,
  duration = 0.6,
  delay = 0,
  className
}: {
  children: React.ReactNode
  duration?: number
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={`flex h-full ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

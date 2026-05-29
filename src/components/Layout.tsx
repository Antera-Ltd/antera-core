import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto", className)}
    >
      {children}
    </section>
  )
}

export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children, delayChildren = 0 }: { children: React.ReactNode, delayChildren?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren
        }
      }
    }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }}
  >
    {children}
  </motion.div>
)

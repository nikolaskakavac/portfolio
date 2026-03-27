import { motion } from 'framer-motion'

void motion

const overlayTransition = {
  duration: 1.05,
  ease: [0.22, 1, 0.36, 1],
}

function Preloader() {
  return (
    <motion.div
      className="preloader-shell"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: overlayTransition }}
      aria-hidden="true"
    >
      <motion.div
        className="preloader-core"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10, scale: 0.985, filter: 'blur(2px)' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="preloader-kicker"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Building digital growth
        </motion.span>

        <motion.div
          className="preloader-wordmark"
          initial={{ letterSpacing: '-0.02em', x: 0 }}
          animate={{ letterSpacing: '-0.024em', x: 0 }}
          transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="preloader-skale"
            initial={{ opacity: 0, y: 12, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Skale
          </motion.span>

          <motion.span
            className="preloader-digitals"
            initial={{ opacity: 0, x: 16, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.72, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            Digitals
          </motion.span>
        </motion.div>

        <motion.div
          className="preloader-track"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.15, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.span
          className="preloader-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.45, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          Loading your next revenue-ready experience
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default Preloader

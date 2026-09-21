import { motion, useReducedMotion } from 'framer-motion'

void motion

const overlayTransition = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1],
}

function Preloader() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="preloader-shell"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: reduceMotion ? { duration: 0.01 } : overlayTransition }}
      aria-hidden="true"
    >
      <motion.div
        className="preloader-core"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.99 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.36, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="brand-symbol preloader-symbol" aria-hidden="true" />
        <motion.span
          className="preloader-kicker"
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          Independent software studio
        </motion.span>

        <motion.div
          className="preloader-wordmark"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.52, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="preloader-skale"
            initial={reduceMotion ? false : { opacity: 0, y: 8, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.42, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Skale
          </motion.span>

          <motion.span
            className="preloader-digitals"
            initial={reduceMotion ? false : { opacity: 0, x: 12, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Digitals
          </motion.span>
        </motion.div>

        <motion.div
          className="preloader-track"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.span
          className="preloader-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.24, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          Websites · Web apps · Business systems
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default Preloader

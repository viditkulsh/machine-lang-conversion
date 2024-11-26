import { motion, AnimatePresence } from 'framer-motion'

interface ConversionResultProps {
  result: string
}

export default function ConversionResult({ result }: ConversionResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-6"
    >
      <motion.h2
        className="text-lg font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        Result:
      </motion.h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={result}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-700 rounded-md p-3 text-lg font-mono break-all"
        >
          {result || (
            <span className="bg-white text-black p-1 rounded">
              Conversion result will appear here
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}


'use client'

import { motion } from 'framer-motion'
import ConversionForm from '../components/ConversionForm'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-screen flex-col items-center justify-center p-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Number System Converter
      </motion.h1>
      <ConversionForm />
    </motion.main>
  )
}


'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NumberInput from './NumberInput'
import ConversionResult from './ConversionResult'
import { convert } from '../lib/conversions'

const conversionTypes = [
  { value: 'bin2dec', label: 'Binary to Decimal' },
  { value: 'dec2bin', label: 'Decimal to Binary' },
  { value: 'dec2hex', label: 'Decimal to Hexadecimal' },
  { value: 'hex2dec', label: 'Hexadecimal to Decimal' },
  { value: 'dec2oct', label: 'Decimal to Octal' },
  { value: 'oct2dec', label: 'Octal to Decimal' },
]

export default function ConversionForm() {
  const [input, setInput] = useState('')
  const [conversionType, setConversionType] = useState('bin2dec')
  const [result, setResult] = useState('')

  const handleConvert = () => {
    const convertedValue = convert(input, conversionType)
    setResult(convertedValue)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <label htmlFor="conversionType" className="block text-sm font-medium mb-2">
          Conversion Type
        </label>
        <motion.select
          id="conversionType"
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600"
          whileHover={{ scale: 1.02, backgroundColor: '#4a5568' }}
          whileTap={{ scale: 0.98 }}
        >
          {conversionTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </motion.select>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={conversionType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <NumberInput
            value={input}
            onChange={setInput}
            conversionType={conversionType}
          />
        </motion.div>
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#3182ce' }}
        whileTap={{ scale: 0.95 }}
        onClick={handleConvert}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-6 transition-colors duration:200"
      >
        Convert
      </motion.button>
      <ConversionResult result={result} />
    </motion.div>
  )
}


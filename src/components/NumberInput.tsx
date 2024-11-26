import { motion } from 'framer-motion'

interface NumberInputProps {
  value: string
  onChange: (value: string) => void
  conversionType: string
}

export default function NumberInput({ value, onChange, conversionType }: NumberInputProps) {
  const getInputMode = () => {
    switch (conversionType) {
      case 'bin2dec':
        return 'numeric'
      case 'dec2bin':
      case 'dec2hex':
      case 'dec2oct':
        return 'numeric'
      case 'hex2dec':
        return 'text'
      case 'oct2dec':
        return 'numeric'
      default:
        return 'text'
    }
  }

  const getPattern = () => {
    switch (conversionType) {
      case 'bin2dec':
        return '[01]*'
      case 'dec2bin':
      case 'dec2hex':
      case 'dec2oct':
        return '[0-9]*'
      case 'hex2dec':
        return '[0-9a-fA-F]*'
      case 'oct2dec':
        return '[0-7]*'
      default:
        return '.*'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.label
        htmlFor="numberInput"
        className="block text-sm font-medium mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        Enter Number
      </motion.label>
      <motion.input
        id="numberInput"
        type="text"
        inputMode={getInputMode()}
        pattern={getPattern()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600"
        placeholder="Enter number here"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        whileHover={{ scale: 1.02, backgroundColor: '#4a5568' }}
        whileFocus={{ scale: 1.02, backgroundColor: '#4a5568' }}
      />
    </motion.div>
  )
}


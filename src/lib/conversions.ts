export function convert(input: string, conversionType: string): string {
  switch (conversionType) {
    case 'bin2dec':
      return bin2dec(input)
    case 'dec2bin':
      return dec2bin(input)
    case 'dec2hex':
      return dec2hex(input)
    case 'hex2dec':
      return hex2dec(input)
    case 'dec2oct':
      return dec2oct(input)
    case 'oct2dec':
      return oct2dec(input)
    default:
      return 'Invalid conversion type'
  }
}

function bin2dec(binary: string): string {
  if (!/^[01]+$/.test(binary)) return 'Invalid binary number'
  return parseInt(binary, 2).toString()
}

function dec2bin(decimal: string): string {
  if (!/^\d+$/.test(decimal)) return 'Invalid decimal number'
  return parseInt(decimal, 10).toString(2)
}

function dec2hex(decimal: string): string {
  if (!/^\d+$/.test(decimal)) return 'Invalid decimal number'
  return parseInt(decimal, 10).toString(16).toUpperCase()
}

function hex2dec(hex: string): string {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) return 'Invalid hexadecimal number'
  return parseInt(hex, 16).toString()
}

function dec2oct(decimal: string): string {
  if (!/^\d+$/.test(decimal)) return 'Invalid decimal number'
  return parseInt(decimal, 10).toString(8)
}

function oct2dec(octal: string): string {
  if (!/^[0-7]+$/.test(octal)) return 'Invalid octal number'
  return parseInt(octal, 8).toString()
}


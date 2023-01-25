export function generateRandomChars(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return result
}

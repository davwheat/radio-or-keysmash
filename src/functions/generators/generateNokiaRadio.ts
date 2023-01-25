import { generateRandomChars } from '../generateRandomChars'
import { randomChoice } from '../randomChoice'

export function generateNokiaRadio(): string {
  return randomChoice([generate4CharRRH, generate5CharRRH], [80, 36])()
}

function generate5CharRRH(): string {
  const firstChar = 'A'

  // random W or H
  const secondChar = randomChoice(['W', 'H'])

  const threeRandomChars = generateRandomChars(3)

  return firstChar + secondChar + threeRandomChars
}

function generate4CharRRH(): string {
  // random A or F
  const firstChar = randomChoice(['A', 'F'], [0.75, 0.25])

  // random R or H or Z or K
  const secondChar = randomChoice(['R', 'H', 'Z', 'K'], [8, 33, 28, 5])

  const twoRandomChars = generateRandomChars(2)

  return firstChar + secondChar + twoRandomChars
}

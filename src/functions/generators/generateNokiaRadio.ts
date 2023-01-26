import { generateRandomChars } from '../generateRandomChars'
import { randomChoice } from '../randomChoice'

export function generateNokiaRadio(): string {
  return randomChoice([generate4CharRRH, generate5CharRRH, generateFlexi], [80, 36, 64])()
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

function generateFlexi(): string {
  const firstChars = 'FW'

  const charCount = randomChoice([2, 3], [35, 21])
  const randomChars = generateRandomChars(charCount)

  if (charCount === 3) {
    return firstChars + '2' + randomChars.substring(0, 2) + randomChoice(['A', 'B', 'C', 'D', 'F'], [9, 6, 3, 2, 1])
  }

  const num2 = randomChoice([true, false], [10, 7])

  const useSuffix = !num2 ? '' : randomChoice([true, false], [25, 10])
  const suffix = !useSuffix ? '' : randomChoice(['WA', 'WB', 'WC', 'WD', 'WF', 'RA', 'RB'], [8, 6, 4, 3, 1, 2, 1])

  return firstChars + (num2 ? '2' : '') + randomChars + suffix
}

import nokia from '../data/nokia.json'
import { randomChoice } from './randomChoice'

const radioSets: Record<string, Record<string, string>> = {
  nokia,
}

export interface RadioSelection {
  name: string
  model: string
  type: 'nokia'
  isFake: boolean
}

export function chooseRandomRadio(): RadioSelection {
  const radioSet = randomChoice(Object.entries(radioSets))
  const radio = randomChoice(Object.entries(radioSet[1]))

  return {
    name: radio[0],
    model: radio[1],
    type: radioSet[0] as any,
    isFake: false,
  }
}

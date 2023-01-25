import { randomChoice } from './randomChoice'
import { generateNokiaRadio } from './generators/generateNokiaRadio'
import { isExistingRadio } from './isExistingRadio'

import type { RadioSelection } from './chooseRandomRadio'

const generators: Record<RadioSelection['type'], () => string> = { nokia: generateNokiaRadio }

export function generateRandomRadio(): RadioSelection {
  while (true) {
    const [type, generator] = randomChoice(Object.entries(generators))

    const radio = generator()

    if (!isExistingRadio(radio))
      return {
        model: radio,
        isFake: true,
        type: type as any,
        name: '',
      }
  }
}

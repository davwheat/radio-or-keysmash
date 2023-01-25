import { chooseRandomRadio, RadioSelection } from './chooseRandomRadio'
import { generateRandomRadio } from './generateRandomRadio'
import { randomChoice } from './randomChoice'

export function getRadioSelection(): RadioSelection {
  return randomChoice([chooseRandomRadio, generateRandomRadio])()
}

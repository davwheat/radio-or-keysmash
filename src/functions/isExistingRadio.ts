import nokia from '../data/nokia.json'

const allRadios = [...Object.values(nokia)]

export function isExistingRadio(model: string): boolean {
  return allRadios.includes(model)
}

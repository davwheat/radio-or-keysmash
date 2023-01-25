export function randomChoice<T>(arr: T[], weight?: number[]): T {
  if (!weight) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  if (arr.length !== weight.length) {
    throw new Error('Array length and weight length must be the same')
  }

  const totalWeight = weight.reduce((a, b) => a + b, 0)
  const random = Math.random() * totalWeight

  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += weight[i]
    if (random <= sum) {
      return arr[i]
    }
  }

  return arr[0]
}

function sum(a: number, b: number) {
  return a + b
}

function increment(current: number, max: number = 10) {
  if (current < max) {
    return current + 1
  }
  return current
}

export {
  sum,
  increment,
}
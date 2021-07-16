module.exports = {
  calcCircleArea: (radius) => (typeof radius === 'number' && radius > 0) ? Math.PI * radius * radius : undefined,
  doesStartWithUppercase: (sentence) => (typeof sentence === 'string' && sentence.length >= 1) ? /[A-Z]/.test(sentence) : undefined
}

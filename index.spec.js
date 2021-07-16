const { calcCircleArea, doesStartWithUppercase } = require('./index')

describe('Circle Area Calculation', () => {
  test('returns proper circle area for multiple cases', () => {
    const validCirclesPairs = [
      { radius: 0.6, area: 1.13 },
      { radius: 1, area: Math.PI },
      { radius: 3.96, area: 49.27 },
      { radius: 12.39, area: 482.08 }
    ]

    validCirclesPairs.forEach(circle => {
      expect(calcCircleArea(circle.radius)).toBeCloseTo(circle.area, 0.1)
    })
  })

  test('returns undefined when provided radius value is not a number type', () => {
    ['string', false, {key: 1}, [1]].forEach(wrongRadiusType => {
      expect(calcCircleArea(wrongRadiusType)).toBe(undefined)
    })
  })

  test('returns undefined when provided radius value is zero or smaller', () => {
    [0, -0.5, -11, -999999999999].forEach(wrongNumber => {
      expect(calcCircleArea(wrongNumber)).toBe(undefined)
    })
  })
})

describe('Determining if string starts with uppercase', () => {
  test('returns proper results for single lettter', () => {
    expect(doesStartWithUppercase('X')).toBe(true)
    expect(doesStartWithUppercase('x')).toBe(false)
  })

  test('returns proper results for single word', () => {
    expect(doesStartWithUppercase('Paweł')).toBe(true)
    expect(doesStartWithUppercase('paweł')).toBe(false)
  })

  test('returns proper results for sentences', () => {
    expect(doesStartWithUppercase('Paweł Ż****** is awesome developer')).toBe(true)
    expect(doesStartWithUppercase('and nothing else matters...')).toBe(false)
  })

  test('returns false for uppercased polish letters', () => {
    expect(doesStartWithUppercase('Żukiew')).toBe(false)
    expect(doesStartWithUppercase('Świętoszkowice')).toBe(false)
    expect(doesStartWithUppercase('Łuków')).toBe(false)
    expect(doesStartWithUppercase('Ćwikła')).toBe(false)
  })

  test('returns undefined for wrong datatypes', () => {
    [171, {some: 'key'}, [17, 15], true].forEach(wrongDatatype => {
      expect(doesStartWithUppercase(wrongDatatype)).toBe(undefined)
    })
  })

  test('returns undefined for empty string', () => {
    expect(doesStartWithUppercase('')).toBe(undefined)
  })
})

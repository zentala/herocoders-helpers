const { calcCircleArea, startsWithUppercase } = require('./index')

describe(`Circle area calculation`, () => {
  test(`returns proper circle area for multiple cases`, () => {
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

  test(`throws an Error when provided radius value is not a number type`, () => {
    ['string', false, {key: 1}, [1]].forEach(wrongRadiusType => {
      expect(() => calcCircleArea(wrongRadiusType)).toThrow(`Radius has be a type of number!`)
    })
  })

  test(`throws an Error when provided radius value isn't positive`, () => {
    [0, -0.5, -11, -999999999999].forEach(wrongNumber => {
      expect(() => calcCircleArea(wrongNumber)).toThrow(`Radius has be a positive number!`)
    })
  })
})

describe(`Determining if string starts with uppercase`, () => {
  test(`returns proper results for single lettter`, () => {
    expect(startsWithUppercase('X')).toBe(true)
    expect(startsWithUppercase('x')).toBe(false)
  })

  test(`returns proper results for single word`, () => {
    expect(startsWithUppercase('Paweł')).toBe(true)
    expect(startsWithUppercase('paweł')).toBe(false)
  })

  test(`returns proper results for sentences`, () => {
    expect(startsWithUppercase('Paweł Ż****** is awesome developer')).toBe(true)
    expect(startsWithUppercase('and nothing else matters...')).toBe(false)
  })

  test(`returns false for empty string`, () => {
    expect(startsWithUppercase('')).toBe(false)
  })

  test(`returns false for uppercased polish letters`, () => {
    ['Ćwikła', 'Łuków', 'Świętoszkowice', 'Żukiew'].forEach(polishWord => {
      expect(startsWithUppercase(polishWord)).toBe(false)
    })
  })

  test(`throws an Error for wrong datatypes`, () => {
    [171, {some: 'key'}, [17, 15], true].forEach(wrongDataType => {
      expect(() => startsWithUppercase(wrongDataType)).toThrow(`Sentence has to be a type of string!`)
    })
  })
})

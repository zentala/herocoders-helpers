module.exports = {

  calcCircleArea: (radius) => {
    if(typeof radius !== 'number') {
      throw new Error(`Radius has be a type of number!`)
    }

    if(radius <= 0) {
      throw new Error(`Radius has be a positive number!`)
    }

    return Math.PI * radius * radius
  },

  startsWithUppercase: (sentence) => {
    if (typeof sentence !== 'string') {
      throw new Error(`Sentence has to be a type of string!`)
    }

    return /[A-Z]/.test(sentence)
  }

}

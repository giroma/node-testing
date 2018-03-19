const utils = require('./utils')

it('should add 2 numbers', () => {
  let res = utils.add(33,11)

  if (res !== 44) {
    throw new Error(`Expected 44 but got ${res}`)
  }
})

it('square number', () => {
  let res = utils.square(3)

  if (res !== 16) {
    throw new Error(`Expected 16 but got ${res}`)
  }
})

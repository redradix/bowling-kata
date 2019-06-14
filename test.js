const calculateScore = require('./index')

describe('calculate score', () => {
  it('--------------------', () => {
    const input = '--------------------'
    const result = calculateScore(input)
    expect(result).toBe(0)
  })
  it('1-------------------', () => {
    const input = '1-------------------'
    const result = calculateScore(input)
    expect(result).toBe(1)
  })
})

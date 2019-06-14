const calculateScore = require('./index')

describe('calculate score', () => {
  it('--------------------', () => {
    const input = '--------------------'
    const result = calculateScore(input)
    expect(result).toBe(0)
  })
})

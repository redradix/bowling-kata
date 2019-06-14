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
  it('2-------------------', () => {
    const input = '2-------------------'
    const result = calculateScore(input)
    expect(result).toBe(2)
  })
  it('-1------------------', () => {
    const input = '-1------------------'
    const result = calculateScore(input)
    expect(result).toBe(1)
  })
  it('31------------------', () => {
    const input = '31------------------'
    const result = calculateScore(input)
    expect(result).toBe(4)
  })
  it('311-----------------', () => {
    const input = '311-----------------'
    const result = calculateScore(input)
    expect(result).toBe(5)
  })
})

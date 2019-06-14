const calculateScore = require('./index')

const samples = [
  { input: '--------------------', expected: 0 },
  { input: '1-------------------', expected: 1 },
  { input: '2-------------------', expected: 2 },
  { input: '-1------------------', expected: 1 },
  { input: '31------------------', expected: 4 },
  { input: '311-----------------', expected: 5 },
  { input: '311-5---------------', expected: 10 },
  { input: '-/------------------', expected: 10 },
  { input: '1/------------------', expected: 10 },
  { input: '1/1-----------------', expected: 12 },
  { input: 'X------------------', expected: 10 },
  { input: 'X1-----------------', expected: 12 },
  { input: 'X11----------------', expected: 14 },
  { input: 'XX----------------', expected: 30 },
  { input: 'XXX5/------------', expected: 85 }
]

describe('calculate score', () => {
  samples.forEach(sample => {
    it(sample.input, () => {
      const result = calculateScore(sample.input)
      expect(result).toBe(sample.expected)
    })
  })
})

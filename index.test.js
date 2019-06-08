const calculateScore = require('./index')

describe('calculateScore', () => {
  const SAMPLES = [
    {
      input: 'XXXXXXXXXXXX',
      expected: 300
    },
    {
      input: '9-9-9-9-9-9-9-9-9-9-',
      expected: 90
    },
    {
      input: '5/5/5/5/5/5/5/5/5/5/5',
      expected: 150
    },
    {
      input: '--------------------',
      expected: 0
    },
    {
      input: '5-------------------',
      expected: 5
    },
    {
      input: '54------------------',
      expected: 9
    },
    {
      input: '5/------------------',
      expected: 10
    },
    {
      input: '5/1-----------------',
      expected: 12
    },
    {
      input: 'X------------------',
      expected: 10
    },
    {
      input: 'XXX--------------',
      expected: 60
    },
    {
      input: 'X5-----------------',
      expected: 20
    },
    {
      input: 'X54----------------',
      expected: 28
    },
    {
      input: 'X5/----------------',
      expected: 30
    },
    {
      input: '-/------------------',
      expected: 10
    },
    {
      input: 'XX-/--------------',
      expected: 50
    },
    {
      input: '------------------X11',
      expected: 12
    },
    {
      input: '------------------4/1',
      expected: 11
    },
  ]
  SAMPLES.forEach(sample => {
    it(sample.input, () => {
      expect(calculateScore(sample.input)).toBe(sample.expected)
    })
  })
})
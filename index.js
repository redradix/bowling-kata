const rollToNumber = roll => Number(roll) || 0
const SPARE = '/'
const MAX_SCORE_PER_ROLL = 10

const isSpare = roll => roll === SPARE

const calculateScore = input => {
  const rolls = input.split('')
  return rolls.reduce((score, roll, index) => {
    const lastRollScore = rollToNumber(rolls[index - 1])
    if (isSpare(roll)) {
      return score + MAX_SCORE_PER_ROLL - lastRollScore
    }
    return score + rollToNumber(roll)
  }, 0)
}
module.exports = calculateScore

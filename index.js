const rollToNumber = (roll, prevRoll = 0) => {
  if (isSpare(roll)) return MAX_SCORE_PER_ROLL - prevRoll
  if (isStrike(roll)) return MAX_SCORE_PER_ROLL
  return Number(roll) || 0
}
const SPARE = '/'
const STRIKE = 'X'
const MAX_SCORE_PER_ROLL = 10

const isSpare = roll => roll === SPARE
const isStrike = roll => roll === STRIKE

const calculateScore = input => {
  const rolls = input.split('')
  return rolls.reduce((score, roll, index) => {
    const prevRollScore = rollToNumber(rolls[index - 1])
    const nextRollScore = rollToNumber(rolls[index + 1])
    const nextTwoRollsScore =
      rollToNumber(rolls[index + 2], nextRollScore) + nextRollScore
    if (isStrike(roll)) {
      return score + MAX_SCORE_PER_ROLL + nextTwoRollsScore
    }
    if (isSpare(roll)) {
      return score + MAX_SCORE_PER_ROLL - prevRollScore + nextRollScore
    }
    return score + rollToNumber(roll)
  }, 0)
}
module.exports = calculateScore

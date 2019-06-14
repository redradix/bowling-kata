const rollToNumber = roll => Number(roll) || 0

const calculateScore = input => {
  const rolls = input.split('')
  return rolls.reduce((sum, roll) => sum + rollToNumber(roll), 0)
}
module.exports = calculateScore

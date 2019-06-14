const rollToNumber = roll => Number(roll) || 0

const calculateScore = input => {
  const rolls = input.split('')
  return rolls.reduce((sum, roll, index) => {
    const lastRollScore = rollToNumber(rolls[index - 1])
    if (roll === '/') roll = 10 - lastRollScore
    return sum + rollToNumber(roll)
  }, 0)
}
module.exports = calculateScore

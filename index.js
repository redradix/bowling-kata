const rollToNumber = roll => Number(roll) || 0

const calculateScore = input => {
  const score =
    rollToNumber(input[0]) +
    rollToNumber(input[1]) +
    rollToNumber(input[2]) +
    rollToNumber(input[4])
  return score
}
module.exports = calculateScore

const calculateScore = input => {
  if (input.startsWith('1')) return 1
  if (input.startsWith('2')) return 2
  if (input[1] === '1') return 1
  return 0
}
module.exports = calculateScore

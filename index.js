const computeRoll = (rolls, i) => {
  switch (rolls[i]) {
    case 'X': return rollScore(rolls, i) + rollScore(rolls, i + 1) + rollScore(rolls, i + 2)
    case '/': return rollScore(rolls, i) + rollScore(rolls, i + 1)
    default:  return rollScore(rolls, i)
  }
}

module.exports = function calculateScore(input) {
  const rolls = [...input]
  const frameScores = Array(10).fill(undefined)
  let frameIndex = 0

  for(let i = 0; i < rolls.length && frameIndex < 10; i++) {
    const partialFrameScore = frameScores[frameIndex] || 0
    const isSecondRollInFrame = frameScores[frameIndex] !== undefined
    frameScores[frameIndex] = partialFrameScore + computeRoll(rolls, i)

    const roll = rolls[i]
    if (roll === 'X' || roll === '/' || isSecondRollInFrame) {
      frameIndex++
    }
  }

  return frameScores.reduce((a, b) => a + b, 0)
}

const rollScore = (rolls, index) => {
  const roll = rolls[index]
  const prevRoll = rolls[index - 1]
  const numberScore = Number(roll) 

  if (!isNaN(numberScore)) {
    return numberScore
  } else if (roll === 'X') {
    return 10
  } else if (roll === '/') {
    return 10 - (Number(prevRoll) || 0)
  } else {
    return 0
  }
}
 
const sumOfSpiralDiagonals = sideLength => {
  let layers = (sideLength-1)/2
  let sum = 1
  let current = 1
  for(layer = 1; layer <= layers; layer++){
    sum += 4*(current + 5*layer)
    current += 8*layer
  }
  return sum
}

console.log(sumOfSpiralDiagonals(1001)) //669171001

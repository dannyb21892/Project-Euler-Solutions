const abundantNumberGenerator = () => {
  let abundants = []
  for(let i = 2; i < 28124; i++){
    let divisorSum = 1
    for(let j = 2; j <= Math.sqrt(i); j++){
      if(i%j === 0){
        divisorSum = divisorSum + j + (i/j != j ? i/j : 0)
      }
    }
    if(divisorSum > i){abundants.push(i)}
  }
  return abundants
}

const nonAbundantSumIntegers = () => {
  let sum = (12+1)*12/2 //sum of first numbers
  let abundants = abundantNumberGenerator()
  for(let i = 1; i < 28124; i++){
    let j = 0
    while(i > abundants[j] && j < abundants.length){
      if(abundants.includes(i - abundants[j])){
        break
      }
      j++
      if(j === abundants.length || abundants[j] >= i){
        sum += i
        console.log(i)
      }
    }
  }
  return sum
}

console.log(nonAbundantSumIntegers()) //4179871

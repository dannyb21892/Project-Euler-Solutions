const amicableNumberSum = limit => {
  let divisorSums = [0,0] //padding so indexes line up with the numbers they represent
  for(let i = 2; i < 10000; i++){
    let divisorSum = 1
    for(let j = 2; j <= Math.sqrt(i); j++){
      if(i%j === 0){
        divisorSum = divisorSum + j + i/j
      }
    }
    divisorSums[i] = divisorSum
  }
  let amicableSum = 0
  for(let i = 2; i < 10000; i++){
    if(divisorSums[divisorSums[i]] && divisorSums[divisorSums[i]] === i && divisorSums[i] != i){
      amicableSum += i
    }
  }
  return amicableSum
}

console.log(amicableNumberSum(10000)) //31626

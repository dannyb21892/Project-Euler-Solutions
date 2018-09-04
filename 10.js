const isPrime = n => {
  if(n===2){return true}
  else{
    let prime = true
    for(let i = 3; i <= Math.sqrt(n); i += 2){
      if(n%i === 0){
        prime = false
      }
    }
    return prime
  }
}

const sumOfPrimes = limit => {
  let sum = 0
  if(limit >= 1){sum = 2}
  for(let i = 3; i <= limit; i += 2){
    if(isPrime(i)){
      sum += i
    }
  }
  return sum
}

console.log(sumOfPrimes(2000000)) //142913828922

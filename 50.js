const isPrime = test => {
  if(test === 2){return true}
  else if (test < 2) {return false}
  else if(test % 2 === 0 || test < 2){return false}
  else{
    for(let i = 3; i <= Math.sqrt(test); i = i+2){
      if(test % i === 0){
        return false
      }
    }
    return true
  }
}

const primeGenerator = limit => {
  let primelist = [2]
  for(let i = 3; i < limit; i = i + 2){
    isPrime(i) ? primelist.push(i) : null
  }
  return primelist
}

const consecutivePrimeSum = limit => {
  let primes = primeGenerator(limit)

  let startchunk = primes.length
  let highest = primes[primes.length - 1]

  for(let chunk = startchunk; chunk > 1; chunk--){
    console.log(chunk)
    for(let start = 0; start <= primes.length - chunk; start++){
      let sum = primes.slice(start, start+chunk).reduce((a,b)=>a+b)
      if(sum > highest){
        break
      } else if(primes.includes(sum)) {
        return sum
      }
    }
  }
}

console.log(consecutivePrimeSum(1000000))

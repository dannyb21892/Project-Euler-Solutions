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

const goldbachsOtherConjecture = () => {
  let primes = [2]
  let success = true
  let output = 0
  for(let odd = 3; success; odd = odd+2){
    if(isPrime(odd)){
      primes.push(odd)
    } else {
      primes.forEach(prime => {
        if(Math.sqrt((odd-prime)/2) === Math.floor(Math.sqrt((odd-prime)/2))){
          success = false
        }
      })
      if(success){
        output = odd
        break
      } else {
        success = true
      }
    }
  }
  return output
}

console.log(goldbachsOtherConjecture()) //5777

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

const rightTruncatable = input => {
  let output = true
  while(input > 10){
    input = Math.floor(input/10)
    if(!isPrime(input)){
      output = false
      break
    }
  }
  return output
}

const leftTruncatable = input => {
  let output = true
  while(input > 10){
    let power = Math.floor(Math.log10(input))
    input = input - Math.pow(10, power)*Math.floor(input/Math.pow(10, power))
    if(!isPrime(input)){
      output = false
      break
    }
  }
  return output
}

const truncatable = input => {
  if(input < 10){
    return false
  }
  else if(isPrime(input) && leftTruncatable(input) && rightTruncatable(input)){
    return true
  } else {
    return false
  }
}

const truncatablePrimes = (primes) => {
  let nextPrimes = primes[0]
  let truncatables = primes[1]
  if(truncatables.length === 11){
    return truncatables.reduce((a,b)=>a+b)
  } else {
    let addableDigits = [1,3,5,7,9]
    primes[0].forEach(p1 => {
      addableDigits.forEach(p2 =>{
        let rightTest = 10*p1 + p2
        let leftTest = (Math.pow(10, Math.floor(Math.log10(p1))+1))*p2 + p1
        if(!nextPrimes.includes(rightTest) && isPrime(rightTest)){
          nextPrimes.push(rightTest)
          if(!truncatables.includes(rightTest) && truncatable(rightTest)){
            truncatables.push(rightTest)
          }
        }
        if(!nextPrimes.includes(leftTest) && isPrime(leftTest)){
          nextPrimes.push(leftTest)
          if(!truncatables.includes(leftTest) && truncatable(leftTest)){
            truncatables.push(leftTest)
          }
        }
      })
    })
    console.log([nextPrimes,truncatables])
    return truncatablePrimes([nextPrimes,truncatables])
  }
}

console.log(truncatablePrimes([[2,3,5,7],[]])) //748317

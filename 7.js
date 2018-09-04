const nthPrime = n => {
  let output = 2
  if(n===1){return output}
  else{
    let count = 1
    let current = 3
    while(count < n){
      let prime = true
      for(let i = 3; i <= Math.sqrt(current); i += 2){
        if(current%i === 0){
          prime = false
          break
        }
      }
      if(prime){
        output = current
        count++
      }
      current += 2
    }
    return output
  }
}

console.log(nthPrime(10001)) //104743

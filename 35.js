const isPrime = test => {
  if(test === 2){return true}
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

const circularPrimesBelow = limit => {
  let count = 0
  for(let i = 2; i < limit; i++){
    let number = i
    let circular = true
    if(isPrime(number)){
      let digits = i.toString().split("")
      for(let rotations = 0; rotations < digits.length-1; rotations++){
        digits.push(digits.shift())
        if(!isPrime(Number(digits.join("")))){
          circular = false
          break
        }
      }
      if(circular){
        count += 1
      }
    }
  }
  return count
}

console.log(circularPrimesBelow(1000000)) //55

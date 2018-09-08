const isPrime = test => {
  if(test === 2){return true}
  else if(test % 2 === 0 || test < 2){return false}
  else{
    for(let i = 3; i < Math.sqrt(test); i = i+2){
      if(test % i === 0){
        return false
      }
    }
    return true
  }
}

const longestQuadraticPrimes = (limita, limitb) => {
  let answer = [0, 0, 0]
  for(let a = -1*limita+1; a < limita; a++){
    for(let b = -1*limitb; b <= limitb; b++){
      let length = 0
      let i = 0
      while(isPrime(i*i + a*i + b)){
        length += 1
        i += 1
      }
      if(length > answer[0]){
        answer = [length, a, b]
        console.log(answer)
      }
    }
  }
  return answer[1]*answer[2]
}

console.log(longestQuadraticPrimes(1000,1000)) //-59231

const primeFactors = n => {
  output = {}
  while (n%2 === 0) {
      if(!output[2]){
        output[2] = 0
      }
      n = n/2;
      output[2] += 1
  }

  for (let i = 3; i <= Math.sqrt(n); i = i+2) {
    while (n%i === 0){
      if(!output[i]){
        output[i] = 0
      }
      n = n/i;
      output[i] += 1
    }
  }
  if (n > 2){
    output[n] = 1
  }
  return output //{factor: frequency}
}

const consecutivePrimeFactors = howMany => {
  let test = 1
  let done = false
  while(!done){
    test++
    if(Object.keys(primeFactors(test)).length === howMany){
      let possiblydone = true
      for(let offset = 1; offset <= howMany - 1; offset++){
        if(Object.keys(primeFactors(test+offset)).length != howMany){
          possiblydone = false
          break
        }
      }
      done = possiblydone
    }
  }
  return test
}

console.log(consecutivePrimeFactors(4)) //134043

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

const digitCancellingFractions = () => {
  let product = [1,1]
  for(let numerator = 10; numerator <= 98; numerator++){
    let ndigits = numerator.toString().split("").map(digit => Number(digit))
    for(let denominator = numerator+1; denominator <= 99; denominator++){
      let ddigits = denominator.toString().split("").map(digit => Number(digit))
      if(ddigits.includes(ndigits[0]) || ddigits.includes(ndigits[1]) && ndigits[1] != 0){
        if(numerator / denominator === ndigits.filter(digit => !ddigits.includes(digit))[0] / ddigits.filter(digit => !ndigits.includes(digit))[0]){
          product[0] = product[0]*numerator
          product[1] = product[1]*denominator
          console.log(numerator, denominator)
        }
      }
    }
  }
  let nfactors = primeFactors(product[0])
  let dfactors = primeFactors(product[1])
  let output = 1
  Object.keys(dfactors).forEach(key => {
    if(nfactors[key] && nfactors[key] >= dfactors[key]){
      nfactors[key] = nfactors[key] - dfactors[key]
      dfactors[key] = 0
    } else if (nfactors[key] && nfactors[key] <= dfactors[key]) {
      dfactors[key] = dfactors[key] - nfactors[key]
      nfactors[key] = 0
    }
    output = output * Math.pow(key, dfactors[key])
  })
  return output
}

console.log(digitCancellingFractions()) // 100

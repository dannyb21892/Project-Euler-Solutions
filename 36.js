const decToBin = n => {
  let digits = Math.floor(Math.log(n) / Math.log(2)) + 1
  let output = []
  for(let digit = digits-1; digit >= 0; digit--){
    if(n >= Math.pow(2, digit)){
      output.push(1)
      n = n - Math.pow(2, digit)
    } else {
      output.push(0)
    }
  }
  return output
}

const doubleBasePalindromes = limit => {
  let sum = 0
  for(let i = 1; i < limit; i++){
    let digits = i.toString().split("")
    let binary = decToBin(i)
    if(digits.join("") === digits.reverse().join("") && binary.join("") === binary.reverse().join("")){
      sum += i
    }
  }
  return sum
}

console.log(doubleBasePalindromes(1000000)) //872187

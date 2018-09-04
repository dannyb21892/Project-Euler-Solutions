const largestPrimeFactor = (number) => {
  let output = 1
  let original = number
  while(number%2 === 0) {
    output = 2
    number = number / 2
  }
  for(let i = 3; i <= Math.sqrt(original); i=i+2){
    while(number%i === 0 ){
      output = i
      number = number / i
    }
  }
  return output
}

console.log(largestPrimeFactor(600851475143)) //6857

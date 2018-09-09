const factorial = n => {
  let output = 1
  for(let i = 2; i <= n; i++){
    output = output*i
  }
  return output
}

const digitFactorials = () => {
  let sum = 0
  for(let i = 10; i < 10000000; i++){
    let check = 0
    let digits = i.toString().split("").map(digit => Number(digit))
    digits.forEach(digit => check += factorial(digit))
    if(check === i){sum += i}
  }
  return sum
}

console.log(digitFactorials()) // 40730

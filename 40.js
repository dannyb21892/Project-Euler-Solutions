const champernownesConstant = limit => {
  let numberOfXDigitNumbers = [0,9] //0th index is number of 0 digit numbers, 1st index is number of 1 digit numbers...
  let output = []
  for(let i = 0; i <= limit; i++){
    let nthDigit = Math.pow(10, i)
    numberOfXDigitNumbers[i+1] = Math.pow(10, i+1) - Math.pow(10,i)
    let digitCount = 0
    let digits = 1
    while(nthDigit > digitCount + digits * numberOfXDigitNumbers[digits]){
      digitCount += digits * numberOfXDigitNumbers[digits]
      digits += 1
    }
    let difference = nthDigit - digitCount
    let numberoffset = Math.ceil(difference / digits)-1
    let digitoffset = digits === 1 ? difference % digits : (difference % digits) - 1
    let targetNumber = Math.pow(10, digits-1) + numberoffset
    console.log(nthDigit, digitCount, difference, numberoffset, digitoffset, targetNumber)
    targetNumber = targetNumber.toString().split("")
    let targetDigit = targetNumber[digitoffset]
    output.push(Number(targetDigit))
  }
  return [output, output.reduce((a,b)=>a*b)]
}

console.log(champernownesConstant(6)) // 210

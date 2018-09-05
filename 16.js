const sumOfPowerDigits = (base, exp) => {
  let digits = [1]
  let count = 0
  while(count < exp){
    let carry = 0
    for(let i = digits.length - 1; i >= 0; i--){
      let product = digits[i]*base + carry
      digits[i] = product%10
      carry = Math.floor(product/10)
      if(i===0 && carry > 0){
        digits.unshift(carry)
      }
    }
    count += 1
  }
  return digits.reduce((a,b)=>a+b)
}

console.log(sumOfPowerDigits(2,1000)) // 1366

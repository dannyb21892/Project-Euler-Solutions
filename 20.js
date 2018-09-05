const factorialDigitSum = input => {
  let product = input.toString().split("").map(el => Number(el))
  let current = input-1
  while(current > 1){
    let multiplier = current.toString().split("").map(el => Number(el))
    let sums = []
    for(let i=multiplier.length-1; i>=0; i--){
      let carry = 0
      let sum = Array(multiplier.length-1-i).fill(0)
      for(let j=product.length-1; j>=0; j--){
        let tempProduct = (multiplier[i]*product[j] + carry).toString().split("").map(el => Number(el))
        sum.unshift(tempProduct.reverse()[0])
        carry = tempProduct[1] ? tempProduct[1] : 0
      }
      if(carry > 0){sum.unshift(carry)}
      sums.unshift(sum)
    }
    if(sums.length === 2){
      while(sums[0].length > sums[1].length){
        sums[1].unshift(0)
      }
      let answer = []
      let carry = 0
      for(let i = sums[1].length-1; i>=0; i--){
        let tempSum = (sums[1][i] + sums[0][i] + carry).toString().split("").map(el => Number(el))
        answer.unshift(tempSum.reverse()[0])
        carry = tempSum[1] ? tempSum[1] : 0
      }
      if(carry > 0){answer.unshift(carry)}
      product = answer
    } else {
      product = sums[0]
    }
    current = current - 1
  }
  return product.reduce((a,b) => a+b)
}

console.log(factorialDigitSum(100)) //648

const digitwiseAdder = (a,b) => { //(bigger, smaller)
  b = [...Array(a.length - b.length).fill(0), ...b] //padding extra zeros to the front of the smaller number for ez digitwise addition

  let answer = []
  let carry = 0

  for(let i = a.length-1; i>=0; i--){
    let tempSum = (a[i] + b[i] + carry).toString().split("").map(el => Number(el))
    answer.unshift(tempSum.reverse()[0])
    carry = tempSum[1] ? tempSum[1] : 0
  }
  if(carry > 0){
    answer.unshift(carry)
  }

  return answer
}

const firstFibonacciWithNDigits = n => {
  if(n === 1){
    return 1
  } else {
    let f1 = [1]
    let f2 = [1]
    let index = 2
    while(f2.length < n){
      let tempf2 = f2
      f2 = digitwiseAdder(f2, f1)
      f1 = tempf2
      index += 1
    }
    return index
  }
}

console.log(firstFibonacciWithNDigits(1000))//4782

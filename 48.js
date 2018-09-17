const digitwiseExponentiator = (base, exp) => {
  let answer = [1]
  for(let i = 1; i <= exp; i++){

    answer = digitwiseMultiplier(answer,base)
  }
  return answer

}

const digitwiseMultiplier = (a, b) => {
  if(b.length > a.length){//a is bigger than b
    let tempb = b
    b = a
    a = tempb
  }

  let answer = []

  for(let i = b.length-1; i>=0; i--){
    let addend = Array(b.length-1-i).fill(0)
    let carry = 0
    for(let j = a.length-1; j>=0; j--){
      let tempProduct = a[j]*b[i] + carry
      carry = Math.floor(tempProduct/10)
      addend.unshift(tempProduct % 10)
    }
    carry > 0 ? addend.unshift(carry) : null
    answer = digitwiseAdder(answer, addend)
  }

  return answer
}

const digitwiseAdder = (a,b) => {
  if(b.length > a.length){
    let tempb = b
    b = a
    a = tempb
  }
  b = [...Array(a.length - b.length).fill(0), ...b] //padding extra zeros to the front of the smaller number for ez digitwise addition

  let answer = []
  let carry = 0

  for(let i = a.length-1; i>=0; i--){
    let tempSum = a[i] + b[i] + carry
    answer.unshift(tempSum % 10)
    carry = Math.floor(tempSum / 10)
  }
  if(carry > 0){
    answer.unshift(carry)
  }

  return answer
}

const selfPowers = limit => {
  let sum = [0]
  for(let base = 1; base <= limit; base++){
    console.log(base)
    let basearray = []
    let tempbase = base
    let baselength = Math.floor(Math.log10(base))
    while (tempbase > 0) {
      basearray.unshift(tempbase % 10)
      tempbase = Math.floor(tempbase / 10)
    }
    sum = digitwiseAdder(digitwiseExponentiator(basearray,base), sum)
  }
  return sum.slice(sum.length-10).join("")
}
//console.log(digitwiseMultiplier(digitwiseExponentiator(103,77), [1,0,3]).join("") === digitwiseExponentiator(103,78).join(""))
//console.log(digitwiseExponentiator(103,77).join("").length)
console.log(selfPowers(1000))

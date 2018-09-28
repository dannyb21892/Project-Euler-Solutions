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
    let tempSum = Number(a[i]) + Number(b[i]) + Number(carry)
    answer.unshift(tempSum % 10)
    carry = Math.floor(tempSum / 10)
  }
  if(carry > 0){
    answer.unshift(carry)
  }
  return answer
}

const lychrels = () => {
  let count = 0
  for(let i = 0; i < 10000; i++){
    let a = i.toString().split("")
    let rev = [...a].reverse()
    let tests = 0

    while(tests < 50){
      tests++
      a = digitwiseAdder(a, rev)
      rev = [...a].reverse()
      if(a.join("") === rev.join("")){
        break
      }
      else if(tests === 50){
        count++
        console.log(i)
        break
      }
    }
  }

  return count
}

console.log(lychrels())

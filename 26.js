const longestRepeatDecimal = limit => {
  let longest = [0,0] //length, denominator
  for(let i = 2; i < limit; i++){
    divisors = []
    let numer = 1
    let denom = i
    while(true){
      numer = numer*10
      let quotient = Math.floor(numer / denom)
      numer = numer - (quotient * denom)
      if(divisors.includes(numer)){
        divisors.push(numer)
        break
      }else{
        divisors.push(numer)
      }
    }
    let length = divisors.length - 1 - divisors.findIndex(e => e === divisors[divisors.length-1])
    if(longest[0] < length){
      longest = [length, i]
    }
  }
  return longest
}

console.log(longestRepeatDecimal(1000)) //[982, 983]

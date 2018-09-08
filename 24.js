const factorial = input => {
  if(input === 0){
    return 1
  } else {
    let product = input
    while(input > 1){
      input = input - 1
      product = product * input
    }
    return product
  }
}

const nthLexicographicPermutation = (sequence, n) => {
  if(n > factorial(sequence.length)){
    return undefined
  }
  let output = []
  let remainingSequence = sequence
  n=n-1
  for(let i=sequence.length-1; i>=0; i--){
    let f = factorial(i)
    let digit = Math.floor(n/f)
    output.push(remainingSequence[digit])
    n = n - digit*f
    remainingSequence = [...remainingSequence.slice(0,digit), ...remainingSequence.slice(digit+1)]
  }
  return output
}

console.log(nthLexicographicPermutation([0,1,2,3,4,5,6,7,8,9], 1000000)) //[ 2, 7, 8, 3, 9, 1, 5, 4, 6, 0 ]

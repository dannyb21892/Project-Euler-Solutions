const differenceOfSumOfSquaresAndSquareOfSum = limit => {
  let sumOfSquares = 1
  for(let i=2; i<=limit; i++){
    sumOfSquares += i*i
  }
  let sum = limit*(limit+1)/2
  let squareOfSum = sum*sum

  return squareOfSum - sumOfSquares
}

console.log(differenceOfSumOfSquaresAndSquareOfSum(100)) //25164150

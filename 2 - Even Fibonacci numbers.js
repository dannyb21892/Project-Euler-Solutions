const sumOfEvenFibonnacis = (limit) => {
  let sum = 0
  let fib1 = 1
  let fib2 = 2
  while (fib2 < limit) {
    if(fib2 % 2 === 0) {
      sum += fib2
    }
    fib2 = fib1 + fib2
    fib1 = fib2 - fib1
  }
  return sum
}

console.log(sumOfEvenFibonnacis(4000000)) //4613732

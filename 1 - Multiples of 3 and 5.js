const sumOfMultiples = (limit, num1, num2) => {
  let sum = 0
  for(let i=1; i<limit; i++){
    if(i%num1 === 0 || i%num2 === 0) {
      sum += i
    }
  }
  return sum
}

console.log(sumOfMultiples(1000,3,5))

const firstTriangleNumberWithOverNDivisors = n => {
  let nth = 0
  let nthTriangle = 0
  let divisors = 0
  while(divisors <= 500){
    nth++
    divisors = 0
    nthTriangle += nth
    if(nthTriangle > 500) {
      for(let i = 1; i <= Math.sqrt(nthTriangle); i++){
        if(nthTriangle%i === 0){
          divisors++
        }
      }
    }
    divisors = divisors*2
  }
  return nthTriangle
}

console.log(firstTriangleNumberWithOverNDivisors(500)) //76576500

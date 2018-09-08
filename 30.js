const digitNthPowerSums = n => {
  let sum = 0
  for(let i = 10; i <= n*Math.pow(9,n); i++){
    if(i === i.toString().split("").map(el => Math.pow(Number(el),n)).reduce((a,b)=>a+b)){
      sum += i
    }
  }
  return sum
}

console.log(digitNthPowerSums(5)) //443839

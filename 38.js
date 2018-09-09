const pandigitalMultiples = () => {
  let largest = 0
  for(let i = 1; i < 10000; i++){
    let digits = []
    let multiplier = 0
    while(digits.length < 9){
      multiplier++
      digits = [...digits, ...(i*multiplier).toString().split("")]
    }
    let number = Number(digits.join(""))
    if(number > largest && digits.sort().join("") === "123456789"){
      largest = number
      console.log(i, multiplier, number)
    }
  }
  return largest
}

console.log(pandigitalMultiples()) //932718654

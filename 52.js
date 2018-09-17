const permutedMultiples = multiples => {
  let done = false
  let power = 0
  let output
  while(!done){
    power++
    console.log(power)
    for(let x = Math.pow(10,power); x < Math.pow(10,power+1)/6; x++){
      let a = x.toString().split("").sort().join("")
      let success = true
      for(let m = 2; m <= multiples; m++){
        if((x*m).toString().split("").sort().join("") != a){
          success = false
          break
        }
      }
      if(success){
        done = true
        output = x
      }
    }
  }
  return output
}

console.log(permutedMultiples(6))

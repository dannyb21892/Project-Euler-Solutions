const evenlyDivisibleUpTo = limit => {
  let output = 0

  let start = limit*(limit-1)

  while(output === 0){
    let currentTest = limit-2
    while(start%currentTest === 0 && currentTest > 1){
      currentTest--
    }
    if(currentTest === 1){
      output = start
    }
    start = start + (limit*(limit-1))
  }

  return output
}

console.log(evenlyDivisibleUpTo(20)) //232792560

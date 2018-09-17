const isPrime = test => {
  if(test === 2){return true}
  else if (test < 2) {return false}
  else if(test % 2 === 0 || test < 2){return false}
  else{
    for(let i = 3; i <= Math.sqrt(test); i = i+2){
      if(test % i === 0){
        return false
      }
    }
    return true
  }
}

const permutations = list => {
  let output = []
  if(list.length === 2){return [list,[list[1], list[0]]]}
  else {
    list.forEach(digit => {
      let index = list.findIndex(el => el === digit)
      let results = permutations([...list.slice(0,index), ...list.slice(index+1)])
      results.forEach(result => output.push([digit, ...result]))
    })
    return output
  }
}

const primePermutations = () => {
  let output = ""
  for(let i = 1001; i < 10000; i = i + 2){
    if(i != 1487 && isPrime(i)){
      let a = i.toString().split("")
      let perms = permutations(a)
      perms = perms.map(p => Number(p.join(""))).filter(p => p > i)
      perms.forEach(p => {
        if(isPrime(p)){
          let third = p + p - i
          if(perms.includes(third) && isPrime(third)){
            output = i.toString()+p.toString()+third.toString()
          }
        }
      })
    }
    if(output != ""){break}
  }
  return output
}

console.log(primePermutations())

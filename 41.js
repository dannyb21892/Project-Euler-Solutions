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
  else{
    list.forEach(digit => {
      let results = permutations(list.filter(e => e != digit))
      results.forEach(result => output.push([digit, ...result]))
    })
    return output
  }
}

const pandigitalPrimes = () => {
  let digits = [1,2,3]
  let greatest = 0
  for(let i = 4; i < 10; i++){
    digits.push(i)
    let perms = permutations(digits)
    perms.forEach(perm => {
      perm = Number(perm.join(""))
      if(perm > greatest && isPrime(perm)){
        greatest = perm
      }
    })
  }
  return greatest
}

console.log(pandigitalPrimes())

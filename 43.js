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

const substringDivisibility = () => {
  let perms = permutations([0,1,2,3,4,5,6,7,8,9])
  let primes = [2,3,5,7,11,13,17]
  let sum = 0
  perms.forEach(perm => {
    let divisible = true
    for(let i = 0; i < 7; i++){
      if(Number(perm.slice(i+1,i+4).join("")) % primes[i] != 0){
        divisible = false
      }
    }
    if(divisible){
      sum += Number(perm.join(""))
    }
  })
  return sum
}

console.log(substringDivisibility()) //16695334890

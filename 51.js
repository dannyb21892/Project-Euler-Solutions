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

const combinations = str => {
  var fn = function(active, rest, a) {
      if (active.length === 0 && rest.length === 0) {
        return;
      }
      if (rest.length === 0) {
        a.push(active);
      } else {
        fn([...active, rest[0]], rest.slice(1), a);
        fn(active, rest.slice(1), a);
      }
      return a;
  }
  return fn([], str, []);
}

const primeDigitReplacements = familysize => {
  let test = 9
  let done = false
  let options = [0,1,2,3,4,5,6,7,8,9]
  while(!done){
    test += 2
    if(isPrime(test)){
      let a = test.toString().split("")
      let indexes = combinations(a.map((e,i)=>i)).filter(e => e.length < a.length)
      indexes.forEach(attempt => {
        let tempfamily = []
        let aCopy = [...a]
        options.forEach(digit => {
          if(!(digit === 0 && attempt.includes(0))){
            attempt.forEach(index => {
              aCopy[index] = digit
            })
            let familytest = Number(aCopy.join(""))
            if(isPrime(familytest)) {
              tempfamily.push(familytest)
            }
          }
        })
        if(tempfamily.length === familysize && tempfamily.includes(test)){
          done = true
          console.log(attempt,tempfamily)
        }
      })
    }
  }
  return test
}

console.log(primeDigitReplacements(8))

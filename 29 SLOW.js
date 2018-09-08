const primeFactors = n => {
  output = {}
  while (n%2 === 0) {
      if(!output[2]){
        output[2] = 0
      }
      n = n/2;
      output[2] += 1
  }

  for (let i = 3; i <= Math.sqrt(n); i = i+2) {
    while (n%i === 0){
      if(!output[i]){
        output[i] = 0
      }
      n = n/i;
      output[i] += 1
    }
  }
  if (n > 2){
    output[n] = 1
  }
  return output //{factor: frequency}
}

const objectEquivalence = (obj1, obj2) => { //tests for same key value pairs
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)

  let output = true
  if(keys1.length != keys2.length){
    return false
  } else {
    keys1.forEach(key => {
      if(obj1[key] != obj2[key]){
        output = false
      }
    })
    return output
  }
}

const objectProportionality = (obj1, obj2) => { //tests for same keys, proportional values. ex{a: 5, b: 8} is proportional to {a: 10, b: 16} with factor 2
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)

  if(keys1.length != keys2.length){
    return 0
  } else {
    let proportion = 0
    let proportional = true
    keys1.forEach(key => {
      if(proportion === 0){
        proportion = obj1[key] / obj2[key]
      }
      else if(obj1[key] / obj2[key] != proportion){
        proportional = false
      }
    })
    return proportional ? proportion : 0
  }
}

const distinctPowers = limit => {
  let allFactors = []
  for(let a = 2; a <= limit; a++){
    allFactors[a-2] = []
    console.log(a)
    for(let b = 2; b <= limit; b++){
      let tempFactors = primeFactors(a)
      Object.keys(tempFactors).forEach(key => tempFactors[key] = tempFactors[key]*b)
      let shouldBeAdded = true
      for(let base = 2; base < a; base++){
        for(let exp = 0; exp < allFactors[base-2].length; exp++){
          if(objectEquivalence(allFactors[base-2][exp], tempFactors)){
            shouldBeAdded = false
          }
        }
      }
      if(shouldBeAdded){
        allFactors[a-2].push(tempFactors)
      }
    }
  }
  let sequenceLength = 0
  allFactors.forEach(baseSet => sequenceLength += baseSet.length)

  return sequenceLength
}
console.log(distinctPowers(100)) //9183

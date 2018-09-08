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

const pandigitalProducts = list => {
  let perms = permutations(list)
  let products = []
  perms.forEach(perm => {
    let add = false
    let product = Number(perm.slice(5).join(""))
    for(let i = 1; i < 5; i++){
      let mult1 = Number(perm.slice(0,i).join(""))
      let mult2 = Number(perm.slice(i,5).join(""))
      if(mult1 * mult2 === product){
        add = true
      }
    }
    if(add && !products.includes(product)){
      products.push(product)
    }
  })
  return products.reduce((a,b)=>a+b)
}

console.log(pandigitalProducts([1,2,3,4,5,6,7,8,9])) //45228

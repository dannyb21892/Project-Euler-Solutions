const integerRightTriangles = limit => {
  let max = [0, 0]
  for(let p = 12; p < limit; p++){
    let pcount = 0
    for(let a = 1; a < p/3; a++){
      for(let b = a+1; b < p/2; b++){
        let c = p - a - b
        if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
          pcount += 1
        }
      }
    }
    if(pcount > max[0]){
      max = [pcount, p]
    }
  }
  return max
}

console.log(integerRightTriangles(1000))

const triPentHexNumbers = () => {
  let tris = []
  let pents = []
  let hexes = []
  let all = []
  let n = 1
  while(all[all.length-2] != 40755){
    let tri = n*(n+1)/2
    tris.push(tri)
    pents.push(n*(3*n-1)/2)
    hexes.push(n*(2*n-1))
    if(hexes.includes(tri) && pents.includes(tri)){
      all.push(tri)
      console.log(tri)
    }
    n++
  }
  return all[all.length-1]
}

console.log(triPentHexNumbers(1)) //1533776805

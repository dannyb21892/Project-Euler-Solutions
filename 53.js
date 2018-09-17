const combinatoricSelections = limit => {
  let row = [1]
  let count = 0
  for(let n = 1; n <= 100; n++){
    let nextrow = []
    for(let r = 0; r <= n/2; r++){
      let value = row[r] + (row[r-1] ? row[r-1] : 0)
      nextrow.push(value)
      if(value > limit){
        count = count + 2
        if(n%2 === 0 && r+1 > n/2){
          count--
        }
      }
    }
    row = [...nextrow, n%2 === 0 ? nextrow[nextrow.length-2] : nextrow[nextrow.length-1]]
  }
  return count
}

console.log(combinatoricSelections(1000000))

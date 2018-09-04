const latticePaths = size => {
  let array = Array(size+2)
  for(let i = 0; i < size+2; i++){
    array[i] = Array(size+2).fill(0)
  }
  array[size][size] = 1
  while(array[0][0] === 0){
    for(let i = 0; i < size+1; i++){
      for(let j = 0; j < size+1; j++){
        array[i][j] = array[i+1][j] + array[i][j+1]
      }
    }
  }
  return array[0][0]
}

console.log(latticePaths(20)) //137846528820

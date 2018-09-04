const iterate = (input) => {
  if(input%2 === 0){
    return input / 2
  } else {
    return input * 3 + 1
  }
}

const longestCollatzSequence = (limit) => {
  let longest = [1, 4] //[starting number, chain length]
  for(let i = 2; i < limit; i++){
    let current = i
    let count = 1
    while(current != 1){
      current = iterate(current)
      count += 1
    }
    if(count > longest[1]){
      longest = [i, count]
    }
  }
  return longest
}

console.log(longestCollatzSequence(1000000)) //[ 837799, 525 ]

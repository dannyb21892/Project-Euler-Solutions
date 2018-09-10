const pentagonNumbers = () => {
  let list = [1,5]
  let answer = []
  let count = 2
  let nextHigh = 1
  while(answer.length === 0 || (answer[0] - answer[1] < list[count-1] - list[count-2])){
    let high = list[nextHigh]
    for(let i = 0; i < count - 1; i++){
      let low = list[i]
      if(list.includes(high - low) && (answer.length === 0 || high - low < answer[1])){
        let sum = high + low

        let next = list[count-1]
        while(next < sum){
          count += 1
          next = count*(3*count-1)/2
          list[count-1] = next
        }
        for(let j = nextHigh+1; j < count; j++){
          if(list[j] === sum){
            answer = [high, low]
            console.log(answer)
            break
          }
        }
      }
    }
    nextHigh += 1
    if(nextHigh > count - 1){
      count += 1
      list[count-1] = count*(3*count-1)/2
    }
  }
  return answer[0] - answer[1]
}

console.log(pentagonNumbers())

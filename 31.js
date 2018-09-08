const coins = [200, 100, 50, 20, 10, 5, 2, 1] //must be sorted decreasing

const waysToMakeXPounds = (total, largestCoin) => {
  let count = 0
  if(total === 0 || largestCoin === 1){
    return 1
  } else {
    let nextCoin = coins[coins.findIndex(coin => coin === largestCoin)+1]
    let sum = 0
    for(let i = 0; i <= Math.floor(total / largestCoin); i++){
      sum += waysToMakeXPounds(total - i*largestCoin, nextCoin)
    }
    return sum
  }
}

console.log(waysToMakeXPounds(200, coins[0])) //73682

const largestPalindrome = () => {
  let max = 0
  for(let i=100; i<1000; i++){
    for(let j=100; j<1000; j++){
      let product = i*j
      if(product > max && product.toString() === product.toString().split("").reverse().join("")){
        max = product
      }
    }
  }
  return max
}

console.log(largestPalindrome()) //906609

const dictionary = {
  0:"",
  1:"one",
  2:"two",
  3:"three",
  4:"four",
  5:"five",
  6:"six",
  7:"seven",
  8:"eight",
  9:"nine",
  10:"ten",
  11:"eleven",
  12:"twelve",
  13:"thirteen",
  14:"fourteen",
  15:"fifteen",
  16:"sixteen",
  17:"seventeen",
  18:"eighteen",
  19:"nineteen",
  20:"twenty",
  30:"thirty",
  40:"forty",
  50:"fifty",
  60:"sixty",
  70:"seventy",
  80:"eighty",
  90:"ninety",
  100:"hundred",
  1000:"thousand"
}

const numberLetterCounts = () => {
  let letterCount = 0
  let letters
  for(let i=1; i<=1000; i++){
    if(i === 1000){
      letters = dictionary[1] + dictionary[1000]
    }
    else {
      letters = ""
      let hundreds = Math.floor(i/100)
      let tens = Math.floor((i-(hundreds*100))/10)
      let ones = i-(hundreds*100)-(tens*10)
      if(hundreds > 0){
        letters += dictionary[hundreds] + dictionary[100]
      }
      if(hundreds > 0 && (tens > 0 || ones > 0)){
        letters += "and"
      }
      if(tens > 1){
        letters += dictionary[tens*10]
        if(ones > 0){
          letters += dictionary[ones]
        }
      } else {
        let teens = tens*10 + ones
        letters += dictionary[teens]
      }
    }
    letterCount += letters.length
  }
  return letterCount
}

console.log(numberLetterCounts()) //21124

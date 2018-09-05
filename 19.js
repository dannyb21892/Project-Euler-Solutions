const calendar = {
  0:31,
  1:28,
  2:31,
  3:30,
  4:31,
  5:30,
  6:31,
  7:31,
  8:30,
  9:31,
  10:30,
  11:31,
}

const sundaysOnMonthFirsts = () => {
  let day = (1+365)%7 //start at jan 1 1901
  let year = 1901
  let count = 0
  while(year < 2001){
    for(let month=0; month<12; month++){
      if(day === 0){
        count++
      }
      day = (day+calendar[month])%7
      if(month === 1 && year%4 === 0){
        day = (day+1)%7
      }
    }
    year++
  }
  return count
}

console.log(sundaysOnMonthFirsts()) //171

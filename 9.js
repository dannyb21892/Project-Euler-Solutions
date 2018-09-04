const productOfPythagoreanTripleWhoseSumIs1000 = () => {
  for(a = 1; a < 334; a++){
    for(b = a+1; b < Math.ceil((1000-a)/2); b++){
      let c = 1000 - a - b
      if(a*a + b*b === c*c){
        return [a*b*c, `${a},${b},${c}`]
      }
    }
  }
}

console.log(productOfPythagoreanTripleWhoseSumIs1000()) //31875000

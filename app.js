function breakChocolate(n,m) {
    mySum = (n * m) - 1;
    if(mySum < 0){
      return 0;
    } else {
      return mySum;
    }
}

console.log(breakChocolate(5, 5)); // 24
console.log(breakChocolate(1, 1)); // 0s
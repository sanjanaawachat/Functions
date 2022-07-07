//que7

//Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    let fact = 1;
    if (n == 0 || n == 1){
      return fact;
    }else{
      for(var i = n; i >= 1; i--){
        fact = fact * i;
      }
      return fact;
    }  
  }
console.log(factorial(3)); 


//ans

//3!=3*2*1=6(factorial)
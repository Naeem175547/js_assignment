function factorial(x){
   if(x<0){
      console.log("please enter positive value");
      return;
   }
    let fact=1;
     while(x!=0){
        fact*=x;
        x-=1;
        
     }
     console.log(fact);
}
factorial(5);
factorial(3);
factorial(10)
factorial(-10)

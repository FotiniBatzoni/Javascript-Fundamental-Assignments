function fizzBuzz(num1,num2){
    for(let i=num1; i<=num2;i++ ){
        if(i%3 ==0 && i%5==0 ){
            alert("FizzBuzz")
        }
        else if(i%5==0){
            alert("Buzz")
        }
        else if(i%3 ==0 ){
            alert("Fizz")
        }else{
            alert(i)
        }
    }
}
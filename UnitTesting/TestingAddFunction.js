function add(num1,num2){
    return (num1+num2)
}

function test(name,expected,actual){
    if(expected===actual){
        console.log(`${name} 
        Test passed. Expected ${expected} is equal to Actual ${actual}`)
    }else{
        console.log(`${name} 
        Test failed. Expected ${expected} is not equal to Actual ${actual}`) 
    }
}

//Two positive whole numbers
test("Two positive whole numbers", 3 , add(2,1));

//One zero and a number greater than zero
test("One zero and a number greater than zero", 1 , add(0,1));

//Two digit numbers
test("Two digit numbers", 10 , add(8,2));

//A single digit and a double digit number
test("A single digit and a double digit number", 17 , add(14,3));

//A positive and a negative number
test("A single digit and a double digit number",3 , add(-4,7));

//A decimal number and a whole number
test("A decimal number and a whole number",2.5 , add(2,0.5));

//A number string plus a number
//Fail,but you should check for type in your function
test("A number string plus a number", 5, add("2",3));

//A string plus a string
//Fail,but you should check for type in your function
test("A number string plus a number", 25, add("2","5"));

//A boolean plus a string
//Passed,but should be checking type
test("A number string plus a number", "trueHi", add(true,"Hi"));

//Missing an argument
//Failed,but tou should ensure all required values are present
test("Missing an argument", NaN , add(null,add(1)));

//Missing both arguments
//Failed,but tou should ensure all required values are present
test("Missing an argument", NaN, add(null,add()));


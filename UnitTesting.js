//Unit Testing
//Test against specific function

//Unit Tesr typically Automated

//Unit vs integration
//Integretion is a test of multiple components working together

//Types of test

//Actual vs expected
//Actual what the function returned
//Expected is what you expect to be returned

//happy  path
//-normal operation like adding two numbers

//negative path
//add a letter instead of number

//Function for unit testing
//name: title of test
function test(name,expected,actual){
    if(expected===actual){
        console.log(`${name} 
        Test passed. Expected ${expected} is equal to Actual ${actual}`)
    }else{
        console.log(`${name} 
        Test failed. Expected ${expected} is not equal to Actual ${actual}`) 
    }
}

function blah(num){
    return num
}

test('Test if the number input is the same as the output', blah(2),2)

test('Test if the number input is the same as the output', blah(1),2)

test('Test if the number input is the same as the output', 2, blah(1))
function countMatch(arr){
    let isMatch=0;

    let firstElement=arr.shift();


    while(arr.length>0){
        for(let i=0;i<arr.length;i++){    
            if(firstElement === arr[i] ){
                isMatch++;
            }
        }
        firstElement=arr.shift();
    }
    return isMatch;
}


function test(name,expected,actual){
    if(expected===actual){
        console.log(`${name} 
        Test passed. Expected ${expected} is equal to Actual ${actual}`)
    }else{
        console.log(`${name} )
        Test failed. Expected ${expected} is not equal to Actual ${actual}`) 
    }
}

test('Test if array is [1,1,1] ', 3, countMatch([1,1,1]))

test('Test if array is [1,2,1,3] ', 1, countMatch([1,2,1,3]))

test('Test if array is [1,2,1,2,3,2] ', 4, countMatch([1,2,1,2,3,2]))

test('Test if array is [1,2] ', 0, countMatch([1,2]))

test('Test if array is [1] ', 0, countMatch([1]))

test('Test if array is [1,a] ', 0, countMatch([1,'a']))

test('Test if array is [1,true] ', 0, countMatch([1,true]))
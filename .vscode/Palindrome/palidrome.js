function palindrome(word){
    let isPalindrome=false;
    for(let i=0; i<word.length-1; i++){
            if(word[i]===word[word.length-1-i]){
                console.log(word[i])
                console.log(word[word.length-1-i])
                isPalindrome=true
            }else{
                isPalindrome=false
                return false
            }
    }
    return isPalindrome
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

test('Test if the word "a" is palindrome', palindrome("a"),false)

test('Test if the word "ab" is palindrome', palindrome("ab"),false)

test('Test if the word "aba" is palindrome', palindrome("aba"),true)

test('Test if the word "abba" is palindrome', palindrome("abba"),true)

test('Test if the word "abcba" is palindrome', palindrome("abcba"),true)

test('Test if the word "abcdba" is palindrome', palindrome("abcdba"),false)

test('Test if the word "1" is palindrome', palindrome("1"),false)

test('Test if the word 1 is palindrome', palindrome(1),false)

test('Test if the word 11 is palindrome', palindrome(11),false)

test('Test if the word true is palindrome', palindrome(true),false)

test('Test if the word false is palindrome', palindrome(false),false)

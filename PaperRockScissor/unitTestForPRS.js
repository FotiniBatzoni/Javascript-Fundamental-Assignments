const rps = require('./paperRockScissor.js')

function test(name,expected,actual){
    if(expected===actual){
        console.log(`${name} 
        Test passed. Expected ${expected} is equal to Actual ${actual}`)
    }else{
        console.log(`${name} 
        Test failed. Expected ${expected} is not equal to Actual ${actual}`) 
    }
}

test('If both players are rock then tie', "Tie", rps("r","r"))

test('If player1 is rock and player2 paper.Paper beats rock. Player 1 wins', "Paper beats rock. Player 1 wins.", rps("r","p"))

test('If player1 is rock and player2 scissors.Rock beats scissors. Player 1 wins.', "Rock beats scissors. Player 1 wins.", rps("r","s"))


test('If player1 is rock and player2 a. Player 2 made an invalid selection.', "Player 2 made an invalid selection.", rps("r","a"))
//--------------------------------------------------------------

test('If both players are paper then tie', "Tie", rps("p","p"))

test('If player1 is paper and player2 rock.Paper beats rock. Player 1 wins',"Paper beats rock. Player 2 wins.", rps("p","r"))

test('If player1 is paper and player2 scissors.Scissors beat paper. Player 2 wins.',"Scissors beat paper. Player 2 wins.", rps("p","s"))

test('If player1 is paper and player2 a. Player 2 made an invalid selection.', "Player 2 made an invalid selection.", rps("p","a"))

//-------------------------------------------------------------

test('If both players are scissor then tie', "Tie", rps("s","s"))

test('If player1 is scissor and player2 rock.Rock beats scissors. Player 2 wins.',"Rock beats scissors. Player 2 wins.", rps("s","r"))

test('If player1 is scissor and player2 paper.Rock beats scissors. Player 2 wins.',"Scissors beats paper. Player 1 wins.", rps("s","p"))

test('If player1 is scissor and player2 a. Player 2 made an invalid selection.', "Player 2 made an invalid selection.", rps("s","a"))

//--------------------------------------------------------------

test('If player1 is a and player2 p. Player 1 made an invalid selection.', "Player 1 made an invalid selection.", rps("a","p"))


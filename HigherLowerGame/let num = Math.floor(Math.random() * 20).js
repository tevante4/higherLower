alert('You have 10 guesses. Guess 1-20');


var answer = 6;
var Guess = prompt("What's your Guess?");

for (i=0; i<20; i++){ 

        if (answer == Guess){
          alert("You guessed correctly");
          break;
        
        } else {
          guess = prompt("Please Try Again");
        }
}

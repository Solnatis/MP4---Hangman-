var timer = document.querySelector(".time");
var gameClock = document.getElementById("clock");
var usableLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z",]
var arrAnswers = ["Brent", "Ashtin", "Killian"]


//TODO: Randomize possible answers

//TODO: log user guesses
	// Correct guesses to populate in answer
	//incorrect guesses logged

//TODO: Include Countdown
var secondsLeft = 120;

function setTime() {
	var timerInterval = setInterval(function(){
		secondsLeft--;
		timer.textContent = secondsLeft + "seconds left until round is over!"

		if(secondsLeft === 0) {

			clearInterval(timerInterval);

			//TODO: Push to Game Over Screen, Display Score 
		}
	})
}

//TODO: 
// Correct Answers-- You Win~!
// Incorrect Answers -- You Lose! Game Over~!
   // Include final score

//TODO: Option to play again


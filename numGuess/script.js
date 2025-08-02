let randomNum = (parseInt(Math.random()*100+1));

const submit = document.querySelector("#subt");
const userInput = document.querySelector('#guessField');
const guessArray = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")


let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
        if (!playGame) return;
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if (guess < 1){
        alert("please enter anumber more than 1")
    }
    else if (guess >100){
        alert("please enter a number less than 100")
    }
    else{
        prevGuess.push(guess);
        if (numGuess===10) {
            displayGuess(guess);
            displayMesssage(`game over. random num was ${randomNum}`);
            endGame()
        }
        else {
        displayGuess(guess)
        checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess===randomNum) {
        displayMesssage(`you guessed it right!!`)
        endGame()
    }
    else if (guess<randomNum) {
        displayMesssage(`number is too low`)
    }
    else if (guess>randomNum) {
        displayMesssage(`number is too high`)
    }
}

function displayGuess(guess){
userInput.value = '';
guessArray.innerHTML +=  `${guess}, `;
numGuess++;
remaining.innerHTML= `${11-numGuess}`

}

function displayMesssage(message){
    lowOrHi.innerHTML= `<h2> ${message}</h2>`;
}

function newGame(){
const newGameButton = document.querySelector("#newGame")
newGameButton.addEventListener("click",function(e){
     randomNum = (parseInt(Math.random()*100+1));
    prevGuess=[];
    numGuess = 1;
    guessArray.innerHTML='';
    remaining.innerHTML=`${11- numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame=true;
})
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled','');
p.classList.add("button")
p.innerHTML= `<h2 id="newGame">start new game</h2>`
startOver.appendChild(p)
playGame = false; 
newGame()
}




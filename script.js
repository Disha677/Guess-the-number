let pcRandomNumGenerator;
let userGuess = [];
let heading = document.getElementById("textOutput");
let audio = new Audio("music.mp3");
let music = new Audio("ting.mp3");
let wonMusic = new Audio("Hurrah.mp3");

const init = () => {
    pcRandomNumGenerator = Math.floor(Math.random() * 100);
    console.log(pcRandomNumGenerator);

    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}
// start new game 
const startNewGame = () =>{
  document.getElementById("newGameButton").style.display = "block";
  document.getElementById("inputBox").setAttribute("disabled",true);

}
const newGameBegin = () =>{
    window.location.reload();
    music.play();
}
const compareGuess = () => {
    music.play();
    const userEnteredNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userEnteredNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    //    compare user value with random number

    if (userGuess.length < maxGuess) {
        if (userEnteredNumber > pcRandomNumGenerator) {
            heading.innerHTML = "Your guess is High 😰";
            document.getElementById("inputBox").value = "";
            music.play();
        }
        else if (userEnteredNumber < pcRandomNumGenerator) {
            heading.innerHTML = "Your guess is Low 😒";
            document.getElementById("inputBox").value = "";
            music.play();
        }
        else {
            heading.innerHTML = "Hurrah! Your Guess is Correct 😋";
            music.pause();
            // audio.play();
            wonMusic.play();
            document.getElementById("inputBox").value = "";
            startNewGame();
        }
    }
    else{
        if (userEnteredNumber > pcRandomNumGenerator) {
            heading.innerHTML = `You Lose! Correct answer is ${pcRandomNumGenerator}`;
            document.getElementById("inputBox").value = "";
            audio.play();
            startNewGame();
        }
        else if (userEnteredNumber < pcRandomNumGenerator) {
            heading.innerHTML = `You Lose! Correct answer is ${pcRandomNumGenerator}`;
            document.getElementById("inputBox").value = "";
            audio.play();
            startNewGame();
        }
        else {
            heading.innerHTML = "Hurrah! Your Guess is Correct 😋";
            document.getElementById("inputBox").value = "";
            audio.play();
            startNewGame();
        }
    }
    document.getElementById("attempts").innerHTML = userGuess.length;

}

const easyMode = () => {
    music.play();
    maxGuess = 10;
    startGame();
}
const hardMode = () => {
    music.play();
    maxGuess = 5;
    startGame();
}

// window + . for emoji 
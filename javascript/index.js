// alert('We\'re working on it!');

// For Player1 - create "randomNumber1" between 1 to 6
let randomNumber1 = Math.floor(Math.random()*6) + 1;

// create "randomDiceImage" between dice1.png - dice6.png
let randomDiceImage = "dice" + randomNumber1 + ".png"; 

// create "randomImagesSource" - Images/dice1.png - Images/dice6.png

let randomImagesSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomImagesSource);

// for Player2 - same procedure
let randomNumber2 = Math.floor(Math.random()*6) + 1;

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImagesSource2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImagesSource2);
// or - use this code
// document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

// winner - JS code 
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
// console.log(randomNumber1);

// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");


// Count Variables
let numHeads = 0;
let numTails = 0;

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num1t = 0;
let num2t = 0;
let num3t = 0;
let num4t = 0;
let num5t = 0;
let num6t = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click",btnClicked);

function btnClicked() {
    outputEl.style.background = "white";

    // Generate a random number
    let rand = Math.random();
    console.log(rand);

    // Simulate the Coin Flip
    if (rand < 0.5) {
        outputEl.innerHTML = `<img src="img/heads.png" alt="HEADS">`;
        numHeads += 1;
        headsEl.innerHTML = numHeads;
    } else {
        outputEl.innerHTML = `<img src="img/tails.png" alt="TAILS">`;
        numTails += 1;
        tailsEl.innerHTML = numTails;
    }
}

// Dice roller

document.getElementById("btnDice").addEventListener("click", rollDice);

function rollDice() {
    let sum = 0;
    let dice = "";
    outputEl.style.background = "black";

    // Rand num
    let dice1 = Math.random();
    let dice2 = Math.random();
    console.log(dice2);

    // Dice1 roll
    if (dice1 < 1/6) {
        dice = `<img src="img/1.png" alt="1" width="200px">`
        num1 += 1;
        document.getElementById("1Out").innerHTML = num1
        sum = 1;
    } else if (dice1 < 1/3) {
        dice = `<img src="img/2.png" alt="2" width="200px">`;
        num2 += 1;
        document.getElementById("2Out").innerHTML = num2
        sum = 2;
    } else if (dice1 < 0.5) {
        dice = `<img src="img/3.png" alt="3" width="200px">`;
        num3 += 1;
        document.getElementById("3Out").innerHTML = num3
        sum = 3;
    } else if (dice1 < 1/3*2) {
        dice = `<img src="img/4.png" alt="4" width="200px">`;
        num4 += 1;
        document.getElementById("4Out").innerHTML = num4
        sum = 4;
    } else if (dice1 < 1/6*5) {
        dice = `<img src="img/5.png" alt="5" width="200px">`;
        num5 += 1;
        document.getElementById("5Out").innerHTML = num5
        sum = 5;
    } else {
        dice = `<img src="img/6.png" alt="6" width="200px">`;
        num6 += 1;
        document.getElementById("6Out").innerHTML = num6
        sum = 6;
    }

    // Dice2 roll
    if (dice2 < 1/6) {
        dice = `${dice} <img src="img/1.png" alt="1" width="200px">`;
        num1t += 1;
        document.getElementById("1Out2").innerHTML = num1t
        sum += 1;
    } else if (dice2 < 1/3) {
        dice = `${dice} <img src="img/2.png" alt="2" width="200px">`;
        num2t += 1;
        document.getElementById("2Out2").innerHTML = num2t
        sum += 2;
    } else if (dice2 < 0.5) {
        dice = `${dice} <img src="img/3.png" alt="3" width="200px">`;
        num3t += 1;
        document.getElementById("3Out2").innerHTML = num3t
        sum += 3;
    } else if (dice2 < 1/3*2) {
        dice = `${dice} <img src="img/4.png" alt="4" width="200px">`;
        num4t += 1;
        document.getElementById("4Out2").innerHTML = num4t
        sum += 4;
    } else if (dice2 < 1/6*5) {
        dice = `${dice} <img src="img/5.png" alt="5" width="200px">`;
        num5t += 1;
        document.getElementById("5Out2").innerHTML = num5t
        sum += 5;
    } else {
        dice = `${dice} <img src="img/6.png" alt="6" width="200px">`;
        num6t += 1;
        document.getElementById("6Out2").innerHTML = num6t
        sum += 6;
    }

    outputEl.innerHTML =  dice;
    document.getElementById("sum").innerHTML = sum
}
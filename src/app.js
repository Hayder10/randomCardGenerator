/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var card = cardPick();
  var number = document.getElementById("number");
  var upperSuit = document.getElementById("upperIcon");
  var lowerSuit = document.getElementById("lowerIcon");
  if (card[0] == "heart") {
    upperSuit.style.color = "red";
    lowerSuit.style.color = "red";
    upperSuit.innerHTML = "♥";
    lowerSuit.innerHTML = "♥";
    number.innerHTML = card[1];
  } else if (card[0] == "diamond") {
    upperSuit.style.color = "red";
    lowerSuit.style.color = "red";
    upperSuit.innerHTML = "♦";
    lowerSuit.innerHTML = "♦";
    number.innerHTML = card[1];
  } else if (card[0] == "spade") {
    upperSuit.innerHTML = "♠";
    lowerSuit.innerHTML = "♠";
    number.innerHTML = card[1];
  } else {
    upperSuit.innerHTML = "♣";
    lowerSuit.innerHTML = "♣";
    number.innerHTML = card[1];
  }
};

const suits = ["spade", "heart", "diamond", "clover"];
const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function cardPick() {
  var numberSuit = Math.floor(Math.random() * 4);
  var numberNum = Math.floor(Math.random() * 13);
  var result = [];

  result.push(suits[numberSuit]);
  result.push(numbers[numberNum]);
  console.log(result);
  return result;
}

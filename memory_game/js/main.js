console.log("Up and running!");
console.log("User flipped " + cardOne);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne =  cards[0];
var cardTwo =  cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");
 
if (cardsInPlay.length === 2 ) {}
 else if ( cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");
} else { alert("Sorry, try again.");
}
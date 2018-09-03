var cards = [ 
{ rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png" },
  {
  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images/queen-of-diamonds.png",
  },
  { rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png",
  },
  { rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",}
]
	;
var cardsInPlay = [];
var checkForMatch = function() {if (cardsInPlay[0] === cardsInPlay[1]) 
 	{alert("You found a match!");
} else { alert("Sorry, try again.");
}
};
var flipCard = function (cardId) {
/* blocking out but if needed later it's here.

console.log("User flipped queen");
console.log("User flipped king");
*/

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) 
 	{alert("You found a match!");
} else { alert("Sorry, try again.");
}
console.log( "User flipped " + cards[cardId].rank)
};
cardsInPlay.push(cards[cardId].rank)
flipcard(0)
flipcard(2)
console.log(cards.cardImage && cards.suit);
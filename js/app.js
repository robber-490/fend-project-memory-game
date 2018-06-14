
const icons = ["fa fa-diamond","fa fa-diamond", "fa fa-paper-plane-o",
"fa fa-paper-plane-o","fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt",
"fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle","fa fa-bomb","fa fa-bomb"];

const cardsContainer = document.querySelector(".deck");

let openedCards= [];
let matchedCards = [];

// shuffle the deck

function shuffle() {
  let deck = document.querySelector('ul.deck');
      for (let i = deck.children.length; i >= 0; i--) {
          deck.appendChild(deck.children[Math.random() * i | 0])}
  }

//initialize the game
function init() {
for (let i=0; i< icons.length; i++) {
  const card= document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `<i class="${icons[i]}"> </i>`;
  cardsContainer.appendChild(card);
  click(card);
  }
}
//click event function
  function click(card) {
    card.addEventListener("click", function() {

    const currentCard = this;
    const previousCard = openedCards[0];

  if (openedCards.length  === 1) {

    card.classList.add("open", "show", "disable");
    openedCards.push(this);

  compare (currentCard, previousCard);

  }

  else {
    card.classList.add("open", "show", "disable");
    openedCards.push(this);
  }


  });

  }
//Compare the cards
function compare (currentCard, previousCard) {
   if(currentCard.innerHTML === previousCard.innerHTML){

        currentCard.classList.add("match");
        previousCard.classList.add("match");

        matchedCards.push(currentCard, previousCard);

        openedCards = [];

        isOver();
        addMove();

}    else{

      setTimeout(function () {
          currentCard.classList.remove("open", "show", "disable");
          previousCard.classList.remove("open","show", "disable");
          openedCards = [];
      }, 600);

//move counter
addMove();
}



// end of game
function isOver () {
  if (matchedCards.length === icons.length){
    alert ("Congratulations! You win :)")
  }

}
}
// move counter
const movesContainer = document.querySelector(".moves");
let moves = 0;
movesContainer.innerHTML = 0
function addMove() {
  moves++;
  movesContainer.innerHTML = moves;
  //count starsContainer
  rating();
}

// star counting system
const starsContainer = document.querySelector(".stars");
starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`

function rating(){
    switch (moves) {
      case 15:
      starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
      <li><i class="fa fa-star"></i></li>`;
        break;
      case 20:
      starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>`;
        break;
        case 25:
        starsContainer.innerHTML = ` `
    }
}

//restart button
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", function(){
  //delete cards
cardsContainer.innerHTML = "";

  //use init to replace cards
init ();

  //empty cach
  matchedCards = [];
  moves = 0;
  movesContainer.innerHTML = moves;
  starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;

});



//start the game

init();
shuffle();





/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

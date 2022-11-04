//JS for Memory Card Game: TP8

//set up card tracker
cardsClicked = 0;


function cardClicked(what) {

  //make sure the card hasn't been removed
  if (!what.classList.contains("removed")) {

    if (what.classList.contains("clicked")) {
      //it's already clicked, act appropriately
      what.classList.remove("clicked");
      cardsClicked--;

    } else {
      //it's not already clicked
      what.classList.add("clicked");
      cardsClicked++;

      if (cardsClicked == 2) {
        //compare card values
        cardCompare();
      }
    }
  }
}

function cardCompare() {

  clickedCards = document.querySelectorAll(".clicked"); //collection of clicked cards

  //first clicked element will be clickedCards[0]
  //second clicked element will be clickedCards[1]

  matched = false; //track if the cards matched

  if (clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1")) {
    matched = true; //they matched pic 1

  } else if (clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2")) {
    matched = true; //they matched pic 2
  }

  if (matched) {
    //hide cards 
    removeCards(clickedCards[0], clickedCards[1]);

  } else {
    //unflip cards
    unflipCards(clickedCards[0], clickedCards[1]);

  }


}

function removeCards(cardA, cardB) {
  cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");

  cardA.classList.add("removed");
  cardB.classList.add("removed");
  cardsClicked = 0;
}

function unflipCards(cardA, cardB) {
  cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");
  cardsClicked = 0;
}


//stuff to do when window loads
window.onload = function() {

  cardList = document.getElementsByClassName("card"); //collection of cards

  cardCount = cardList.length; //how many cards are on the table

  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      cardClicked(this)
    }
  }


}
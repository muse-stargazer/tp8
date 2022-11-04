//JS for Memory Card Game: TP8

//set up card tracker
cardsClicked = 0;

function cardClicked(what) {
  if (what.classList.contains("clicked")) {
    //it's already clicked, act appropriately
    what.classList.remove("clicked");

  } else {
    //it's not already clicked
    what.classList.add("clicked");
  }
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
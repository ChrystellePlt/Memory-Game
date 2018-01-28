
// CARDS CREATION AND RANDOM DISTRIBUTION----------------------------------------------------------------------
var mainContainer = document.querySelector('.main-container')
var categories = ['yellow', 'blue', 'red', 'green', 'black', 'orange']
var numberOfCards = 12;

var categoryNb = []

for (var i = 0; i < numberOfCards/2; i++) {
  categoryNb.push(i)
  categoryNb.push(i)
}

var categoryAssign = []
var randomNumber

for (var i = 0; i < numberOfCards; i++) {
  randomNumber = Math.floor(Math.random() * categoryNb.length) + 0;
  categoryAssign.push(categoryNb[randomNumber]);
  categoryNb.splice(randomNumber, 1);
}

for (var i = 0; i < numberOfCards; i++) {
  cardCreation(i);
}

function cardCreation(index) {
  var cardContainer = document.createElement('DIV');
  cardContainer.classList.add('card-container');
  mainContainer.appendChild(cardContainer);

  var card = document.createElement('DIV');
  card.classList.add('card');
  cardContainer.appendChild(card);

  var frontFace = document.createElement('div')
  frontFace.classList.add('front-face');
  card.appendChild(frontFace)

  var backFace = document.createElement('div')
  backFace.classList.add('back-face')
  backFace.dataset.category = categories[categoryAssign[index]];
  card.appendChild(backFace)
}
// GAME ----------------------------------------------------------------------

//var hide = function(self, prev) {       //function declaration
//  setTimeout(function() {
//    self.classList.remove('flipped');
//    prev.classList.remove('flipped');
//  }, 500);
//}

const card = document.querySelectorAll('.card');
var count = 0;
var prevCategory;
var currCategory;
var prevEvent;
var cardsFlipped;
const overlay = document.querySelector('.overlay')

for (var i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function(event) {
    this.classList.add('flipped');
    currCategory = this.lastChild.dataset.category;
    count ++;
    if (count === 2) {

      var prev = prevEvent;

      if (currCategory === prevCategory) {
        setTimeout(function() {
          this.classList.add('win');
          prev.classList.add('win');
        }.bind(this), 500);

      } else {
        // hide(this, prevEvent);     //This function can be used instead of using bind

        setTimeout(function() {
          this.classList.remove('flipped');
          prev.classList.remove('flipped');
        }.bind(this), 500);
      }
      cardsFlipped = document.querySelectorAll('.win');

        if (cardsFlipped.length === card.length-2) {
          setTimeout(function() {
            overlay.style.display = 'block';
          }, 1000);
        }
      count = 0;
    }
  prevCategory = currCategory;
  prevEvent = event.currentTarget;

  })
};

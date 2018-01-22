const card = document.querySelectorAll('.card');
var count = 0;
var prevCategory;
var currCategory;
var prevEvent;

//var hide = function(self, prev) {
//  setTimeout(function() {
//    self.classList.remove('flipped');
//    prev.classList.remove('flipped');
//  }, 500);
//}

for (var i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function(e) {
    this.classList.add('flipped');
    currCategory = this.dataset.category;
    count ++;
    if (count === 2) {

      var prev = prevEvent;

      if (currCategory === prevCategory) {
        setTimeout(function() {
          this.style.border = '2px solid red';
          prev.style.border = '2px solid red';
        }.bind(this), 500);

      } else {
        // hide(this, prevEvent);

        setTimeout(function() {
          this.classList.remove('flipped');
          prev.classList.remove('flipped');
        }.bind(this), 500);
      }
      count = 0;
    }
  prevCategory = currCategory;
  prevEvent = event.currentTarget;
  })
};

//.bind explanation :

// var add = function(a, b) {
//   return a + b;
// }
//
// add(5, 7);
//
// var add5 = add.bind(null, 5);
//
// var add5 = function(b) {
//   return add(5, b);
// }
//
// add5(7);

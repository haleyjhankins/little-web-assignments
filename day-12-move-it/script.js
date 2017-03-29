// Down:

var downButton = document.querySelector('#down-button');
var upButton= document.querySelector('#up-button');
var theCircle= document.querySelector('.circle');
var rightButton= document.querySelector('#right-button');
var leftButton= document.querySelector('#left-button');

var topValue= 0;
var rightValue=0;

downButton.addEventListener('click', function(){
  topValue += 5;

  theCircle.style.top = topValue + 'px';
});


// Up:

upButton.addEventListener('click', function(){
  topValue -= 5;

  theCircle.style.top = topValue + 'px';

});


// Right:

rightButton.addEventListener('click', function (){
  rightValue +=5;

  theCircle.style.left= rightValue + 'px';
});


// Left:

leftButton.addEventListener('click', function (){
  rightValue -=5;

  theCircle.style.left= rightValue + 'px';

});

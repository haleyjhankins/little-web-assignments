var previousButton =document.querySelector('#previous-button');
var nextButton= document.querySelector ('#next-button');
var display= document.querySelector('#display');

var currentMessageIndex= 0;

var messages= [
  'You are making JavaScript your b*tch!',
  "You are killin' it Haley.",
  'JavaScript dont know who its messing with',
  'I dont understand why people listen to Journey',
  'Courtney Love killed Kurt Cobain.'
];

display.textContent= messages[0];

nextButton.addEventListener('click', function(){
  currentMessageIndex +=1;

  if (currentMessageIndex === messages.length){
    currentMessageIndex =0;
  }

  display.textContent= messages[currentMessageIndex];
});



previousButton.addEventListener('click', function(){
  currentMessageIndex -=1;

  if (currentMessageIndex < 0) {
    currentMessageIndex =messages.length - 1;
  }

  display.textContent= messages[currentMessageIndex];
});

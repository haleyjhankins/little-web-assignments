
var link = document.querySelector('#link');
var stopButton= document.querySelector('#stop-button');
var startButton= document.querySelector('#start-button');

var positionX = 0;
var positionY = -650;


window.addEventListener('keydown', function (evt){
  console.log(evt.keyCode);
  if (evt.keyCode ===37){
    // direction= 'left';
    positionY = -650;
  }
  else if (evt.keyCode ===39){
    // direction = 'right';
    positionY= -910;
  }
});


stopButton.addEventListener('click', function (){
  console.log('stop', intervalID);
  clearInterval(intervalID);
});

startButton.addEventListener('click', function (){
  console.log('start', intervalID);
  intervalID= setInterval(animate, 50);
});


function animate(){
  positionX -= 120;
  // console.log(position);

  link.style.backgroundPositionX= positionX + 'px';
  link.style.backgroundPositionY= positionY + 'px';
}


var intervalID = setInterval(animate, 50);

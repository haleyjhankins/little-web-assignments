// Seizure Machine!

// var mike= document.querySelector('#mike');
// var startButton= document.querySelector('#start-button');
// var stopButton= document.querySelector('#stop-button');
//
// var positionX =0;
//
//
// window.addEventListener('keydown', function (evt){
//   if (evt.keyCode === 37){
//   positionX = 0;
// }
//   else if (evt.keyCode === 39){
//     positionX = 100;
//   }
// })
//
// function animate() {
//
//   positionX += 120;
//
//   mike.style.backgroundPositionX = positionX + 'px';
// }
//
// var intervalId = setInterval(animate, 70);




var mike= document.querySelector('#mike');

var position = 0;
var direction = 'left';

window.addEventListener('keydown', function (evt){
  console.log(evt.keyCode);
  if (evt.keyCode ===37){
    direction= 'left';
  }
  else if (evt.keyCode ===39){
    direction = 'right';
  }
});

function animate() {

  mike.classList.remove('right-position-' + position)
  mike.classList.remove('left-position-' + position)
  position += 1;

  if (position === 7) {
    position = 1;
  }




  mike.classList.add(direction +'-position-' + position);


}


var intervalId = setInterval(animate, 100);

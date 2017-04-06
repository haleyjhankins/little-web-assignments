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

function animate() {

  mike.classList.remove('position-' + position);
  position += 1;

  if (position === 7) {
    position = 1;
  }

  mike.classList.add('position-' + position);
}


var intervalId = setInterval(animate, 50);

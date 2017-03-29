var theHeader = document.querySelector('#the-header');
theHeader.textContent ='Javascript Changed Me!';

function clickTheHeader(){
console.log('clicked');
theHeader.textContent= "Changed on click listener";

}

theHeader.addEventListener('click', clickTheHeader);

theHeader.addEventListener ('mouseover', function(){
  theHeader.classList.add('hovery');
})

theHeader.addEventListener('mouseout', function(){
  console.log('the mouse has left the dom element');
  theHeader.classList.remove('hovery');

})


var theP =document.querySelector('.the-p');

theP.addEventListener('click', function(){
  console.log('clicked the paragraph');
  theP.textContent = 'Also changed on click';
  theP.classList.toggle('on');
});

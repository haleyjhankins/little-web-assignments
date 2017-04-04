var list = document.querySelector('#list');

var playas = ['Odor', 'Profar', 'Andrus', 'Napoli', 'Beltre' ];

for (var i=0; i < playas.length; i++) {
  var newItem = document.createElement('li');
  newItem.textContent =playas[i];
  list.appendChild(newItem);
  
};




var theButton =document.querySelector('#add-thing');

list.addEventListener('click', function(evt) {
 // console.log(evt);
 if (evt.target.tagName === 'LI') {
   evt.target.classList.toggle('toggled');
 }
});

theButton.addEventListener('click', function (){
  var newLI =document.createElement('li');
  newLI.textContent='new';
   list.appendChild(newLI);
});

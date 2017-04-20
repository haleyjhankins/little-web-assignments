var firstNameInput=document.querySelector('#first-name');
var lastNameInput= document.querySelector('#last-name');
var clearButton= document.querySelector('#clear');
var submitButton= document.querySelector('#submit');
var errors= document.querySelector('#error-messaging');

clearButton.addEventListener('click', function(evt){
  evt.preventDefault();

  firstNameInput.value= '';
  lastNameInput.value= '';
});

submitButton.addEventListener('click', function (evt){

  if (firstNameInput.value=='' || lastNameInput.value==''){
    console.log('preventing');
    errors.textContent= "WTF is wrong with you.";
    errors.style.display= 'block';
    evt.preventDefault();

  }
  else{
    console.log('clearly not preventing anything')
  }

});

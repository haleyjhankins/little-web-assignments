var firstName=document.querySelector('#first-name');
var lastName= document.querySelector('#last-name');

var page1Div= document.querySelector('#page1');
var page2Div= document.querySelector('#page2');
var page3Div= document.querySelector('#page3');
var nextPage1= document.querySelector('#nextPage1');
var nextPage2= document.querySelector('#nextPage2');
var previousPage1= document.querySelector('#previousPage1');
var previousPage2= document.querySelector('#previousPage2');
var submitButton= document.querySelector('#submit');

var ageRange1= document.querySelector('#zeroToTwenty');
var ageRange2= document.querySelector('#twentyOneToFourty');
var ageRange3= document.querySelector('#fourtyOnePlus');



// Page 1

 nextPage1.addEventListener('click', function (evt){
   evt.preventDefault();
   if (firstName.value===''|| lastName.value===''){
     alert('HEY! Fill out both your first AND last name. Gah.');
   }
   else {
     page1Div.style.display = 'none';
     page2Div.style.display = 'block';
   }

 });

// Page 2


nextPage2.addEventListener('click', function (evt){
  evt.preventDefault();
  if(ageRange1.checked || ageRange2.checked || ageRange3.checked){
    page2Div.style.display= 'none';
    page3Div.style.display= 'block';
  }
  else{
    alert('HEY! What did I tell you about leaving something blank? Sheesh!');
  }

});

previousPage1.addEventListener('click', function (evt){
  evt.preventDefault();
  page1Div.style.display= 'block';
  page2Div.style.display= 'none';
});


// Page 3

  previousPage2.addEventListener('click', function(evt){
    evt.preventDefault();
    page2.style.display= 'block'
    page3.style.display= 'none';
  });

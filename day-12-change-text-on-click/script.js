var theP= document.querySelector ('.the-paragraph');

theP.addEventListener('click', function(){
  console.log ('clicked the paragraph');

  theP.textContent = 'you clicked quite forcefully.';
})

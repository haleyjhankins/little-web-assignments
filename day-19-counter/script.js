var down = document.querySelector('.down');
var number= document.querySelector('div');
var up = document.querySelector('.up');
var counter = 0;

down.addEventListener ('click', function (){
  if (counter > 0){
  counter -=1 ;
  number.textContent= counter;
}
});


up.addEventListener('click', function(){
  counter+=1;
  number.textContent= counter;
});

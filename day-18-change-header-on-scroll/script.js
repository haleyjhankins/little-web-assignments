var nav= document.querySelector('nav');
// var isHidden= false;

window.addEventListener('scroll', function(){
  if (window.scrollY < 200){
    nav.style.backgroundColor= 'red';
  }

  else if(window.scrollY >= 200){
    nav.style.backgroundColor= 'blue';
  }
});

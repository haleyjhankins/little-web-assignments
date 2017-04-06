var nav= document.querySelector('nav');
// var isHidden= false;

window.addEventListener('scroll', function(){
  if (window.scrollY < 100){
    nav.style.backgroundColor= '#BDBFBD';
  }

  else if(window.scrollY >= 200 && window.scrollY < 300){
    nav.style.backgroundColor= '#3C4526';
  }

  else if(window.scrollY >= 300 ){
    nav.style.backgroundColor= 'rgba(175,156,132,0.5)';
  }
});

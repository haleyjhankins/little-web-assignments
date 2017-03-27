

var theParagraph = document.querySelector('p');
console.log (theParagraph);

theParagraph.textContent = 'PANTS';

var theSecond = document.querySelector('#second-yo');
theSecond.textContent = 'I am already hungry.';


var the OL = document.querySelector('ol');
console.log ('the children', theOL.children);

theOL.innerHTML='<li>lol</li>';



var allThePs = document.querySelectorAll('p');
console.log(allThePs);

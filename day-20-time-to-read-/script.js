var wordCount = document.querySelector('body').innerHTML.split(' ').length;
console.log(wordCount);

var time= Math.round(wordCount/230);
console.log(time);

document.querySelector('#widget').innerHTML='Read Time: ' + time + " minutes";

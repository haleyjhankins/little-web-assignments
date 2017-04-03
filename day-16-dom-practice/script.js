var clickMeButton = document.querySelector('#click-me');
var countDisplay = document.querySelector('#count-display');

var clickCount = 0;

clickMeButton.addEventListener('click', function(){

countDisplay.textContent= 'You clicked ' + clickCount + ' times';


  clickCount++ ;
  console.log ('click count', clickCount);
  //* You clicked # times.
});




var addToListButton=document.querySelector('#add-to-list');
var listOfStuff=document.querySelector('#list-of-stuff');

addToListButton.addEventListener('click', function(){
  //var currentHTML = listOfStuff.innerHTML;
  //currentHTML += '<li>steak</li>';
  //listOfStuff.innerHTML = currentHTML;

/*or
*/


var newItem= document.createElement('li');
newItem.textContent = 'steak';
newItem.classList.add('tasty');
listOfStuff.appendChild(newItem);

});



var favoriteFoodsList=document.querySelector('#favorite-foods');

var foods= ['hamburgers', 'gyros', 'burritos', 'queso', 'beer?'];

for (var i=0; i< foods.length; i++) {

  var li =document.createElement('li');
  li.textContent=foods[i];
  favoriteFoodsList.appendChild(li);

}



var favoriteBooksList=document.querySelector('#favorite-books');

var books = [
  {
    name: "Intelligent Person's Guide to Mud",
    author: "Frank Lyn",
    pageCount: 60
  },
  {
    name: 'Tao of Steak',
    author: 'Eric Sowell',
    pageCount: 135
  },
  {
    name: 'Books are Great',
    author: 'Guy Pants',
    pageCount: 190
  },
  {
    name: 'How to be a Sucker',
    author: 'Frank Lyn',
    pageCount: 83
  }
];








var pageTotal =0;

for (var i=0; i<books.length; i++){
  var li=document.createElement('li');
  li.textContent= books[i].name + ' ('+ books[i].author +' - ' + books[i].pageCount + ' pages)';

  favoriteBooksList.appendChild(li);

  pageTotal += books[i].pageCount;

}

var pageAvg= pageTotal/books.length;
console.log(pageAvg);

var averagePageNumber=document.querySelector('#avg-pages');

averagePageNumber.textContent='Average pages ' + pageAvg;

var clickMe= document.querySelector('#clickMe');
var searchQuery= document.querySelector('#search-query');
var textAreaTemplate= document.querySelector('#text-area-template').innerHTML;
var jokeGenerator= document.querySelector('h1');

var randomNumber;




var ajaxData;


$.ajax({
 url: 'http://api.icndb.com/jokes/'
})

.done(function(data) {
 ajaxData = data;
});

clickMe.addEventListener('click', function (){
  var randomNumber= Math.floor(Math.random() * ajaxData.value.length);
  var html= Mustache.render(textAreaTemplate, ajaxData.value[randomNumber]);

  if (searchQuery.value!==''){
    html=html.replace(/Chuck Norris/g, searchQuery.value);
  }


  jokeGenerator.innerHTML= html;
});

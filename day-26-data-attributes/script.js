var clickMe= document.querySelector("#click-me");
var swapiPeopleOL= document.querySelector('#swapi-people');
var listItemTemplateText= document.querySelector('#list-item-template').innerHTML;
var detailsDiv= document.querySelector('#details');
var detailTemplate= document.querySelector('#detail-template').innerHTML;

clickMe.addEventListener('click', function(){
  var att= clickMe.getAttribute('data-id');
  alert(att);
});

var ajaxData;

$.ajax({
  url: 'http://swapi.co/api/people'
})

.done(function(data){
  console.log(data);
  ajaxData= data;

// promise.done(function(data){  --->The above function replaces this!!!
  var html= '';
  for (var i=0; i<data.results.length; i++){

    html+= Mustache.render(listItemTemplateText, {
     index: i,
     name: data.results[i].name });
}

swapiPeopleOL.innerHTML=html;

});

swapiPeopleOL.addEventListener('click', function(evt){

  if(evt.target.tagName==='LI'){
    // alert(evt.target.getAttribute('data-index'));
    var index= evt.target.getAttribute('data-index');


    var person= ajaxData.results[index];
    console.log('person', person);

    var html= Mustache.render(detailTemplate, person);
    console.log(html);
    details.innerHTML= html;

  }



});

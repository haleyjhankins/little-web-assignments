var galleryListOL= document.querySelector('#gallery-list');
var galleryTemplate= document.querySelector('#gallery-template').innerHTML;
var detailTemplate= document.querySelector('#detail-template').innerHTML;
var detailDiv= document.querySelector('#details');

var ajaxData;

$.ajax({
  url:'api/pics'
})
.done(function(data){

  ajaxData= data;

  var html= '';
  for (var i=0; i<data.pictures.length; i++){

    html+= Mustache.render(galleryTemplate, {
      index: i,
      thumbnail: data.pictures[i].thumbnail,
      fullSize: data.pictures[i].fullSize,
      description: data.pictures[i].description
    });

  }
  galleryListOL.innerHTML=html;

});

galleryListOL.addEventListener('click', function(evt){
  var index= evt.target.getAttribute('data-index');

  var nakedJim= Mustache.render(detailTemplate, ajaxData.pictures[index]);

  detailDiv.innerHTML= nakedJim;
});

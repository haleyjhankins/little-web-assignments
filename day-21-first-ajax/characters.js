var characterList =document.querySelector('#character-list');
var template= document.querySelector('#list-template').innerHTML;



var promise = $.ajax({
  url: 'https://swapi.co/api/people'

});

promise.done(function(data){
  // characterList.innerHTML='';

  var totalHtml= '';


  for (var i=0; i < data.results.length; i++){
    // console.log('each object', data.results[i] + 'li');

    var html = Mustache.render(template, {
      name: data.results[i].name,
      gender: data.results[i].gender,
      birthYear: data.results[i].birth_year,
      height: data.results[i].height,
      mass: data.results[i].mass,
      skin: data.results[i].skin_color,
      eye: data.results[i].eye_color,
      hair: data.results[i].hair_color
    });

    totalHtml += html;




    // var anLI= document.createElement('li');
    // //  anLI.textContent = data.results[i].name + ' (' + data.results[i].gender + ') ';
    //
    // var nameH2= document.createElement('h2');
    // nameH2.textContent= data.results[i].name;
    // anLI.appendChild(nameH2);
    //
    // var genderDiv= document.createElement('div');
    // genderDiv.textContent= data.results[i].gender;
    // anLI.appendChild(genderDiv);
    //
    // var hairColorDiv= document.createElement('div');
    // hairColorDiv.textContent= data.results[i].hair_color;
    // anLI.appendChild(hairColorDiv);
    //
    // peopleList.appendChild(anLI);

  }

  characterList.innerHTML= totalHtml;

});

var promise = $.ajax({
  url: 'https://swapi.co/api/people'

});

var peopleList= document.querySelector('#people-list');


promise.done(function(data){
  console.log('got the data!' , data);
  console.log(data.count);
  console.log('results', data.results);

  for (var i=0; i < data.results.length; i++){
    console.log('each object', data.results[i] + 'li');

    var anLI= document.createElement('li');
    // anLI.textContent = data.results[i].name + ' (' + data.results[i].gender + ') ';

    var nameH2= document.createElement('h2');
    nameH2.textContent= data.results[i].name;
    anLI.appendChild(nameH2);

    var genderDiv= document.createElement('div');
    genderDiv.textContent= data.results[i].gender;
    anLI.appendChild(genderDiv);

    var hairColorDiv= document.createElement('div');
    hairColorDiv.textContent= data.results[i].hair_color;
    anLI.appendChild(hairColorDiv);

    peopleList.appendChild(anLI);

  }




});

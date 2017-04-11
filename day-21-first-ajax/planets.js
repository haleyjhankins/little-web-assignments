// PLANETS

var promise= $.ajax( {
  url: 'https://swapi.co/api/planets'

})

var planetList= document.querySelector('#planet-list');

promise.done(function(data){
  for (var i=0; i<data.results.length; i++){
    var li= document.createElement('li');
    var div= document.createElement('div');

    var planetName= document.createElement('h2');
    planetName.textContent=data.results[i].name;
    li.appendChild(planetName);

    var climate= document.createElement('div');
    climate.textContent='Climate: ' + data.results[i].climate;
    li.appendChild(climate);

    var terrain= document.createElement('div');
    terrain.textContent='Terrain: ' + data.results[i].terrain;
    li.appendChild(terrain);

    var population= document.createElement('div');
    population.textContent='Population: ' + data.results[i].population;
    li.appendChild(population);

    planetList.appendChild(li);
  };

});

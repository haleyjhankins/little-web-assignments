var promise= $.ajax( {
  url:'https://swapi.co/api/starships/'

})

var starshipList= document.querySelector('#starship-list');

promise.done(function(data){
  for (var i=0; i<data.results.length; i++){
    var li= document.createElement('li');
    var div= document.createElement('div');

    var shipName= document.createElement('h2');
    shipName.textContent=data.results[i].name;
    li.appendChild(shipName);
    starshipList.appendChild(li);


    var model= document.createElement('div');
    model.textContent='Model: ' + data.results[i].model;
    li.appendChild(model);

    var manufacturer= document.createElement('div');
    manufacturer.textContent='Manufacturer: ' + data.results[i].manufacturer;
    li.appendChild(manufacturer);

    var costInCredits= document.createElement('div');
    costInCredits.textContent='Cost in Credits: ' + data.results[i].cost_in_credits;
    li.appendChild(costInCredits);

    var maxAtmospheringSpeed= document.createElement('div');
    maxAtmospheringSpeed.textContent='Max Atmosphering Speed: ' + data.results[i].max_atmosphering_speed;
    li.appendChild(maxAtmospheringSpeed);

    var crew= document.createElement('div');
    crew.textContent='Crew Number: ' + data.results[i].crew;
    li.appendChild(crew);

    var passengers= document.createElement('div');
    passengers.textContent='Passenger Number: ' + data.results[i].passengers;
    li.appendChild(passengers);
  }


});

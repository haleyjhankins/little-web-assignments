var promise= $.ajax({
  url:'https://api.github.com/search/users?q=tmnt'
});

var listOfUsers= document.querySelector('#list-of-users');

promise.done (function(data){

  for (var i=0; i< data.items.length; i++){
    // console.log('each object', data.items[i] + 'li');
    var li= document.createElement('li');

    var loginH2= document.createElement('h2');
    loginH2.textContent=data.items[i].login;
    li.appendChild(loginH2);

  }
})

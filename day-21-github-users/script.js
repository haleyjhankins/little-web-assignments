var promise= $.ajax({
  url:'https://api.github.com/search/users?q=tmnt'
});

var listOfUsers= document.querySelector('#list-of-users');

promise.done(function(data){

  for (var i=0; i< data.items.length; i++){
    //  console.log('each object', data.items[i] + 'li');
    var li= document.createElement('li');

    var image= document.createElement('img');
    image.src=data.items[i].avatar_url;
    li.appendChild(image);

    var login= document.createElement('h2');
    login.textContent=data.items[i].login;
    li.appendChild(login);

    var url= document.createElement('a');
    url.href=data.items[i].html_url;
    url.textContent='Profile'
    li.appendChild(url);


    listOfUsers.appendChild(li);

  }
});

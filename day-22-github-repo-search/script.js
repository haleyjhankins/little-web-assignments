var listOfRepos = document.querySelector('#repos');
var searchQuery = document.querySelector('#search-query');


searchQuery.addEventListener('keyup', function(evt) {

  if (evt.keyCode !== 13) {
    return;
  }

  listOfRepos.innerHTML = '';


  var promise= $.ajax( {
    url: 'https://api.github.com/search/repositories?q=' + searchQuery.value
  });

  promise.done(function(data) {
    for (var i=0; i <data.items.length; i++){
      var li= document.createElement('li');

      var img= document.createElement ('img');
      img.src= data.items[i].owner.avatar_url;
      li.appendChild(img);

      var repoName= document.createElement('a');
      repoName.href='https://github.com/' + data.items[i].full_name;
      repoName.target= '_blank';
      repoName.textContent = data.items[i].name;
      li.appendChild(repoName);


      var login= document.createElement('a');
      login.href=  data.items[i].owner.html_url;
      login.target= '_blank';
      login.textContent = data.items[i].owner.login;
      li.appendChild(login);

      listOfRepos.appendChild(li);
    }

  });

});

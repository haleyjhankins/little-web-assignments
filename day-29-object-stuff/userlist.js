// Below is an iffy. Iffys protect us. ? No longer writing tothe global scope

(function(){

  var userList= document.querySelector('#user-list');

  $.ajax({
    url: 'https://api.github.com/search/users?q=tmnt'
  }).
  done(function(data){

    data.items.forEach(function(user) {
      var li= document.createElement('li');
      li.textContent= user.login;
      console.log(user);
      li.setAttribute('data-repos', user.repos_url);
      userList.appendChild(li);
    });


  });

  userList.addEventListener('click', function (evt) {
    if (evt.target.tagName==='LI') {
      var repoUrl= evt.target.getAttribute('data-repos');
      console.log(repoUrl);
      GithubApp.loadThemRepos(repoUrl);
    }
  });


})();

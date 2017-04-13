var listOfRepos = document.querySelector('#repos');
var searchQuery = document.querySelector('#search-query');
var previousButton= document.querySelector('#previous-button');
var nextButton= document.querySelector('#next-button');

var page = 1;
var totalResults;
var pageCount;


function makeAjaxCall() {
  listOfRepos.innerHTML = '';

  var promise= $.ajax( {
    url: 'https://api.github.com/search/repositories?q=' + searchQuery.value
  });

  promise.done(function(data) {

    totalResults= data.total_count;
    pageCount= Math.ceil(totalResults /30);

    for (var i=0; i < data.items.length; i++){
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


    if (page === 1) {
          previousButton.style.display = 'none';
        }
        else {
          previousButton.style.display = 'inline';
        }

        if (page >= pageCount) {
          nextButton.style.display = 'none';
        }
        else {
          nextButton.style.display = 'inline';
        }


      });
    }



searchQuery.addEventListener('keyup', function(evt) {

  if (evt.keyCode !== 13) {
    return;
  }

  makeAjaxCall();
});

nextButton.addEventListener('click', function() {
  //increment number
  page += 1;
  //do ajax call again
  makeAjaxCall();
});

previousButton.addEventListener('click', function() {
  page -= 1;
  makeAjaxCall();
});

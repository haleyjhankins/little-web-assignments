var listOfRepos = document.querySelector('#repos');
var searchQuery = document.querySelector('#search-query');
var previousButton= document.querySelector('#previous-button');
var nextButton= document.querySelector('#next-button');
var count= document.querySelector('#count');
var template= document.querySelector('#list-template').innerHTML;

var page = 1;
var totalResults;
var pageCount;


function makeAjaxCall() {
  listOfRepos.innerHTML = '';

  var promise= $.ajax( {
    url: 'https://api.github.com/search/repositories?q=' + searchQuery.value + '&page=' + page
  });

  var totalHtml= '';

  promise.done(function(data) {

    totalResults= data.total_count;
    pageCount= Math.ceil(totalResults /30);
    count.textContent='Page ' + page;
    count.style.display= 'inline';

    for (var i=0; i < data.items.length; i++){
      var html= Mustache.render(template,{
        image: data.items[i].owner.avatar_url,
        full_name: data.items[i].name,
        login: data.items[i].owner.login
      });

      totalHtml+= html;


listOfRepos.innerHTML= totalHtml;

};



      // var li= document.createElement('li');
      //
      // var img= document.createElement ('img');
      // img.src= data.items[i].owner.avatar_url;
      // li.appendChild(img);
      //
      // var repoName= document.createElement('a');
      // repoName.href='https://github.com/' + data.items[i].full_name;
      // repoName.target= '_blank';
      // repoName.textContent = data.items[i].name;
      // li.appendChild(repoName);
      //
      //
      // var login= document.createElement('a');
      // login.href=  data.items[i].owner.html_url;
      // login.target= '_blank';
      // login.textContent = data.items[i].owner.login;
      // li.appendChild(login);
      //
      // listOfRepos.appendChild(li);
    });


    if (page === 1) {
          previousButton.style.display = 'inline';
          previousButton.style.color= 'grey';
        }
        else {
          previousButton.style.color= 'red';

        }

        if (page >= pageCount) {
          nextButton.style.color= 'grey';

        }
        else {
          nextButton.style.display = 'inline';
          nextButton.style.color= 'red';

        }


      };
    



searchQuery.addEventListener('keyup', function(evt) {

  if (evt.keyCode !== 13) {
    return;
  }

  makeAjaxCall();
});

nextButton.addEventListener('click', function() {

  //increment number
  page += 1;
  if(page >=pageCount){
    page=pageCount;
  }
  //do ajax call again
  makeAjaxCall();
});

previousButton.addEventListener('click', function() {
  page -= 1;
  if (page<=1){
    page=1;
  }
  makeAjaxCall();
});

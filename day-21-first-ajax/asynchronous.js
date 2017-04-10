// This is why ajax is Asynchronous!

console.log('before ajax call');

var promise = $.ajax({
  url: 'https://swapi.co/api/people'

});

console.log('after ajax call');

promise.done(function(){
  console.log('got the data!');
});

console.log('after setting up done function');

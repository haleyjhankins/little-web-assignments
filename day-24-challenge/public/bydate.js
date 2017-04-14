$.ajax({
  url: '/api/data'

})
.done(function (data){
  var dates= [];
  for (var i=0; i<data.violations.length; i++ ){
    if (dates.indexOf(data.violations[i].date)===-1){
      dates.push(data.violations[i].date);
    }
  }
  // console.log(dates);

  var totalHtml= '';
  for (var i=0; i<dates.length; i++){
    totalHtml+= Mustache.render('<li>{{date}}</li>', {date: dates[i]});
  }
  var ol= document.querySelector('#dates');
  ol.innerHTML=totalHtml;
  console.log(totalHtml);
});









function putItOnThePage(arr){

  var template= document.querySelector('#row-template').html;

  tbody.innerHTML= '';

  var totalHtml= '';

  for (vari=0; i< arr.length; i++){
    var html= Mustache.render(template, arr[i]);
    totalHtml +=html;
  }

  tbody.innerHTML= totalHtml;

}



// mustache.render('<tr><td>{{date}}</tr></td><tr><td>{{violation}}</tr></td><', arr[i]);
// console.log(html);

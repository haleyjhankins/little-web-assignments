var fs= require('fs');

fs.readFile('Most-Recent-Cohorts-Scorecard-Elements.csv', 'utf-8', function(err, data){

  var lines= data.split('\r\n');
  // console.log(lines);

  for (var i=1; i<lines.length-1; i++){
    var line= lines[i];
    var pieces= line.split(',');
    // console.log(pieces[3],pieces[32]);

    if (pieces[32] ==='NULL'){
      continue;
    }
    else{
      console.log(pieces[3],pieces[32]);
    }
  }

});

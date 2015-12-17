
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ec2-52-90-91-80.compute-1.amazonaws.com',
  user     : 'sindhuja',
  password : 'sindhuja',
});

connection.connect(function(err) {
  console.log(err);
  
  console.log("hello world!");
});


// queries:

var query = connection.query('select count_gumballs, model_number, serial_number  from gumball',  function(err, result) {
   console.log(err);
});
console.log(query.sql); 

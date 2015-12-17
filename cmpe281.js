/*
 * Copyright 2013. Amazon Web Services, Inc. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ec2-52-90-91-80.compute-1.amazonaws.com',
  user     : 'sindhuja',
  password : 'sindhuja',
});

connection.connect(function(err) {
  console.log(err);
  // connected! (unless `err` is set)
  console.log("hello world!");
});


// queries:

var query = connection.query('select * from gumball',  function(err, result) {
   console.log(err);
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
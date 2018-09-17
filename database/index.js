var mysql = require('mysql');


var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "holacode",
 database: "chilango"
});
var selectAll = function(cb) {
 con.query('SELECT * FROM comments', (err, results, fields)=> {
   if(err) {
     cb(err, null);
   } else {
     cb(null, results);
   }
 });
};
var insertOne = function(description,description2, cb) {
 con.query('INSERT INTO comments (description, description2) VALUES (?, ?)',
   [description, description2], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};
//avobe is for forum below is for likes
var selectLikes = function(cb) {
 con.query('SELECT * FROM likesbox', (err, results, fields)=> {
   if(err) {
     cb(err, null);
   } else {     
     cb(null, results);
   }
 });
};
var insertLikes = function(likes, cb) {
 con.query('INSERT INTO likesbox (likes) VALUES (?)',
   [likes], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};
var getTotalLikes = function(likes, cb){
  con.query("SELECT likes FROM likesbox ORDER BY id DESC LIMIT 1;",
    (err,results,fields)=>{
      if(err){
        cb(err,null);
      }else{
        cb(results);
      }
    });
};


module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.selectLikes = selectLikes;
module.exports.insertLikes = insertLikes;
module.exports.getTotalLikes = getTotalLikes;

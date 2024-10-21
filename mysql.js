const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'json-wbt',
    port : '3306',
    password : ''
});

connection.connect();
module.exports=connection;
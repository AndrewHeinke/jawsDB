// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Njmitx123",
        database: "starwars"
    },
    jawsDB: {
      port: 3306,
      host: 'nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'wu5fcylkgluuxtg4',
      password: "ira1e7suo3jy0o0g",
      database: "iz9hj69nzyhuy7jn"
    }
};

var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

const mysql = require('mysql');

function dbConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'RJAH#1234@md',
        database: 'job_portal'
    })
    connection.connect();
        return connection;
}

module.exports = dbConnection;
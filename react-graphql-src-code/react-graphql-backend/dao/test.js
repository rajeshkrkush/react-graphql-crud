'use strict'
const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: "test" });

let mysql = require('mysql');
const connectionParam = { host: "localhost", user: "root", password: "root", database: "reactDb" };
//log.info("connectionParam: ", connectionParam);
let connection = mysql.createConnection(connectionParam);


connection.connect();

function createDBObjects() {
    let createUserTableStmt = `CREATE TABLE IF NOT EXISTS reactDb.customer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(50),
    lastUpdatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP     

  )`

    connection.query(createUserTableStmt, [], function (err, rows, fields) {
        if (err) {
            log.error('DB response err is: ', JSON.parse(JSON.stringify(err)));
        }
        if (rows) {
            log.info('user table created. DB response : ', rows);
        }
    });
}

createDBObjects();

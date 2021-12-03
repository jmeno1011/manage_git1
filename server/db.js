const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'meno-db.czaumbq0dnb0.ap-northeast-2.rds.amazonaws.com',
    user: 'meno1011',
    password: 'Zxc12512412!',
    database: 'maintest',
    // port : process.env.DB_PORT,
});

module.exports = db;
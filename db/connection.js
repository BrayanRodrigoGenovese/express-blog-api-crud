const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Blog_Posts",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connesso al database MySQL!");
});

module.exports = connection;

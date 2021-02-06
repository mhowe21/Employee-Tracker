const mysql = require("mysql2");
require("dotenv").config({ path: "../.env" });

console.log(process.env.DB_HOST);
console.log(process.env.DB_PASS);
console.log(process.env.DB_USER);

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  // Your MySQL username
  user: process.env.DB_USER,
  // Your MySQL password
  password: process.env.DB_PASS,
  database: "employeesDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;

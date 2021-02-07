const prompts = require("./lib/prompts");
const cTable = require("console.table");
require("dotenv").config();

let p = new prompts();
const mysql = require("mysql2");
require("dotenv").config({ path: "../.env" });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  // Your MySQL username
  user: process.env.DB_USER,
  // Your MySQL password
  password: process.env.DB_PASS,
  database: "employeesdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

getInput();

async function getInput() {
  let givenOption = await p.startOptions();
  console.log(givenOption);
  if (givenOption.options == "View All Roles") {
    const query = connection.query("SELECT * FROM role;", (err, res) => {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
    console.log(query.sql);
  }
  if (givenOption.options == "View All Departments") {
    const query = connection.query("SELECT * FROM department;", (err, res) => {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
    console.log(query.sql);
  }
  if (givenOption.options == "View All Employees") {
    const query = connection.query("SELECT * FROM employee;", (err, res) => {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
    console.log(query.sql);
  }
  if (givenOption.options == "Add a Department") {
    let department = await p.newDepartmentPrompts();

    const query = connection.query(
      "INSERT INTO department (departmentName) VALUES(?);",
      [department.department],
      function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
      }
    );
    console.log(query.sql);
  }
  if (givenOption.options == "Add a Role") {
    let role = await p.newRole();

    const query = connection.query(
      "INSERT INTO role(title,salary,department_id) VALUES(?,?,?);",
      [role.title, role.salary, role.department],
      function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
      }
    );
    console.log(query.sql);
  }
  if (givenOption.options == "Add an Employee") {
    let employee = await p.newEmployee();

    const query = connection.query(
      "INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES(?,?,?,?)",
      [
        employee.firstName,
        employee.lastName,
        employee.roleID,
        employee.managerID,
      ],
      function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
      }
    );
  }
  if (givenOption.options == "Update an Employee Role") {
    let updateEmployee = await p.updateEmployee();

    const query = connection.query(
      "UPDATE employee SET ? WHERE ?",
      [
        {
          first_name: updateEmployee.first_name,
          last_name: updateEmployee.last_name,
          role_id: updateEmployee.role_id,
          manager_id: updateEmployee.manager_id,
        },
        {
          id: updateEmployee.id,
        },
      ],
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " employees updated!\n");
        connection.end();
      }
    );
  }
}

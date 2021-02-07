const inquirer = require("inquirer");

class inputs {
  constructor() {}

  async startOptions() {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: "list",
            name: "options",
            message: "Select an option:",
            choices: [
              "View All Departments",
              "View All Roles",
              "View All Employees",
              "Add a Department",
              "Add a Role",
              "Add an Employee",
              "Update an Employee Role",
              "Exit",
            ],
          },
        ])
        .then((answers) => {
          //console.log(JSON.stringify(answers));
          resolve(answers);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  async newDepartmentPrompts() {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            type: "input",
            name: "department",
            message: "Enter Department you want to add",
          },
        ])
        .then((answers) => {
          if (answers) {
            resolve(answers);
          } else {
            return null;
          }
        });
    });
  }
  async newRole() {
    let quesitons = [
      {
        type: "input",
        name: "title",
        message: "What is the role title?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the role salary?",
      },
      {
        type: "input",
        name: "department",
        message: "What is the role department id?",
      },
    ];
    return new Promise((resolve, reject) => {
      inquirer.prompt(quesitons).then((anwsers) => {
        if (anwsers) {
          resolve(anwsers);
        }
      });
    });
  }
}

module.exports = inputs;

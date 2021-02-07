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
  async newEmployee() {
    let quesitons = [
      {
        type: "input",
        name: "firstName",
        message: "What is the Employee's First Name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the Emplyoees's Last Name?",
      },
      {
        type: "input",
        name: "roleID",
        message: "What is the Employee Role ID?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the Employee's Manager ID",
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
  async updateEmployee() {
    let questions = [
      {
        type: "input",
        name: "id",
        message: "Select Employee ID to update",
      },
      {
        type: "input",
        name: "first_name",
        message: "Enter Employee First Name",
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter Employee Last Name",
      },
      {
        type: "input",
        name: "role_id",
        message: "Enter Employee Role ID",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Enter Employee Manager ID",
      },
    ];
    return new Promise((resolve, reject) => {
      inquirer.prompt(questions).then((anwsers) => {
        resolve(anwsers);
      });
    });
  }
}

module.exports = inputs;

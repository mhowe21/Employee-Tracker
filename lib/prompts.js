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
}

module.exports = inputs;

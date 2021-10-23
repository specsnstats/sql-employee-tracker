const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require("console.table");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db',
  },
  console.log(`Connected to the employees_db database.`)
);

const main = ()=>{
    inquirer
    .prompt({
        type: 'list',
        message: 'Select Option:',
        name:"choices",
        choices:[
            {name:"View All Departments"}, 
            {name: "View All Roles"},
            {name: "View All Employees"}, 
            {name: "Add A Department"}, 
            {name: "Add A Role"}, 
            {name: "Add An Employee"}, 
            {name: "Update an Employee Role"}, 
            {name: "Quit"}
        ]
    })
    .then(({choices})=>{
        if (choices === 'View All Departments') {
            db.query('SELECT * FROM departments', (err, data) => {
              if (err) {
                throw err;
              } else {
                console.table("DEPARTMENTS", data)
                main()
              }
            });
          } else if (choices === 'View All Roles') {
            db.query('SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM roles JOIN departments ON department_id = departments.id', (err, data) => {
                if (err) {
                  throw err;
                } else {
                  console.table("ROLES", data);
                  main()
                }
              });
          } else if (choices === 'View All Employees') {
            db.query('SELECT employees.id AS id, first_name, last_name, title, departments.name AS department, salary, manager_id AS manager FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id', (err, data) => {
                if (err) {
                  throw err;
                } else {
                  console.table("EMPLOYEES", data);
                  main()
                }
              });
          } else if (choices === 'Add A Department') {
            inquirer.prompt([
                {
                    type:"input",
                    message: "Department Name:",
                    name: "name"
                }
            ])
            .then(({name})=>{
                db.query(`INSERT INTO departments (name) VALUES (?)`, name, (err, data)=>{
                    if (err){
                        throw err
                    } else {
                        console.log("Department Added!")
                        main()
                    }
                }
            )})
          } else if (choices === "Add A Role"){
              inquirer.prompt([
                  {
                      type:"input",
                      message:"Role Title:",
                      name: "title"
                  },
                  {
                      type:"input",
                      message:"Salary:",
                      name:"salary"
                  },
                  {
                      type:"input",
                      message:"Department ID:",
                      name:"department"
                  }
              ])
              .then(({title, salary, department})=>{
                  db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, department], (err, data)=>{
                      if (err){
                          throw err
                      } else {
                          console.log("Role Added!")
                          main()
                      }
                  })
              })
          } else if(choices === "Add An Employee"){
              inquirer.prompt([
                  {
                      type:"input",
                      message:"First Name:",
                      name:"firstname"
                  },
                  {
                      type:"input",
                      message:"Last Name:",
                      name:"lastname"
                  },
                  {
                      type:"input",
                      message:"Role ID:",
                      name:"role"
                  },
                  {
                      type:"input",
                      message: "Manager ID:",
                      name:"manager"
                  }
              ])
              .then(({firstname, lastname, role, manager})=>{
                  db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)`, [firstname, lastname, role, manager], (err, data)=>{
                      if (err){
                          throw err
                      } else{
                          console.log("Employee Added!")
                          main()
                      }
                  })
              })
          } else if (choices === "Update an Employee Role"){
              inquirer.prompt([
                  {
                      type:"input",
                      message: "Employee ID:",
                      name:"id"
                  },
                  {
                      type:"input",
                      message:"New Role ID:",
                      name:"role"
                  }
              ])
              .then(({id, role})=>{
                  db.query(`UPDATE employees SET role_id = ? WHERE employees.id=?`, [role, id], (err, data)=>{
                      if (err){
                          throw err
                      } else{
                          console.log("Employee Role Updated!")
                          main()
                      }
                  })
              })
          }
          else {
              console.log("Good-Bye!")
              db.end();
          }
        });
      }
main();
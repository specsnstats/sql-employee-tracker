# SQL Employees Tracker

## Table of Contents
 
- [Project Description](./newREADME#project-description)
- [Installation Guide](./newREADME#installation-guide)
- [Usage Information](./newREADME#usage-information)
- [Questions](./newREADME#questions)

## Project Description:
The SQL Employees Tracker is used to keep a database of all your departments, roles, and employees via MySQL databases. 

## Installation Guide:

You need to have Node.js and MySQL installed in order to use this app.

To install, simply clone the repository, open it up, and then install the packages by typing ```npm i``` in the terminal. 

Once installation is finished, navigate to the db folder in your command line, log into your MySQL and run the schema file by inputting ```source schema.sql``` into the terminal. This will create the database ```employees_db``` where all your employee information will be stored. 

[NOTE: IF YOU ALREADY HAVE A DATABASE NAMED ```employees_db```, THIS WILL OVERWRITE IT!]

If you need to name the database something other than ```employees_db```, you will have to go into the ```server.js``` and ```schema.sql``` files and replace all instances of ```employees_db``` with whatever you want the database to be named. 

## Usage Information:
Once the program is successfully installed, type ```node server.js```.

This will run the program by giving you the Main Menu, where you will have the option to view any of the three tables (Departments, Roles, Employees), insert new Departments, Roles, or Employees. 

You also have the ability to update/change the roles of current employees.

After every action, you will be taken back to the Main Menu, where you can make another selection. 

You can close the program by selecting Quit.

## License Type:
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

## Questions:
specsnstats

specsnstats@gmail.com
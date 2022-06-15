const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require("./lib/manager");
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const render = require('./lib/renderhtml');

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
    },

    {
        type:"input",
        name: "id",
        message: "What is the employee's id?",
    },
    {
        type:"input",
        name:"email",
        message: "What is the employee's email?",
    },
    {
        type:"list",
        name:"role",
        message:"What is the employee's role?",
        choices:["Manager", "Engineer", "Intern"],
    }
];


const team = [];

const createTeam = () => {
    inquirer
        .prompt(questions)
        .then((userChoice) => {
            switch(userChoice.role){
                case "Manager": 
                    addManager(userChoice)
                    break;
                case "Intern":
                    addIntern(userChoice)
                    break;
                case "Engineer":
                    addEngineer(userChoice)
                    break;
            }
        })
        .catch(err => {
            console.log(err);
        })
 };

 function addManager(data){
    inquirer.prompt([{
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
    },
    {
        type:"list",
        name:"add",
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"]
    }
])
    .then((answers) => {
        const manager = new Manager(
            data.name, data.id, data.email, answers.officeNumber
        );
        team.push(manager);
        if(answers.add === "Yes"){
            createTeam()
        }else{
            writeHtml(render(team));
        }
    })

    .catch(err => {
        console.log(err);
    })
 };

 function addIntern(data){
    inquirer.prompt([{
        type: "input",
        name: "school",
        message: "What is the name of their school?",
    },
    {
        type:"list",
        name:"add",
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"]
    }
])
    .then((answers) => {
        const intern = new Intern(
            data.name, data.id, data.email, answers.school
        );
        team.push(intern);
        if(answers.add === "Yes"){
            createTeam()
        }else{
            writeHtml(render(team));
        }
    })
    .catch(err => {
        console.log(err);
    })
 };

 function addEngineer(data){
    inquirer.prompt([{
        type: "input",
        name: "username",
        message: "What is their github username?",
    },
    {
        type:"list",
        name:"add",
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"]
    }
])
    .then((answers) => {
        console.log (answers.username)
        const engineer = new Engineer(
            data.name, data.id, data.email, answers.username
        );
        team.push(engineer);
        if(answers.add === "Yes"){
            createTeam()
        }else{
            writeHtml(render(team));
        }
    })

    .catch(err => {
        console.log(err);
    })
    
 };

const writeHtml = data => {
    fs.writeFile('./dist/team.html', data, err => {
        if(err){
            console.log(err);
            return;
        } else {
                console.log("Your team profile has been successfully created! Check out team.html")
            }
        }
    );
};


 createTeam();


//TODO:



// - make tests and make sure they work
// - Fix the css stuff so it looks nice
// - Readme and video

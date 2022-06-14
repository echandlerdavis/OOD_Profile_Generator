const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');




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
//         .then(switch(){
//             case (questions.role === "Manager"){
//                 inquirer 
//                 .prompt(
//                     [{
//                         type: "input",
//                         name: "officeNumber",
//                         message: "What is their office number?",
//                     }
        
//                     ]
//                 )
//             }
//         })
// }

// if (questions.role === "Manager") {
//     inquirer 
//         .prompt(
//             [{
//                 type: "input",
//                 name: "officeNumber",
//                 message: "What is their office number?",
//             }

//             ]
//         )
 }

// when v. switch statments
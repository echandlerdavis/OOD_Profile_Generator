
const path = require("path");
const fs = require("fs");
const Engineer = require("./engineer");

const generateTeam = team => {
    const generateManager = manager => {
        return ` <card class="card">
        <section id="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
        </section>
        <section id="card-text">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href= "mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </section>
    </card>`
    };

const generateIntern = intern => {
        return ` <card class="card">
        <section id="card-header">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </section>
        <section id="card-text">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href= "mailto:${intern.email}">${intern.email}</a></p>
            <p>School Name: ${intern.schoolName}</p>
        </section>
    </card>`
    };

const generateEngineer = engineer => {
        return ` <card class="card">
        <section id="card-header">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
        </section>
        <section id="card-text">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href= "mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></p>
        </section>
    </card>`
    };

 const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
  );
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
  );

  return html.join('')
}


module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" type="text/css" href="./styles.css"/>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        ${generateTeam(team)}
    </body>
    </html>`
}
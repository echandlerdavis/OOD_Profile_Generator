
const path = require("path");
const fs = require("fs");

const generateTeam = team => {
    const generateManager = manager => {
        return ` <div class="card">
        <section id="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
        </section>
        <section id="card-text">
            <p>ID: ${manager.id}</p>
            <p>Email: <a id="link" href= "mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </section>
    </div>`
    };

const generateIntern = intern => {
        return ` <div class="card">
        <section id="card-header">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </section>
        <section id="card-text">
            <p>ID: ${intern.id}</p>
            <p>Email: <a id="link" href= "mailto:${intern.email}">${intern.email}</a></p>
            <p>School Name: ${intern.school}</p>
        </section>
    </div>`
    };

const generateEngineer = engineer => {
        console.log(engineer.username);
        return `<div class="card">
        <section id="card-header">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
        </section>
        <section id="card-text">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a id="link" href= "mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a id="link" href="https://github.com/${engineer.username}" target="_blank">${engineer.username}</a></p>
        </section>
    </div>`
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

  return html.join("")
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
        <main>
        ${generateTeam(team)}
        </main>
    </body>
    </html>`
}

const path = require("path");
const fs = require("fs");

const generateTeam = team => {
    const generateManager = manager => {
        return ` <card class="card">
        <section id="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
        </section>
        <section id="card-text">
            <p>ID: id</p>
            <p>Email: <a>email</a></p>
            <p>Office Number: number</p>
        </section>
    </card>`
    };

    const html = [];

    html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
//   html.push(team
//     .filter(employee => employee.getRole() === "Engineer")
//     .map(engineer => renderEngineer(engineer))
//   );
//   html.push(team
//     .filter(employee => employee.getRole() === "Intern")
//     .map(intern => renderIntern(intern))
//   );

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
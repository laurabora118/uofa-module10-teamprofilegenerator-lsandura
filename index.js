const inquirer = require('inquirer');
const fs = require('fs');

// const inquirer = require('inquirer');
// const fs = require('fs');
// const helper = require('../src-template-helper-code'); 
// //myclasses
// // const Employee = require('../lib-pages-classes/engineerOption');
// const EngineerOption = require('../lib-pages-classes/engineerOption');
// const InternOption = require('../lib-pages-classes/internOption');
// const ManagerOption = require('../lib-pages-classes/managerOption');
// const Menu = require('../lib-pages-classes/menuOption')
// // for answers to questions
// const teamAnswers = [];

const generateRoster = ({ mname, mid, memail, mphone, ename, eid, eemail, egithub, iname, iid, iemail, ischool }) =>
 `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <header><div class="sheet"><div class="title"><h2 class="title">Team Roster</h2></div></div>
  </header>    
  <body>
      <span class="manager"><div class="card">
      <div class="container">
      <div class="employee"><h2 class="name">Name: ${mname} </h2></div>
      <div class="information"><h3>Contact Information:</h3></div>
              <ul class="id">ID - <a>${mid}</a></ul>
              <ul class="email">Email: <a href=">${memail}">${memail}</a></ul>
              <ul class="number">Office number: <a>${mphone}</a></ul>
      </div></div></div></div><span>
          <span class="engineer"><div class="card">
              <div class="container">
              <div class="engineer"><h2 class="ename">Engineer Name: ${ename}</h2></div>
              <div class="information"><h3>Contact Information:</h3></div>
                      <ul class="id">ID: <a>${eid}</a></ul>
                      <ul class="email">Email: <a href="mailto:${eemail}">${eemail}</a></ul>
                      <ul class="number">GitHub: <a>${egithub}</a></ul>
              </div></div></div></div><span>
                  <span class="intern"><div class="card">
                      <div class="container">
                      <div class="intern"><h2 class="ename">Intern Name: ${iname} </h2></div>
                      <div class="information"><h3>Contact Information:</h3></div>
                              <ul class="id">ID: <a>${iid}</a></ul>
                              <ul class="email">Email: <a href="mailto:${iemail}">${iemail}</a></ul>
                              <ul class="number">GitHub: <a>${ischool}</a></ul>
            <body/>
`;
//removed logic function until working to demonstrate questions for video
// const start = async() => {
// answers}
  inquirer.prompt([
    {
    type: 'list',
    name: 'mgrengintend',
    message: 'Add Manager, Engineer or Intern or Exit?',
    choices: ["Manager","Engineer","Intern","Exit"]
  },
// ])
    //   if (answers === 'Manager') {const managerOption = answers.prompt([
        {
          type: 'input',
          name: 'mname',
          message: 'Manager name',
        },
        {
          type: 'input',
          name: 'mid',
          message: 'Managers Employee ID?',
        },
        {
          type: 'input',
          name: 'memail',
          message: 'Managers email address',
        },
        {
          type: 'input',
          name: 'mnumber',
          message: 'Managers Office Phone number',
        },
    //   ])
    //   if (answers === 'Engineer') {const engineerOption = answers.prompt([
        {
        type: 'input',
        name: 'ename',
        message: 'Engineer name',
      },
      {
        type: 'input',
        name: 'eid',
        message: 'Engineers Employee ID?',
      },
      {
        type: 'input',
        name: 'eemail',
        message: 'Engineers email address',
      },
      {
        type: 'input',
        name: 'egithub',
        message: 'Engineers GitHub'
      },
    //   ])
    //   if (answers === 'intern') {const internOption = answers.prompt([
        // inquirer.prompt
        // ( 
        {
            type: 'input',
            name: 'iname',
            message: 'Interns name',
        },
        {
            type: 'input',
            name: 'iid',
            message: 'Interns ID?',
        },
        {
            type: 'input',
            name: 'iemail',
            message: 'Interns email address',
        },
        {
            type: 'input',
            name: 'ischool',
            message: 'Interns School',
        }
      ])
      .then((answers) => {
        const teamRoster = generateRoster(answers);
    
        fs.writeFile('index.html', teamRoster, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      });
    //   if (answers === 'intern') {const helper = answers.prompt
//         return thestart()
//     }
//     return teamRoster();
// }

// thestart();
// function teamRoster(){
//   fs.promises.writeFileSync(".//dist-render-generate", Roster(teamAnswers),
//   );
// }

// if else if else
// //       }
// //       else if (answer === "Engineer") {engineerOption();
// //       }
// //       else if (answer === "Intern") {internOption();
// //       }        
// //       else if (answer === 'Exit') {() => fs.writeFile('index.html', Roster, (err) =>
// //       err ? console.log(err) : console.log('Successfully created index.html!'));
// //     };
// // ])
// // 
  

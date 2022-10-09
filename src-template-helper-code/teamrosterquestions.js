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

// const start = async() => {
// answers}
//   inquirer.prompt([
//     {
//     type: 'list',
//     name: 'mgrengintend',
//     message: 'Add Manager, Engineer or Intern or Exit?',
//     choices: ["Manager","Engineer","Intern","Exit"]
//   }
// ])

//       if (answers === 'Manager') {const managerOption = answers.prompt([
//         {
//           type: 'input',
//           name: 'mname',
//           message: 'Manager name',
//         },
//         {
//           type: 'input',
//           name: 'mid',
//           message: 'Managers Employee ID?',
//         },
//         {
//           type: 'input',
//           name: 'memail',
//           message: 'Managers email address',
//         },
//         {
//           type: 'input',
//           name: 'mnumber',
//           message: 'Managers Office Phone number',
//         }
//       ])

//       if (answers === 'Engineer') {const engineerOption = answers.prompt([
//         {
//         type: 'input',
//         name: 'ename',
//         message: 'Engineer name',
//       },
//       {
//         type: 'input',
//         name: 'eid',
//         message: 'Engineers Employee ID?',
//       },
//       {
//         type: 'input',
//         name: 'eemail',
//         message: 'Engineers email address',
//       },
//       {
//         type: 'input',
//         name: 'egithub',
//         message: 'Engineers GitHub'
//       }
//       ])

//       if (answers === 'intern') {const internOption = answers.prompt([
//         inquirer.prompt( 
//         {
//             type: 'input',
//             name: 'iname',
//             message: 'Interns name',
//         },
//         {
//             type: 'input',
//             name: 'iid',
//             message: 'Interns ID?',
//         },
//         {
//             type: 'input',
//             name: 'iemail',
//             message: 'Interns email address',
//         },
//         {
//             type: 'input',
//             name: 'ischool',
//             message: 'Interns School',
//         }
//       ])

//       if (answers === 'intern') {const helper = answers.prompt
//         return thestart()
//     }
//     return teamRoster();
// }

// thestart();
// function teamRoster(){
//   fs.promises.writeFileSync(".//dist-render-generate", Roster(teamAnswers),
//   );
// }

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
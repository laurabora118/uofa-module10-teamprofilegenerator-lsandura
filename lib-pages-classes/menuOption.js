class Menu {
    constructor(managerOption, engineerOption, memail, internOption, generate) {
        this.managerOption = "Manager";
        this.engineerOption = "Engineer";
        this.internOption = "internOption" 
        this.generate = "exit";
    }


    
//     //code placeholder to see for writing the test
//   inquirer.prompt(
//     {
//     type: 'list',
//     name: 'mgrengintend',
//     message: 'Add Manager, Engineer or Intern or Exit?',
//     choices: ["Manager","Engineer","Intern","Exit"]
//   }
//   ).then(answer => {
//       if(answer === 'Manager') {managerOption();
//       }
//       else if (answer === "Engineer") {engineerOption();
//       }
//       else if (answer === "Intern") {internOption();
//       }        
//       else if (answer === 'Exit') {generate() => fs.writeFile('index.html', Roster, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!'));
//     };
class Manager {
    constructor(mname, mid, memail, mphone) {
        this.mname = mname;
        this.mid = mid;
        this.memail = memail;
        this.mphone = mphone;
    }

// function managerRoster ({ mname, mid, memail, mnumber }) {
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//         <title>Team Profile Generator</title>
//         <link rel="stylesheet" href="dist-render-generate/style.css">
//     </head>
//     <header><div class="sheet"><div class="title"><h2 class="title">Team Roster</h2></div></div>
//     </header>    
//     <body>
//         <span class="manager"><div class="card">
//         <div class="container">
//         <div class="employee"><h2 class="name">Name: ${mname}</h2></div>
//         <div class="information"><h3>Contact Information:</h3></div>
//                 <ul class="id">ID - <a>${mid}</a></ul>
//                 <ul class="email">Email: <a href="mailto:${memail}">${memail}</a></ul>
//                 <ul class="number">Office number: <a href= “tel:+${mnumber}"</a></ul>
//         </div></div></div></div><span>
    
//         <!-- // Save spot
//         <div class="card">
//         <div class="container">
//         <div class="employee"><h2 class="name">Name: {name}</h2></div>
//         <div class="position"><h3>Position: {position}</h3></div>
//         <div class="information"><h3>Contact Information:</h3></div>
//                 <ul class="id">ID - <a>{id}</a></ul>
//                 <ul class="email">Email - {email}</ul>
//                 <ul class="number">Office number - {number}</ul>
//         </div></div></div></div>
//     `;
//     }

// function managerOption () { 
//     inquirer.prompt(
//     {
//       type: 'input',
//       name: 'mname',
//       message: 'Manager name',
//     },
//     {
//       type: 'input',
//       name: 'mid',
//       message: 'Managers Employee ID?',
//     },
//     {
//       type: 'input',
//       name: 'memail',
//       message: 'Managers email address',
//     },
//     {
//       type: 'input',
//       name: 'mnumber',
//       message: 'Managers Office Phone number',
//     }
//     ).then(answer => {managerOption = new managerOption (answer.mname, answer.mid, answer.memail, answer.mnumber)  
//     .then(() => console.log('Successfully did manager then sent to menu'))
//     })
//   };



class Intern {
    constructor(iname, iid, iemail, ischool) {
        this.iname = iname;
        this.iid = iid;
        this.iemail = iemail;
        this.ischool = ischool;
    }

function internRoster ({ iname, iid, iemail, ischool }) {
    `<span class="intern"><div class="card">
        <div class="container">
        <div class="intern"><h2 class="ename">Intern Name: ${iname}</h2></div>
        <div class="information"><h3>Contact Information:</h3></div>
                <ul class="id">ID: <a>${iid}</a></ul>
                <ul class="email">Email: <a href="mailto:${iemail}">${iemail}</a></ul>
                <ul class="number">GitHub: <a>${ischool}</a></ul>
        </div></div></div></div><span>
    `;

// function internOption () {
//     inquirer.prompt( 
//     {
//         type: 'input',
//         name: 'iname',
//         message: 'Interns name',
//     },
//     {
//         type: 'input',
//         name: 'iid',
//         message: 'Interns ID?',
//     },
//     {
//         type: 'input',
//         name: 'iemail',
//         message: 'Interns email address',
//     },
//     {
//         type: 'input',
//         name: 'ischool',
//         message: 'Interns School',
//     }.then((answers) => {
//         const create = createtheindex(answers);
    
//         fs.writeFile('index.html', create, (err) =>
//         err ? console.log(err) : console.log('Successfully created index!')
//         );
//     }

//     //  ).then(answer => {internOption = new internOption (answer.iname, answer.iid, answer.iemail, answer.ischool)  
//     //   .then(() => menuOption()).then(() => console.log('Successfully did intern then sent to menu'))
//     // })
// // };


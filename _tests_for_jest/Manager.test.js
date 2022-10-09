// const Managertest = require('../lib-pages-classes/managerOption');//route to the file

// //manager object mtz manager test z
// //test the entire object of manager options
// test("can test manager object"), () => {
//     const mtz = new Managerinfo();
//     expect(typeof(mtz)).toBe("object");
// };

//name
//test the entire test of the name option
test(test.todo("test manager name"), () => {
    const testInput = "ManagerName";
    const e = new Mnamedata (mname);
    expect(e.mname).toBe(testInput);
}

//id
//test the entire test of the id option
test(test.todo("test manager id"), () => {
    const testInput = 100;
    const mtb = new Middata ("Foo", testInput);
    expect(mtb.mid).toBe(testInput);
}


//email
//test the entire test of the email option
test(test.todo("test manager email"), () => {
    const testInput = 1;
    const e = new Memaildata ("Foo", 1, testInput);
    expect(e.memail).toBe(testInput);
}


//number
//test the entire test of the number option
test(test.todo("test phone number"), () => {
    const testInput = 1;
    const mtd = new mnumberdata ("Foo", 1, testInput);
    expect(mtd.mnumber).toBe(testInput);
}



// //example for project review day three 1 and half hour in day 3
//test and it are the same thing in jest so you can use it instead of test
//not using descripe and then you can say describe employee if you want
//ask users for input and generate html
//can use classes to create the instances
// to keep adding the cards, only one or six cards will come per the add options of adding the employees to the array.
// In the template cord create the html to make the boxes.

// const Employee = require("../lib/Employee");

// test("Can instantiate Employee instance", () => {
//     const e = new Employee();
//     expect(typeof(e)).toBe("object");
// });

// test("Can set name via constructor arguments", () => {
//     const name = "David";
//     const e = new Employee(name);
//     expect(e.name).toBe(name);
// });

// test("Can set id via constructor argument", () => {
//     const testValue = 100;
//     const e = new Employee("Foo", testValue);
//     expect(e.id).toBe(testValue);
// });

// test("Can set email via constructor argument", () => {
//     const testValue = "email@test.com";
//     const e = new Employee("Foo", 1, testValue);
//     expect(e.email).toBe(testValue);
// });


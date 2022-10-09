const Menutest = require('../lib-pages-classes/menuOption');

test(test.todo("test Employee Menu const"), () => {
    const testValue = "Menu";
    const e = new Menutest (data);
    expect(e.data).toBe(testValue);
});
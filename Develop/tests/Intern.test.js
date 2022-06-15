const Intern = require('../lib/intern');

describe("Intern", () =>{
    describe("Initialization", () =>{
        it("Should get the name of the intern", () => {
            const intern = new Intern('Chandler', 50, 'test@test.com');

            expect(intern.getName()).toEqual('Chandler')
        });

        it("Should get the id of the engineer", () => {
            const intern = new Intern('Chandler', 50, 'test@test.com');

            expect(intern.getId()).toEqual(50)
        });

        it("Should get the email of the engineer", () => {
            const intern = new Intern('Chandler', 50, 'test@test.com');

            expect(intern.getEmail()).toEqual('test@test.com')
        });

        it("Should get the gitHub username of the engineer", () => {
            const intern = new Intern('Chandler', 50, 'test@test.com', 'UW');

            expect(intern.getSchool()).toEqual('UW')
        })

        it("Should return the string 'engineer'", () => {
            const intern = new Intern('Chandler', 50, 'test@test.com');

            expect(intern.getRole()).toEqual('Intern')
        });

    });
       
})
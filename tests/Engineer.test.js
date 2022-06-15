const Engineer = require('../lib/engineer');

describe("Engineer", () =>{
    describe("Initialization", () =>{
        it("Should get the name of the engineer", () => {
            const engineer = new Engineer('Chandler', 50, 'test@test.com');

            expect(engineer.getName()).toEqual('Chandler')
        });

        it("Should get the id of the engineer", () => {
            const engineer = new Engineer('Chandler', 50, 'test@test.com');

            expect(engineer.getId()).toEqual(50)
        });

        it("Should get the email of the engineer", () => {
            const engineer = new Engineer('Chandler', 50, 'test@test.com');

            expect(engineer.getEmail()).toEqual('test@test.com')
        });

        it("Should get the gitHub username of the engineer", () => {
            const engineer = new Engineer('Chandler', 50, 'test@test.com', 'username');

            expect(engineer.getGithub()).toEqual('username')
        })

        it("Should return the string 'engineer'", () => {
            const engineer = new Engineer('Chandler', 50, 'test@test.com');

            expect(engineer.getRole()).toEqual('Engineer')
        });

    });
       
})
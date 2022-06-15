const Manager = require('../lib/manager');

describe("Intern", () =>{
    describe("Initialization", () =>{
        it("Should get the name of the manager", () => {
            const manager = new Manager('Chandler', 50, 'test@test.com');

            expect(manager.getName()).toEqual('Chandler')
        });

        it("Should get the id of the engineer", () => {
            const manager = new Manager('Chandler', 50, 'test@test.com');

            expect(manager.getId()).toEqual(50)
        });

        it("Should get the email of the engineer", () => {
            const manager = new Manager('Chandler', 50, 'test@test.com');

            expect(manager.getEmail()).toEqual('test@test.com')
        });

        it("Should get the gitHub username of the engineer", () => {
            const manager = new Manager('Chandler', 50, 'test@test.com', 10);

            expect(manager.getofficeNumber()).toEqual(10)
        })

        it("Should return the string 'engineer'", () => {
            const manager = new Manager('Chandler', 50, 'test@test.com');

            expect(manager.getRole()).toEqual('Manager')
        });

    });
       
})
const Employee = require('../lib/employee');

describe("Employee", () =>{
    describe("Initialization", () =>{
        it("should create an employee object with a name, employee id, and email", () => {
            const employee = new Employee('Chandler', 50, 'test@test.com');

            expect(employee.name).toEqual('Chandler');
            expect(employee.id).toEqual(50);
            expect(employee.email).toEqual('test@test.com');
        });

        it("Should get the name of the employee", () => {
            const employee = new Employee('Chandler', 50, 'test@test.com');

            expect(employee.getName()).toEqual('Chandler')
        });

        it("Should get the id of the employee", () => {
            const employee = new Employee('Chandler', 50, 'test@test.com');

            expect(employee.getId()).toEqual(50)
        });

        it("Should get the email of the employee", () => {
            const employee = new Employee('Chandler', 50, 'test@test.com');

            expect(employee.getEmail()).toEqual('test@test.com')
        });

        it("Should return the string 'employee'", () => {
            const employee = new Employee('Chandler', 50, 'test@test.com');

            expect(employee.getRole()).toEqual('Employee')
        });

    });
       
})
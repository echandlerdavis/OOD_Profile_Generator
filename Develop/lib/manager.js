const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber){

    };

    getRole(){
        return 'Manager'
    }

}
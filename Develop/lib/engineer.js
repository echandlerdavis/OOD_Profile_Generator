const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github){};


    getRole(){
        return 'Engineer';
    };

}
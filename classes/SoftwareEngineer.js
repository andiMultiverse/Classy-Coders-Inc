const { Employee } = require("./Employee");

class SoftwareEngineer extends Employee {
    #programmingLanguages;
    constructor(name, position, salary, programmingLanguages) {
        super(name, position, salary);
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }

    setProgrammingLanguages(programmingLanguages) {
        this.#programmingLanguages.push(programmingLanguages);
    }



    
}

module.exports = {
    SoftwareEngineer,
}
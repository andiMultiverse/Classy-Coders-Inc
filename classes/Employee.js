class Employee {
  #salary;
  #isHired;
  static #allEmployees = [];

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
   Employee.#allEmployees.push(this);
  }

    static getEmployees() {
    return Employee.#allEmployees;
    }
    static getTotalPayroll() {
    return Employee.#allEmployees.reduce((acc, employee) => acc + employee.#salary, 0);
    
    }

  getSalary() {
    return this.#salary;
  }

  setSalary(salary) {
    this.#salary = salary;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    if (command === "hire") {
        this.#isHired = true;
    } else if (command === "fire") {
        this.#isHired = false;
    } else {
        throw new Error('Wrong command. Enter "hire" or "fire"');
    }
  }

}

module.exports = {
  Employee,
};

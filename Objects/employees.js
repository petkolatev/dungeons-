function addEmployees(arr) {
    class Employee {
        constructor(name, number) {
            this.name = name;
            this.personalNumber = number
        }
    }
    let employeesList = [];
    for (let curr of arr) {
        let name = curr;
        let number = curr.length;
        let currEmployee = new Employee(name, number);
        employeesList.push(currEmployee)
            ;
    }
    for (let row of employeesList) {
        console.log(`Name: ${row.name} -- Personal Number: ${row.personalNumber}`)
    }
}
addEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
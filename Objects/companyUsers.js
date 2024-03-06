function addUsersInCompany(input) {
    let companyRegister = {};

    input.forEach(newEmploy => {
        let [companyName, employID] = newEmploy.split(' -> ')
        if (companyRegister.hasOwnProperty(companyName)) {
            if (!companyRegister[companyName].includes(employID)) {
                companyRegister[companyName].push(employID)
            }
        } else {
            companyRegister[companyName] = [employID]
        }
    });
    companyRegister = Object.entries(companyRegister).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [company, emplyees] of companyRegister) {
        console.log(`${company}`);
        emplyees.forEach(currEmployee => {
            console.log(`-- ${currEmployee}`);
        })

    }
}
addUsersInCompany([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])
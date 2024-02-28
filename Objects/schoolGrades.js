function calculateAvgGrade(input) {
    let gradeBook = {};

    input.forEach(element => {
        let tokens = element.split(' ')
        let name = tokens.shift();
        let grade = tokens.join(' ')
        if (!gradeBook.hasOwnProperty(name)) {
            gradeBook[name] = grade
        } else {
            gradeBook[name] += ` ${grade}`
        }
    });
    gradeBook = Object.entries(gradeBook).sort((a, b) => a[0].localeCompare(b[0]))

    for (let curr of gradeBook) {
        let name = curr[0];
        let result = curr[1].split(' ')
        let sum = 0
        let counter = 0

        for (let i in result) {
            sum += Number(result[i])
            counter++
        }
        let avg = sum / counter;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}
calculateAvgGrade(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])
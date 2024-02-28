function addressBook(input) {
    let book = {};

    input.forEach(element => {
        let [name, address] = element.split(':')

        book[name] = address
    });
    book = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]))

    for (let curr of book) {
        console.log(`${curr[0]} -> ${curr[1]}`);
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])
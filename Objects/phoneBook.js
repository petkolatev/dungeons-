function createPhoneBook(input) {
    let phoneBook = {};

    input.forEach(newContact => {
        let [name, number] = newContact.split(' ');

        phoneBook[name] = number;
    });

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }

}
createPhoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
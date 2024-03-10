function inviteGuests(input) {
    let guests = {
        vip: [],
        regular: []
    };

    let command = input.shift();
    while (command !== "PARTY") {
        if (isNaN(command[0])) {
            guests.regular.push(command);
        } else {
            guests.vip.push(command);
        }
        command = input.shift();
    }

    let arrivedGuests = input;
    for (let guest of arrivedGuests) {
        if (isNaN(guest[0])) {
            let search = guests.regular.indexOf(guest);
            guests.regular.splice(search, 1)
        } else {
            let search = guests.vip.indexOf(guest);
            guests.vip.splice(search, 1)
        }
    }

    let allGuests = guests.vip.concat(guests.regular);
    console.log(allGuests.length);
    console.log(allGuests.join("\n"));
}


inviteGuests([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

// inviteGuests(['m8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ])
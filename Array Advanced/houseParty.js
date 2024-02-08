function houseParty(array) {
    let incudesPpl = [];
    let notIncluded = []
    for (let i = 0; i < array.length; i++) {
        let [name, str1, command, str2] = array[i].split(' ');
        switch (command) {
            case 'going!':
                if (!incudesPpl.includes(name)) {
                    incudesPpl.push(name)
                } else {
                    console.log(`${name} is already in the list!`);
                }
                break;
            case 'not':
                if (!incudesPpl.includes(name)) {
                    notIncluded.push(name)

                } else if (incudesPpl.includes(name)) {
                    let index = incudesPpl.indexOf(name)
                    incudesPpl.splice(index, 1)
                }
                break;
        }

    }
    for (const i of notIncluded) {
        console.log(`${i} is not in the list!`);
    }
    for (const i of incudesPpl) {
        console.log(i);
    }
}

// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!'])
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])
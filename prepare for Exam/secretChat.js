function secretChat(arr) {
    let message = arr.shift();
    let command = arr.shift();

    while (command !== 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens[0];

        if (action === 'ChangeAll') { //'ChangeAll:|:V:|:l' - 'heVVodar!gniV'
            let letter = tokens[1]; // V
            let replacmentLetter = tokens[2]; // l
            let newString = message.split(letter); // ['he', '', 'odar!gni', '', 'l']
            message = newString.join(replacmentLetter); // hellodar!gnil
            console.log(message);

        } else if (action === 'Reverse') { // 'Reverse:|:!gnil' - hellodar!gnil
            let lettersAsStr = tokens[1]; // '!gnil'
            let firstIndex = message.indexOf(lettersAsStr);

            if (firstIndex === -1) {
                console.log(`error`);

            } else {
                let firstPart = message.slice(0, firstIndex); // hellodar
                let secondPart = message.slice(firstIndex, lettersAsStr.lenght); // !gnil
                // let newStr = secondPart.split('').reverse().join('');
                message = firstPart + secondPart.split('').reverse().join(''); // hellodarling!

                console.log(message);
            }

        } else if (action === 'InsertSpace') { // 'InsertSpace:|:5', - hellodarling!
            let idx = Number(tokens[1]); // 5
            let firstHalf = message.slice(0, idx); // hello
            let secondHalf = message.slice(idx); // darling!
            message = firstHalf + ' ' + secondHalf;  //
            console.log(message);
        }
        command = arr.shift();
    }

    console.log(`You have a new text message: ${message}`);
}


// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
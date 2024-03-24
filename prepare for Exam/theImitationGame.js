function imitationGame(input) {
    let message = input.shift();
    let command = input.shift();

    while (command !== 'Decode') {
        let tokens = command.split('|')
        let action = tokens.shift();

        switch (action) {
            case 'Move':
                let num = Number(tokens.shift());
                let strToMove = message.substring(0, num)
                message = message.replace(strToMove, '') + strToMove
                break;

            case 'Insert':
                let idx = Number(tokens.shift())
                let value = tokens.shift()
                message = message.substring(0, idx) + value + message.substring(idx)
                break;

            case 'ChangeAll':
                let substr = tokens.shift();
                let replacement = tokens.shift()
                while (message.includes(substr)) {
                    message = message.replace(substr, replacement)
                }
                break;

        }
        command = input.shift()
    }
    console.log(`The decrypted message is: ${message}`);

}
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])
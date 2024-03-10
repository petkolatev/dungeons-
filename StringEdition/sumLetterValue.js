function sumLetterValue(input) {
    let text = input[0];
    let command = input[1];
    let sum = 0

    if (command === 'LOWERCASE') {
        for (let i = 0; i < text.length; i++) {
            let currLetter = text[i]
            if (/[a-z]/.test(currLetter)) {
                let value = text.charCodeAt([i])
                sum += value
            }
        }
    } else {
        for (let j = 0; j < text.length; j++) {
            let currLetter = text[j]
            if (/[A-Z]/.test(currLetter)) {
                let value = text.charCodeAt([j])
                sum += value
            }
        }

    }
    console.log(`The total sum is: ${sum}`);

}
sumLetterValue(['AC/DC',
    'UPPERCASE'])
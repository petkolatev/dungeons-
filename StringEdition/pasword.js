function cutAndReplaceLetter(input) {
    let text = input[0] + input[1];
    let replaceElement = input[2];

    let vowels = ['a', 'e', 'i', 'u', 'o',]
    let index = 0

    for (let letter of text) {
        if (vowels.includes(letter)) {
            let replaceLetter = replaceElement[index].toUpperCase()
            text = text.replace(letter, replaceLetter)
            index++
            if (index >= replaceElement.length) {
                index = 0
            }
        }
    }
    text = text.split('').reverse().join('')
    console.log(`Your generated password is ${text}`);

}
cutAndReplaceLetter(['easymoneyeazylife',
    'atleasttencharacters',
    'absolute'])
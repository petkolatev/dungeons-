function stringSubstring(word, text) {
    text = text.toLowerCase().split(' ');

    let index = text.indexOf(word)
    if (index >= 0) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
stringSubstring('javascriptt',
    'JavaScript is the best programming language') 
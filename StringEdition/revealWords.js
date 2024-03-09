function revealWords(words, text) {
    words = words.split(', ');

    for (let currWord of words) {
        let wordLength = currWord.length
        let revealWords = '*'.repeat(wordLength)
        text = text.replace(revealWords, currWord)
    }
    console.log(text);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')
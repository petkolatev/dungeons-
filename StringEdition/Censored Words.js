function cutingWords(sentence, searchingWord) {
    let lengthWord = searchingWord.length
    let replaceElement = ('*').repeat(lengthWord)

    let newSentence = sentence.replace(searchingWord, replaceElement)

    while (newSentence.includes(searchingWord)) {
        newSentence = newSentence.replace(searchingWord, replaceElement)
    }

    console.log(newSentence);

}
cutingWords('A small sentence with some words small', 'small')
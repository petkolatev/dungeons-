function hardWords(arr) {
    let text = arr[0].split(' ')
    let wordsForReplace = arr[1]

    for (let currWord of text) {
        if (currWord.includes('_')) {
            for (let replaceWord of wordsForReplace) {
                if (currWord.includes('.') || currWord.includes(',')) {
                    let sing = currWord[currWord.length - 1]
                    let currWordLength = currWord.length - 1
                    let replaceLength = replaceWord.length
                    if (currWordLength === replaceLength) {
                        let index = text.indexOf(currWord)
                        text.splice(index, 1, replaceWord + sing)
                        break;
                    }
                } else {
                    let currWordLength = currWord.length
                    let replaceLength = replaceWord.length
                    if (currWordLength === replaceLength) {
                        let index = text.indexOf(currWord)
                        text.splice(index, 1, replaceWord)
                        break;
                    }
                }
            }
        }

    }
    console.log(text.join(' '));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)
function findWOrdSentense(arr) {
    let searchingSentense = arr.shift().split(' ')
    let occursWords = {}

    searchingSentense.forEach(newWord => {
        occursWords[newWord] = 0
    })

    arr.forEach(currWord => {
        let keys = Object.keys(occursWords)
        if (keys.includes(currWord)) {
            occursWords[currWord] += 1
        }
    });
    let sortedWords = Object.entries(occursWords).sort((a, b) => b[1] - a[1])

    for (const index of sortedWords) {
        console.log(`${index[0]} - ${index[1]}`);
    }
}
findWOrdSentense([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
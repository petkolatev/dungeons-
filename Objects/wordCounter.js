function countWord(input) {
    let words = {};

    input.forEach(currWord => {
        if (!words.hasOwnProperty(currWord)) {
            words[currWord] = 1
        } else {
            words[currWord] += 1
        }
    });
    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1])

    for (const curr of sortedWords) {
        console.log(`${curr[0]} -> ${curr[1]} times`);
    }

}
countWord(["Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And",
    "finally", "the", "third", "sentence"])
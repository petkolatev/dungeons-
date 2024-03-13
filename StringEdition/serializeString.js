function serializeString(input) {
    input = input[0]
    let letterStore = {}

    for (let i = 0; i < input.length; i++) {
        let currLetter = input[i]
        if (currLetter in letterStore) {
            letterStore[currLetter].push(i)
        } else {
            letterStore[currLetter] = [i]
        }
    }
    letterStore = Object.entries(letterStore)
    for (let [letter, positions] of letterStore) {
        let result = []

        for (const curr of positions) {
            result.push(curr)
        }
        console.log(`${letter}:${result.join('/')}`);

    }
}
serializeString(["abababa"])
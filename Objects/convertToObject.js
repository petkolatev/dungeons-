function convertToObject(input) {
    let stringObject = JSON.parse(input)
    let string = Object.entries(stringObject)
    for (let i = 0; i < string.length; i++) {
        let [idx1, idx2] = string[i]
        console.log(`${idx1}: ${idx2}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
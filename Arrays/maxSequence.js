function maxSequence(array) {
    let longest = [array[0]];
    let checkLongest = [array[0]]

    for (let i = 1; i < array.length; i++) {
        let currElement = array[i]
        let prevElement = array[i - 1]

        if (currElement === prevElement) {
            checkLongest.push(array[i])
        } else {
            if (checkLongest.length > longest.length) {
                longest = checkLongest
            }
            checkLongest = [array[i]]
        }
    }
    if (checkLongest.length > longest.length) {
        longest = checkLongest
    }
    console.log(longest.join(' '));
}
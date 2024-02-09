function sortingNumbers(arr) {
    let newArr = arr.slice(0)
    let high = arr.sort((a, b) => {
        return b - a
    })
    let printString = []
    while (high.length > 0) {

        printString.push(high.shift())

        printString.push(high.pop())
    }

    console.log(printString.join(' '));
}
// sortingNumbers([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sortingNumbers([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, 33])

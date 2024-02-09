function detonateBomb(arr, bombArr) {
    let [bomb, radius] = bombArr;
    let command = 'go'

    while (command !== 'stop') {
        let curr = arr.indexOf(bomb)
        if (curr === -1) {
            command = 'stop'
            break;
        }
        if (curr < radius) {
            curr = 0
        }
        arr.splice(curr, radius + 1);
        arr.splice(curr - radius, radius * 2)
    }
    let sum = 0
    for (const i of arr) {
        sum += i
    }
    console.log(sum);
}
// detonateBomb([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2])
// detonateBomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1])
// detonateBomb([1, 7, 7, 1, 2, 3],
//     [7, 1])
detonateBomb([1, 4, 9, 2, 8, 3, 1, 1, 1],
    [9, 3])
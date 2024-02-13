function memoryGame(array) {
    let sequence = array.shift().split(' ')
    let token = array.shift()
    let turns = 0

    while (token !== 'end') {

        if (sequence.length <= 0) {
            break;
        }
        turns++
        let [first, second] = token.split(' ').map(Number)
        if (first !== second) {
            if (sequence[first] === sequence[second]) {

                let letter = sequence[first]
                let idx1 = sequence.indexOf(letter)
                sequence.splice(idx1, 1)
                let idx2 = sequence.indexOf(letter)
                sequence.splice(idx2, 1)
                console.log(`Congrats! You have found matching elements - ${letter}!`)
            } else if (first < 0 || second < 0 || first >= sequence.length || second >= sequence.length) {
                let addItems = `-${turns}a`
                sequence.splice((sequence.length / 2), 0, addItems, addItems)
                console.log(`Invalid input! Adding additional elements to the board`);
            } else {
                console.log(`Try again!`);
            }
        } else {
            let addItems = `-${turns}a`
            sequence.splice((sequence.length / 2), 0, addItems, addItems)

            console.log(`Invalid input! Adding additional elements to the board`);
        }

        token = array.shift()

    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(' '));
    } else {
        console.log(`You have won in ${turns} turns!`);
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ])
function detonateBomb(sequence, bomb) {

    let [bombNumber, power] = bomb;

    let leftIdx = 0;
    let rightIdx = 0;

    let currentPosition = 0;

    while (sequence.includes(bombNumber)) {

        currentPosition = sequence.indexOf(bombNumber);

        // To the left detonation

        leftIdx = currentPosition - power; // Getting everything to the left based on the length of the power

        if (leftIdx >= 0) {
            sequence.splice(leftIdx, power + 1); // Detonate everything including the bomb number itself
            currentPosition = leftIdx;
        } else {
            sequence.splice(0, power); // Detonate everything including the bomb number itself
            currentPosition = 0;
        }

        // To the right detonation

        rightIdx = currentPosition; // Getting everything to the right based on the length of the power

        if (rightIdx + power <= sequence.length - 1) {
            sequence.splice(rightIdx, power - 1); // Detonate everything to the right, without the bomb number
            currentPosition = rightIdx;
        } else {
            sequence.splice(rightIdx, sequence.length - 1); // Detonate everything to the right until end of the sequence
        }
    }
    let sum = 0;
    if (sequence.length > 0) {
        sum = sequence.reduce((acc, currentVal) => { return acc + currentVal }); // Summing all the values in the sequence
        console.log(sum);
    } else {
        console.log(sum);
    }
}
// detonateBomb([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2])
// detonateBomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1])
// detonateBomb([1, 7, 7, 1, 2, 3],
//     [7, 1])
detonateBomb([1, 9, 4, 4, 2, 8, 1],
    [9, 3])
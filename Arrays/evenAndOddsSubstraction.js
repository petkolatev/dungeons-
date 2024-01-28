function evenAndOddsSubstraction(arr) {
    let evenSum = 0;
    let oddsSum = 0;

    for (const currNum of arr) {
        if (currNum % 2 === 0) {
            evenSum += currNum
        } else {
            oddsSum += currNum
        }

    }
    console.log(evenSum - oddsSum);
}
evenAndOddsSubstraction([2, 4, 6, 8, 10])
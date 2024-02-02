function perfectNumber(num) {
    let SumDigit = 0

    for (let i = 1; i < num; i++) {

        if (num % i === 0) {
            SumDigit += i
        }
    }

    if (SumDigit === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(28)
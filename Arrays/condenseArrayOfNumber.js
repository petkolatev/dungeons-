function condenseArrayOfNumber(array) {
    let condensed = []
    let sum = 0
    while (array.length > 1) {
        for (let i = 1; i < array.length; i++) {
            let firstNum = array[i - 1];
            let secondNum = array[i];
            sum = firstNum + secondNum;
            condensed.push(sum)

        }
        array = condensed
        condensed = []
    }
    console.log(array.join());

}
condenseArrayOfNumber([2, 10, 3])
// condenseArrayOfNumber([5, 0, 4, 1, 2])
function summEvenNumbers(array) {
    let sum = 0
    for (const currNum of array) {
        if (Number(currNum) % 2 === 0) {
            sum += Number(currNum)
        }
    }
    console.log(sum);
}
summEvenNumbers(['2', '4', '6', '8', '10'])
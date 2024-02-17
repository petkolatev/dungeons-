function averageNumbers(numbers) {
    let num = numbers.split(' ').map(Number)
    let sum = 0
    let counter = 0
    for (let i of num) {
        counter++
        sum += i
    }
    let average = sum / counter
    let greaterNums = []
    let countGreater = 0

    for (let j of num) {

        if (j > average) {
            greaterNums.push(j)
        }
    }
    greaterNums = greaterNums.sort((a, b) => b - a)
    let result = []
    for (let k = 0; k < 5; k++) {
        let index = greaterNums[k]
        result.push(index)
    }

    if (greaterNums.length === 0) {
        console.log('No');
    } else {
        console.log(result.join(' '));
    }

}
averageNumbers('10 20 30 40 50')
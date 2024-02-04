function numberModification(num) {
    let strNum = num.toString().split('')
    let command = 'go';
    let sum = 0

    while (command !== 'stop') {
        for (let i = 0; i < strNum.length; i++) {
            let currNum = Number(strNum[i]);
            sum += currNum
        }
        if (sum / strNum.length > 5) {
            command = 'stop'
        } else {
            strNum.push(9)
            sum = 0
        }
    }
    console.log(strNum.join(''));
}
numberModification(5835)

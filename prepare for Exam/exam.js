function cooking(input) {
    let budget = Number(input.shift());
    let students = Number(input.shift());
    let flourPrice = Number(input.shift());
    let singleEggPrice = Number(input.shift());
    let apronPrice = Number(input.shift())
    let reserveApron = Math.ceil(students * 0.2)

    let packagePerStudent = flourPrice + 10 * singleEggPrice + apronPrice
    let totalPrice = packagePerStudent * students + reserveApron * apronPrice
    if (students >= 5) {
        let count = 0
        for (let i = 1; i <= students; i++) {
            count++
            if (count % 5 === 0) {
                totalPrice -= flourPrice
            }
        }
    }

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
    } else {
        let needMoney = totalPrice - budget
        console.log(`${needMoney.toFixed(2)}$ more needed.`);
    }
}
cooking(['946',
    '20',
    '12.05',
    '0.42',
    '27.89'])
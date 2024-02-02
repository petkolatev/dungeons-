function sumOddAndEven(num) {
    let strNum = num.toString()
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < strNum.length; i++) {
        let currNum = Number(strNum[i]);

        if (currNum % 2 === 0) {
            evenSum += currNum
        } else {
            oddSum += currNum
        }
    }
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
sumOddAndEven(3495892137259234)
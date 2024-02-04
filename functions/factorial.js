function factorial(num1, num2) {
    let calculateNum1 = calculateFactorial(num1);
    let calculateNum2 = calculateFactorial(num2);

    let result = calculateNum1 / calculateNum2
    console.log(result.toFixed(2));

    function calculateFactorial(number) {
        let sum = 1
        for (let i = number; i > 0; i--) {
            sum *= Number(i)
        }
        return sum;

    }
}
factorial(6, 2)
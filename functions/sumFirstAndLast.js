function lastKElementSum(n, k) {
    let array = [1];

    for (let i = 1; i < n; i++) {
        let elements = Math.max(array.length - k, 0)
        let lastNums = array.slice(elements)
        let newNumber = 0;
        for (let i of lastNums) {
            newNumber += i
        }
        array.push(newNumber)
    }
    console.log(array.join(' '));
}
lastKElementSum(8, 2)
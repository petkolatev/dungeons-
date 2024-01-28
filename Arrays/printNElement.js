function printNElement(arr) {

    let step = Number(arr[arr.length - 1])
    let newArr = []

    for (let i = 0; i < arr.length - 1; i += step) {
        let currIndex = arr[i]
        newArr.push(currIndex)
    }
    console.log(newArr.join(' '));


}
printNElement(['1', '2', '3', '4', '5', '6'])
function rotateArray(arr) {
    let rotateNumber = Number(arr[arr.length - 1])
    let newArr = arr.slice(0, arr.length - 1)
    let counter = 0

    while (counter < rotateNumber) {

        let curr = newArr[arr.length - 2]
        newArr.pop()
        newArr.unshift(curr)

        counter++
    }
    console.log(newArr.join(' '));

}
rotateArray(['1', '2', '3', '4', '2'])
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
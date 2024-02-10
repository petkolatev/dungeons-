function searrchingNumber(arr, actions) {
    let [elements, deleteNums, searchingNum] = actions
    let newArr = arr.slice(0, elements)
    newArr.splice(0, deleteNums);
    let count = 0
    for (let i of newArr) {
        if (i === searchingNum) {
            count++
        }
    }
    console.log(`Number ${searchingNum} occurs ${count} times.`);

}
searrchingNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])
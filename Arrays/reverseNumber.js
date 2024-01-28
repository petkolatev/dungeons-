function reverseNumber(num, array) {
    let newArray = []
    for (let i = 0; i < num; i++) {
        let currNum = array[i]
        newArray.unshift(currNum)
    }
    console.log(newArray.join(' '));

}
reverseNumber(4, [-1, 20, 99, 5])
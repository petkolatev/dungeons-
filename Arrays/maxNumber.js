function maxNumber(array) {
    let newArray = [];
    let biggerNum = -Infinity

    for (let i = array.length; i >= 0; i--) {
        let currNum = array[i]
        if (currNum > biggerNum) {
            biggerNum = currNum
            newArray.push(biggerNum)
        }

    }
    newArray.reverse()
    console.log(newArray.join(' '));

}
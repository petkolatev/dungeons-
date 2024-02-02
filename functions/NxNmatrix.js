function nXnMatrix(num) {
    let currNum = []

    for (let i = 0; i < num; i++) {
        currNum.push(num)
    }
    for (let i = 0; i < num; i++) {
        console.log(currNum.join(' '));
    }

}
nXnMatrix(3)
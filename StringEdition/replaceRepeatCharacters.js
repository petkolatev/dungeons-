function cutingRepeatingChars(input) {
    let singleChars = [];

    let chars = input.split('')
    for (let i = 0; i < chars.length; i++) {
        let currElement = chars[i];
        let prevElement = chars[i - 1];
        if (currElement !== prevElement) {
            singleChars.push(currElement)
        }
    }
    console.log(singleChars.join(''));
}
cutingRepeatingChars('qqqwerqwecccwd')
function palindrome(array) {
    for (let i = 0; i < array.length; i++) {
        let currElement = array[i];
        let strNum = currElement.toString().split('').reverse().join('')
        let reversedNum = Number(strNum)
        if (currElement === reversedNum) {
            console.log('true');
        } else {
            console.log('false');
        }

    }

}
palindrome([32, 2, 232, 1010])
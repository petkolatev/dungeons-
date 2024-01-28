function addANdRemove(arr) {
    let newString = [];
    let initialNumber = 1
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'add') {
            newString.push(initialNumber)
        } else {
            newString.pop()
        }
        initialNumber++
    }
    if (newString.length > 0) {
        console.log(newString.join(' '));
    } else {
        console.log('Empty');
    }

}
addANdRemove(['remove', 'remove', 'remove'])
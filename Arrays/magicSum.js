function magicNumber(array, num) {

    let pairs = []
    for (let i = 0; i < array.length; i++) {
        let firstElement = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let secondElement = array[j]
            if (num === firstElement + secondElement) {
                pairs.push(firstElement);
                pairs.push(secondElement);
                console.log(pairs.join(' '));
                pairs = []
            }
        }
    }
}
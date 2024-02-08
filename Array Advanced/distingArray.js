function removeRepeatingElements(array) {

    for (let i = 0; i < array.length; i++) {
        let currElement = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let checkElement = array[j]

            if (currElement === checkElement) {
                array.splice(j, 1)
                j = j - 1
            }
        }
    }
    console.log(array.join(' '));
}


removeRepeatingElements([7, 8, 9, 7, 7, 2, 3, 4, 1, 2])
// removeRepeatingElements([20, 8, 12, 13, 4, 4, 8, 5])
// removeRepeatingElements([1, 2, 3, 4])
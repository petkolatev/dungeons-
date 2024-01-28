function equialArrays(arr1, arr2) {
    let isEquial = false;
    let sum = 0

    for (let i = 0; i < arr1.length; i++) {
        let currArr1 = Number(arr1[i]);
        let currArr2 = Number(arr2[i]);
        if (currArr1 === currArr2) {
            isEquial = true
            sum += Number(arr1[i])
        } else {
            isEquial = false
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break
        }

    }
    if (isEquial) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equialArrays(['1'], ['10'])
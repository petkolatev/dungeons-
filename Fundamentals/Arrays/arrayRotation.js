function arrayRotation(arr, elements) {

    for (let i = 0; i < elements; i++) {
        let currElement = arr.shift()

        arr.push(currElement)

    }
    console.log(arr.join(' '));

}
function listOfProduct(array) {
    let sorted = array.sort((a, b) => {
        return a.localeCompare(b)
    })

    for (let i = 0; i < sorted.length; i++) {

        console.log(`${i + 1}.${sorted[i]}`);

    }


}
// listOfProduct(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProduct(['Watermelon', 'Banana', 'Apples'])
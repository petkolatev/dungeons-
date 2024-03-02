function countOddElements(input) {
    let array = input.split(' ')
    let storeElements = {};

    array.forEach(element => {
        element = element.toLowerCase()
        if (storeElements.hasOwnProperty(element)) {
            storeElements[element] += 1
        } else {
            storeElements[element] = 1
        }
    });
    let sorted = Object.entries(storeElements).sort((a, b) => b[1] - a[1])
    let result = []
    for (let index of sorted) {
        if (index[1] % 2 !== 0) {
            result.push(index[0]);
        }
    }
    console.log(result.join(' '));
}
countOddElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
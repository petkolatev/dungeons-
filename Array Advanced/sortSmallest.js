function sortSmallestTwoNum(array) {
    let smallest = array.sort((a, b) => {
        return a - b;
    })
    console.log(smallest.slice(0, 2).join(' '));
}
sortSmallestTwoNum([3, 0, 10, 4, 7, 3])
function sortString(arr) {
    let sortedByLength = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

    for (const i of sortedByLength) {
        console.log(i);
    }


}
sortString(['alpha', 'beto', 'gamma', 'beta'])
// sortString(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
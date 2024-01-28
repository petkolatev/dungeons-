function reverseArray(array) {
    let newarray = []
    for (let i = array.length; i > 0; i--) {
        let curr = array.shift()
        newarray.push(curr)
    }
    newarray.reverse()
    console.log(newarray.join(' '));
}
reverseArray(['a', 'b', 'c', 'd', 'e'])
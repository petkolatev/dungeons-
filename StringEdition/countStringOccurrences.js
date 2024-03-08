function countStringOccurrences(string, searchingElement) {
    string = string.split(' ')
    let counter = 0
    for (const currElement of string) {
        if (currElement === searchingElement) {
            counter++
        }
    }
    console.log(counter);

}
countStringOccurrences('This is a word and it also is a sentence',
    'is')
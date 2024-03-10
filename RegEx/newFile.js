function test(array) {
    let text = array.shift();
    let replace = array.shift()
    let words = [];
    for (let newWord of replace) {
        let newSing = '_'.repeat(newWord.length)
        words.push(newSing)
    }
    for (let check of words) {
        let index = text.indexOf(check)
        for (let iterator of replace) {
            if (check.length === iterator.length) {
                text = text.replace(index, check)
            }
        }
    }

}
test(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])
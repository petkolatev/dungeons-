function findHashTags(text) {
    text = text.split(' ')
    let hashTags = text.filter(n => n.startsWith('#') && n.length > 1)

    for (let currHashTag of hashTags) {
        let result = currHashTag.substring(1)
        let patern = /\b[A-Za-z]+\b/
        if (patern.test(result)) {
            console.log(result);

        }
    }

}
findHashTags('Nowadays everyone uses # to tag a #special1 word in #socialMedia')
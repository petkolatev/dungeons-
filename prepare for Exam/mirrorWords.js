function mirrorWord(input) {
    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/gm
    let match = []
    let counter = 0

    while ((valid = pattern.exec(input)) !== null) {
        match.push(valid.groups.word1);
        match.push(valid.groups.word2);
        counter++

    }
    let print = []

    for (let i = 0; i < match.length; i += 2) {
        let firstWord = match[i].split('').reverse().join('')
        let first = match[i]
        let secondWord = match[i + 1]

        if (firstWord === secondWord) {
            let stringMatch = `${first} <=> ${secondWord}`
            print.push(stringMatch)
        }
    }
    if (match.length === 0) {
        console.log(`No word pairs found!`);
    } else {

        console.log(`${match.length / 2} word pairs found!`);
    }

    if (print.length > 0) {
        console.log('The mirror words are:');
        console.log(print.join(', '));

    } else {
        console.log(`No mirror words!`);
    }

}
mirrorWord([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])

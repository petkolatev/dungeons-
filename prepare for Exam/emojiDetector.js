function emojiDetector(input) {
    let pattern = /(\:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g
    let digitPattern = /\d/g
    let digits = input.join().match(digitPattern)
    let coolEmoji = 1
    let coolStore = []
    let counter = 0

    for (let idx of digits) {
        coolEmoji *= Number(idx)
    }

    while ((valid = pattern.exec(input)) !== null) {
        counter++
        let sum = 0
        let word = valid.groups.word
        for (const idx of word) {
            let value = idx.charCodeAt()
            sum += value
        }
        if (sum > coolEmoji) {
            coolStore.push(valid[0])
        }
    }
    console.log(`Cool threshold: ${coolEmoji}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    console.log(coolStore.join('\n'));

}
emojiDetector(["In the Sofia  Zoo there are 311 animals in total! *:Smiley*: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
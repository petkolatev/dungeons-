function ASCIISumator(input) {
    let start = input[0].charCodeAt()
    let end = input[1].charCodeAt()
    let text = input[2];
    let sum = 0

    if (start < end) {
        for (let element of text) {
            let value = element.charCodeAt()
            if (value > start && value < end) {
                sum += value
            }
        }
    } else {
        for (let element of text) {
            let value = element.charCodeAt()
            if (value < start && value > end) {
                sum += value
            }
        }
    }

    console.log(sum);
}
ASCIISumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$'])
function deserialize(input) {
    let index = 0
    let comand = input[index]
    let text = []
    let idx = 0
    let target = -1

    for (let curr of input) {
        let elements = curr.split('/')
        let asd = elements.length
        target += asd
    }

    while (idx < target) {
        if (comand === 'end') {
            index = 0
            comand = input[index]
        }

        let [symbol, positions] = comand.split(':')

        positions = positions.split('/').map(Number)
        if (positions.includes(idx)) {
            text.splice(idx, 0, symbol)
            idx++
            index = 0
            comand = input[index]
        }
        index++;
        comand = input[index]

    }
    console.log(text.join(''));
}
deserialize(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])
function treasureFinder(input) {
    let code = input.shift().split(' ')
    let store = []
    let key = 0

    let index = 0;
    let comand = input[index];

    while (comand !== 'find') {
        for (let element of comand) {
            let value = element.charCodeAt()
            let newValue = value - code[key]
            key++
            if (key >= code.length) {
                key = 0
            }
            let newElement = String.fromCharCode(newValue)
            store.push(newElement)
        }
        key = 0
        let treasure = store.join('').split('&')
        let cordinate = store.join('').split('<')
        cordinate = cordinate[1].substring(0, cordinate[1].length - 1)
        console.log(`Found ${treasure[1]} at ${cordinate}`);
        store = []
        index++
        comand = input[index]
    }
}
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"])
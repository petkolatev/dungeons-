function activationKey(input) {
    let key = input.shift()
    let command = input.shift()

    while (command !== 'Generate') {
        let tokens = command.split('>>>')
        let action = tokens.shift();

        if (action === 'Contains') {
            let str = tokens.shift();
            let index = key.indexOf(str)

            if (index >= 0) {
                console.log(`${key} contains ${str}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (action === 'Flip') {
            let [typeCase, startIdx, ednIdx] = tokens;
            startIdx = Number(startIdx);
            ednIdx = Number(ednIdx)
            if (typeCase === 'Upper') {
                let str = key.substring(startIdx, ednIdx).toUpperCase();
                key = key.substring(0, startIdx) + str + key.substring(ednIdx)
            } else {
                let str = key.substring(startIdx, ednIdx).toLowerCase();
                key = key.substring(0, startIdx) + str + key.substring(ednIdx)
            }
            console.log(key);
        } else if (action === 'Slice') {
            let [startIdx, ednIdx] = tokens.map(Number);
            key = key.substring(0, startIdx) + key.substring(ednIdx)
            console.log(key);
        }
        command = input.shift()
    }
    console.log(`Your activation key is: ${key}`);
}
activationKey((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]))
function exam4(input) {
    let str = input.shift()
    let command = input.shift()

    while (command !== 'Finish') {
        let tokens = command.split(' ');
        let action = tokens.shift()

        if (action === 'Replace') {
            let [curr, newChar] = tokens
            while (str.includes(curr)) {
                str = str.replace(curr, newChar)
            }
            console.log(str);
        } else if (action === 'Cut') {
            let [start, end] = tokens.map(Number);
            if (start >= 0 && end < str.length) {
                str = str.substring(0, start) + str.substring(end + 1)
                console.log(str);
            } else {
                console.log('Invalid indices!');
            }

        } else if (action === 'Make') {
            let upperOrLower = tokens.shift()
            if (upperOrLower === 'Upper') {
                str = str.toUpperCase()
            } else {
                str = str.toLowerCase()
            }
            console.log(str);

        } else if (action === 'Check') {
            let string = tokens
            if (str.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
        } else if (action === 'Sum') {
            let [start, end] = tokens.map(Number)
            let sumStr = ''
            if (start >= 0 && end < str.length) {
                sumStr = str.substring(start, end + 1)
            } else {
                console.log('Invalid indices!');
            }
            let sum = 0
            for (let ele of sumStr) {
                let value = ele.charCodeAt()
                sum += value
            }
            if (sum > 0) {
                console.log(sum);
            }
        }
        command = input.shift()
    }
}
exam4(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])
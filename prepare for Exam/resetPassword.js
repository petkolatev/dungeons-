function passwordResset(input) {
    let str = input.shift();
    let command = input.shift()

    while (command !== 'Done') {
        let tokens = command.split(' ')
        let action = tokens.shift()

        switch (action) {
            case 'TakeOdd': {
                let newstr = ''
                for (let idx in str) {
                    if (idx % 2 !== 0) {
                        newstr += str[idx]
                    }
                }
                str = newstr
                console.log(str);
            }
                break;
            case 'Cut': {
                let [idx, length] = tokens.map(Number)
                let newstr = str.substring(0, idx) + str.substring(idx + length)
                str = newstr
                console.log(str);
            }
                break;
            case 'Substitute': {
                let [oldStr, newElement] = tokens
                if (str.includes(oldStr)) {
                    while (str.includes(oldStr)) {
                        str = str.replace(oldStr, newElement)
                    }
                    console.log(str);
                } else {
                    console.log('Nothing to replace!');
                }

            }
                break
        }
        command = input.shift()
    }
    console.log(`Your password is: ${str}`);
}
passwordResset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
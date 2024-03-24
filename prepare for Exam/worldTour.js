function worldTour(input) {
    let stopsString = input.shift();
    let command = input.shift();

    while (command !== 'Travel') {
        let tokens = command.split(':');
        let action = tokens.shift();

        switch (action) {
            case 'Add Stop': {
                let [idx, str] = tokens;
                if (idx >= 0 && idx < stopsString.length) {
                    stopsString = stopsString.substring(0, idx) + str + stopsString.substring(idx)
                }
                console.log(stopsString);
            }
                break;
            case 'Remove Stop': {
                let [startIdx, ednIdx] = tokens.map(Number)
                if (startIdx >= 0 && ednIdx < stopsString.length) {
                    stopsString = stopsString.substring(0, startIdx) + stopsString.substring(ednIdx + 1)
                }
                console.log(stopsString);
            }
                break;
            case 'Switch': {
                let [oldStr, newStr] = tokens

                if (stopsString.includes(oldStr)) {
                    stopsString = stopsString.replace(oldStr, newStr)

                }

                console.log(stopsString);
            }
                break
        }
        command = input.shift()

    }
    console.log(`Ready for world tour! Planned stops: ${stopsString}`);

}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
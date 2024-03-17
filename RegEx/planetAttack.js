function planetAttack(input) {
    let turns = Number(input.shift())
    let pattern = /[star]/gi
    let command = []

    for (let i = 0; i < turns; i++) {
        let ele = input.shift()
        let key = ele.match(pattern)
        if (key === null) {
            key = 0
        } else {
            key = key.length
        }
        let message = ''
        for (let idx of ele) {
            let value = idx.charCodeAt() - key
            let newIdx = String.fromCharCode(value)
            message += newIdx

        }
        command.push(message)
    }
    let patternMove = /@(?<name>[A-Z][a-z]+)[^@\-!:>]*:(?<popul>\d+)[^@\-!:>]*!(?<action>[AD])![^@\-!:>]*->(?<attacker>\d+)/g

    let attacked = [];
    let destroyed = []

    while ((valid = patternMove.exec(command)) !== null) {

        let { name, population, action, attackers } = valid.groups

        if (action === 'A') {
            attacked.push(name)
        } else {
            destroyed.push(name)
        }
    }
    attacked = attacked.sort((a, b) => a.localeCompare(b))
    console.log(`Attacked planets: ${attacked.length}`);

    for (let att of attacked) {
        console.log(`-> ${att}`);
    }
    destroyed = destroyed.sort((a, b) => a.localeCompare(b))
    console.log(`Destroyed planets: ${destroyed.length}`);
    for (let des of destroyed) {
        console.log(`-> ${des}`);
    }
}
planetAttack(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])
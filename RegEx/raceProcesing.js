function race(input) {
    let racers = input.shift().split(', ')
    let raceInfo = {};
    for (const currRacers of racers) {
        raceInfo[currRacers] = 0
    }
    let pattern = /[A-Za-z0-9]/g
    let paternName = /[A-Za-z]/g
    let patternDistance = /[0-9]/g

    for (let el of input) {
        if (el === 'end of race') {
            break;
        }
        let name = el.match(paternName).join('')
        let distance = el.match(patternDistance).map(Number)
        let sum = 0
        for (const ele of distance) {
            sum += ele
        }
        if (raceInfo.hasOwnProperty(name)) {
            raceInfo[name] += sum
        }
    }
    raceInfo = Object.entries(raceInfo).sort((a, b) => b[1] - a[1])
    console.log(`1st place: ${raceInfo[0][0]}`)
    console.log(`2nd place: ${raceInfo[1][0]}`)
    console.log(`3rd place: ${raceInfo[2][0]}`)
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])
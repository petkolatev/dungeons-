function lift(array) {
    let people = Number(array.shift());
    let wagons = array.shift().split(' ').map(Number)
    let index = 0

    while (people > 0) {
        let currWagon = wagons[index]
        if (currWagon === undefined) {
            break;
        }
        if (people >= 4) {
            let vagonSpace = 4 - currWagon
            wagons[index] += vagonSpace
            people -= vagonSpace
        } else {
            wagons[index] += people
            people -= people

        }

        index++
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`)
        console.log(wagons.join(' '));
    } else if (wagons[wagons.length - 1] === 4) {
        console.log(wagons.join(' '));
    } else {
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(' '));
    }
}
lift(["15",
    "0 0 0 0 0"])
// lift(["20",
//     "0 2 0"
// ])
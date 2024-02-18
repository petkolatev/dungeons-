function travelSpace(input) {
    let array = input.shift().split('||')
    let fuel = Number(input.shift());
    let amunition = Number(input.shift())

    let command = array.shift()
    while (command !== 'Titan') {
        let [action, point] = command.split(' ')
        switch (action) {
            case 'Travel':
                if (fuel >= point) {
                    fuel -= point
                    console.log(`The spaceship travelled ${point} light-years.`);
                } else {
                    console.log('Mission failed.');
                    return;
                }
                break;;
            case 'Enemy':
                if (amunition >= point) {
                    amunition -= point
                    console.log(`An enemy with ${point} armour is defeated.`);
                } else {
                    if (fuel >= point * 2) {
                        fuel -= point * 2
                        console.log(`An enemy with ${point} armour is outmaneuvered.`);
                    } else {
                        console.log('Mission failed.');
                        return
                    }
                }
                break;
            case 'Repair':
                fuel += Number(point)
                amunition += Number(point) * 2
                console.log(`Ammunitions added: ${point * 2}.`);
                console.log(`Fuel added: ${point}.`);
                break;

        }
        command = array.shift()
    }
    console.log(`You have reached Titan, all passengers are safe.`);
}
travelSpace(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])
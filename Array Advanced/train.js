function addPassengers(array) {
    let containingWagon = array.shift().split(' ');
    let maxCapacity = array.shift();

    for (let i = 0; i < array.length; i++) {
        let [command, num] = array[i].split(' ')
        if (command === 'Add') {
            containingWagon.push(num)

        } else {
            for (let j = 0; j < containingWagon.length; j++) {
                let currWagon = Number(containingWagon[j]);
                command = Number(command)
                if (command + currWagon <= maxCapacity) {
                    command += currWagon
                    containingWagon.splice(j, 1, command.toString())
                    break;
                }

            }
        }

    }
    console.log(containingWagon.join(' '));

}
addPassengers(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])
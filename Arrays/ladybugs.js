function ladybugs(array) {
    let size = array[0];
    let ladybugsIndeces = array[1].split(' ').map(Number)
    let field = [];

    for (let i = 0; i < size; i++) {
        if (ladybugsIndeces.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let j = 2; j < array.length; j++) {
        let command = array[j].split(' ');
        let ladybugPositon = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2])

        if (!field[ladybugPositon]) {
            continue;
        }
        field[ladybugPositon] = 0;

        if (direction === 'left') {
            let newIndex = ladybugPositon - flyLength
            if (newIndex >= 0) {
                while (field[newIndex] === 1) {
                    newIndex -= flyLength
                }
                if (newIndex >= 0) {
                    field[newIndex] = 1
                }
            }
        } else {

            let newIndex = ladybugPositon + flyLength

            if (newIndex < field.length) {
                while (field[newIndex] === 1) {
                    newIndex += flyLength
                }
                if (newIndex < field.length) {
                    field[newIndex] = 1
                }
            }

        }


    }
    console.log(field.join(' '));

}
// ladybugs([3, '0 1',
//     '0 right 1',
//     '2 right 1'])
ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'])
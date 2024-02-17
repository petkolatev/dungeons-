function arrayModifier(input) {

    let array = input.shift().split(' ').map(Number);
    let commands = input.shift();

    while (commands !== 'end') {
        let [command, index1, index2] = commands.split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        switch (command) {
            case 'swap':
                let temp = array[index1];
                array[index1] = array[index2];
                array[index2] = temp;
                break;
            case 'multiply':
                let sum = Number(array[index1]) * Number(array[index2]);
                array.splice(index1, 1, sum)
                break
            case 'decrease':
                let result = array.map(n => n - 1)
                array = result
                break

        }
        commands = input.shift()
    }
    console.log(array.join(', '));

}
arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
function arrayOfManipulation(array) {
    let stringForManipulation = array.shift().split(' ')
    for (let i = 0; i < array.length; i++) {
        let [command, num, num2] = array[i].split(' ')
        switch (command) {
            case 'Add':
                stringForManipulation.push(num);
                break;
            case 'Remove':
                stringForManipulation = stringForManipulation.filter(n => n !== num)
                break;
            case 'RemoveAt':
                stringForManipulation.splice(num, 1)
                break;
            case 'Insert':
                stringForManipulation.splice(num2, 0, num)
                break;
        }

    }
    console.log(stringForManipulation.join(' '));

}
// arrayOfManipulation(['4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',
//     'Insert 8 3'])
arrayOfManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])
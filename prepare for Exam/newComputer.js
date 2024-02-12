function buyNewComputer(array) {
    let sumWitoutTaxes = 0;
    let index = 0
    let command = array[index]
    let totalSum = 0

    while (command !== 'special' && command !== 'regular') {
        let curr = Number(command)
        if (curr > 0) {
            sumWitoutTaxes += curr
        } else {
            console.log(`Invalid price!`);
        }
        index++
        command = array[index]
    }

    if (sumWitoutTaxes > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sumWitoutTaxes.toFixed(2)}$`);
        totalSum = sumWitoutTaxes * 1.2

        let taxes = totalSum - sumWitoutTaxes
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        if (command === 'special') {
            totalSum *= 0.9

        }
        console.log(`-----------`);
        console.log(`Total price: ${totalSum.toFixed(2)}$`);
    } else if (command === 'regular' && totalSum < 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Invalid order!`)
    }

}
buyNewComputer(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]))
// buyNewComputer(([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 'regular'
// ]))
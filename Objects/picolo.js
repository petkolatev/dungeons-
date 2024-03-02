function parkingPicolo(input) {
    let parking = {}

    for (let tokens of input) {
        let [comand, carNumber] = tokens.split(', ')
        if (comand === 'IN') {
            parking[carNumber] = carNumber
        } else {
            delete parking[carNumber]
        }
    }
    parking = Object.entries(parking).sort()
    if (parking.length > 0) {
        for (let [car, number] of parking) {
            console.log(number);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}
parkingPicolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
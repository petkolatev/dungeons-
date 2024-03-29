function needForSpeed(input) {
    let cars = Number(input.shift())
    let tournament = [];

    for (let i = 0; i < cars; i++) {
        let [currCar, millage, fuel] = input.shift().split('|')
        millage = Number(millage);
        fuel = Number(fuel);

        tournament[currCar] = {
            millage: millage,
            fuel: fuel
        }
    }
    let command = input.shift();

    while (command !== 'Stop') {
        let tokens = command.split(' : ');
        let action = tokens.shift();
        if (action === 'Drive') {
            let [car, distance, gas] = tokens
            distance = Number(distance);
            gas = Number(gas)
            if (tournament[car].fuel >= gas) {
                tournament[car].millage += Number(distance);
                tournament[car].fuel -= Number(gas)
                console.log(`${car} driven for ${distance} kilometers. ${gas} liters of fuel consumed.`);
            } else {
                console.log('Not enough fuel to make that ride');
            }
            if (tournament[car].millage > 100000) {
                delete tournament[car]
                console.log(`Time to sell the ${car}!`);
            }

        } else if (action === 'Refuel') {
            let [car, gas] = tokens;
            gas = Number(gas)
            if (tournament[car].fuel + gas > 75) {
                let TopUp = 75 - tournament[car].fuel
                tournament[car].fuel = 75;
                console.log(`${car} refueled with ${TopUp} liters`);
            } else {
                tournament[car].fuel += gas
                console.log(`${car} refueled with ${gas} liters`);
            }
        } else if (action === 'Revert') {
            let [car, millage] = tokens;
            millage = Number(millage)
            if (tournament[car].millage - millage < 10000) {
                tournament[car].millage = 10000;
            } else {
                tournament[car].millage -= millage
                console.log(`${car} mileage decreased by ${millage} kilometers`);
            }
        }
        command = input.shift()
    }
    tournament = Object.entries(tournament);

    for (let [car, info] of tournament) {
        console.log(`${car} -> Mileage: ${info.millage} kms, Fuel in the tank: ${info.fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
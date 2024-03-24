function plantDiscovery(input) {
    let numb = Number(input.shift());
    let store = {};

    for (let i = 0; i < numb; i++) {
        let [plant, rarity] = input.shift().split('<->')
        rarity = Number(rarity)
        store[plant] = { rarity: rarity }
    }
    let command = input.shift()

    while (command !== 'Exhibition') {
        let tokens = command.split(': ');
        let action = tokens.shift();
        tokens = tokens.join('').split(' - ')

        switch (action) {
            case 'Rate': {
                let plant = tokens[0];
                let rating = tokens[1]
                if (store.hasOwnProperty(plant)) {
                    if (store[plant].hasOwnProperty('rating')) {
                        store[plant].rating += ` ${rating}`
                    } else {
                        store[plant].rating = rating
                    }
                } else {
                    console.log('error');
                }
            }
                break;
            case 'Update': {
                let plant = tokens[0];
                let rarity = Number(tokens[1])
                if (store.hasOwnProperty(plant)) {
                    store[plant].rarity = rarity
                } else {
                    console.log('error');
                }
            }
                break;
            case 'Reset': {
                let plant = tokens[0];
                if (store.hasOwnProperty(plant)) {
                    store[plant].rating = 0
                } else {
                    console.log('error');
                }
            }
                break;
        }
        command = input.shift()
    }
    store = Object.entries(store)
    console.log(`Plants for the exhibition:`)
    for (let [plant, info] of store) {
        let sum = 0
        let avgRating = 0
        if (info.rating) {
            let rating = info.rating.split(' ').map(Number)
            for (let ele of rating) {
                sum += ele
            }
            avgRating = sum / rating.length
        }
        console.log(`- ${plant}; Rarity: ${info.rarity}; Rating: ${avgRating.toFixed(2)}`);
    }

}
plantDiscovery(["0",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Welwitschia<->10",
    "Rate: Woodii - 10",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
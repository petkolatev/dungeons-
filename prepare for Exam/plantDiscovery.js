function plantDiscovery(input) {
    let numb = Number(input.shift());
    let store = [];

    for (let i = 0; i < numb; i++) {
        let [plant, rarity] = input.shift().split('<->')
        rarity = Number(rarity)
        store[plant] = {
            rarity: rarity,
            rating: []
        }
    }
    let command = input.shift()

    while (command !== 'Exhibition') {
        let tokens = command.split(': ');
        let action = tokens.shift();
        tokens = tokens.join('').split(' - ')

        if (action === 'Rate') {
            let plant = tokens[0];
            let rating = Number(tokens[1])
            if (store.hasOwnProperty(plant)) {
                store[plant].rating.push(rating)

            } else {
                console.log('error');
            }
        } else if (action === 'Update') {
            let plant = tokens[0];
            let rarity = Number(tokens[1])
            if (store.hasOwnProperty(plant)) {
                store[plant].rarity = rarity
            } else {
                console.log('error');
            }
        } else if (action === 'Reset') {
            let plant = tokens[0];
            if (store.hasOwnProperty(plant)) {
                store[plant].rating = []
            } else {
                console.log('error');
            }
        }
        command = input.shift()
    }
    console.log(`Plants for the exhibition:`)
    store = Object.entries(store)
    for (let [plant, info] of store) {
        let sum = 0
        let ratingsSum = info.rating.reduce((a, b) => a + b, 0)
        let avgRating = ratingsSum / info.rating.length || 0
        console.log(`- ${plant}; Rarity: ${info.rarity}; Rating: ${avgRating.toFixed(2)}`);
    }

}
plantDiscovery(["4",
    "Arnoldii<->4",
    "Welwitschia<->2",
    "Woodii<->7",
    "Welwitschia<->10",
    "Rate: Woo - 10",
    "Rate: Woodii - 10",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
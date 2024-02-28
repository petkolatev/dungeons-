function storage(input) {
    let store = {};

    input.forEach(element => {
        let [product, quantity] = element.split(' ')

        if (!store.hasOwnProperty(product)) {
            store[product] = Number(quantity)
        } else {
            store[product] += Number(quantity)
        }
    });

    for (let curr in store) {
        console.log(`${curr} -> ${store[curr]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])
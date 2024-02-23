function checkStoreProvision(stock, ordered) {
    let storeProvision = [];
    class Store {
        constructor(name, qty) {
            this.name = name;
            this.qty = qty
        }
    }
    for (let i = 0; i < stock.length; i += 2) {
        let name = stock[i];
        let qty = Number(stock[i + 1]);
        let newProduct = new Store(name, qty);
        storeProvision.push(newProduct);
    }
    for (let i = 0; i < ordered.length; i += 2) {
        let name = ordered[i];
        let qty = Number(ordered[i + 1]);
        let productFind = storeProvision.find(n => n.name === name);
        if (productFind) {
            productFind.qty += qty
        } else {
            let newProduct = new Store(name, qty);
            storeProvision.push(newProduct);
        }
    }
    for (let row of storeProvision) {
        console.log(`${row.name} -> ${row.qty}`);
    }
}
checkStoreProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
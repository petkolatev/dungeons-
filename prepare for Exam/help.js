function coffeeLover(arr) {
    let startingCoffeeList = arr.shift().split(' ');
    let countCommand = Number(arr.shift());

    for (let i = 0; i < countCommand; i++) {
        let [action, firstItem, secondItem] = arr.shift().split(' ')

        if (action === 'Include') {
            startingCoffeeList.push(firstItem);
        } else if (action === 'Remove') {
            if (firstItem === 'first') {
                startingCoffeeList.splice(0, secondItem);

            } else if (firstItem === 'last') {
                for (let j = 0; j < secondItem; j++) {
                    startingCoffeeList.pop();
                }
            }
        } else if (action === 'Prefer') {
            let replaced = startingCoffeeList[Number(firstItem)];
            startingCoffeeList[Number(firstItem)] = startingCoffeeList[Number(secondItem)];
            startingCoffeeList[Number(secondItem)] = replaced

        } else if (action === 'Reverse') {
            startingCoffeeList.reverse();
        }
    }

    console.log('Coffees:');
    console.log(`${startingCoffeeList.join(' ')}`);

}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])
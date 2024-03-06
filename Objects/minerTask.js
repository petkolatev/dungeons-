function calculateMinerTask(input) {
    let storageResource = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = Number(input[i + 1])
        if (resource in storageResource) {
            storageResource[resource] += qty
        } else {
            storageResource[resource] = qty
        }
    }
    for (let element in storageResource) {
        console.log(`${element} -> ${storageResource[element]}`);
    }

}
calculateMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])
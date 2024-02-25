function registrationHeroes(arr) {
    let heroesList = [];
    for (let currRow of arr) {
        let [name, level, items] = currRow.split(' / ')
        let heroeObj = { name, level, items }
        heroesList.push(heroeObj)
    }
    let sortedHeroesList = heroesList.sort((a, b) => a.level - b.level)
    for (let i of sortedHeroesList) {
        console.log(`Hero: ${i.name}`);
        console.log(`level => ${i.level}`);
        console.log(`items => ${i.items}`);
    }

}
registrationHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
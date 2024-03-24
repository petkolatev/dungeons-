function pianist(input) {
    let numb = Number(input.shift());
    let store = {}

    for (let i = 0; i < numb; i++) {
        let [song, composer, key] = input.shift().split('|')
        store[song] = { composer, key }
    }
    let command = input.shift()

    while (command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();
        switch (action) {
            case 'Add': {
                let [song, composer, key] = tokens
                if (song in store) {
                    console.log(`${song} is already in the collection!`);
                } else {
                    store[song] = { composer, key }
                    console.log(`${song} by ${composer} in ${key} added to the collection!`);
                }
            }
                break;
            case 'Remove': {
                let song = tokens
                if (song in store) {
                    delete store[song]
                    console.log(`Successfully removed ${song}!`);
                } else {
                    console.log(`Invalid operation! ${song} does not exist in the collection.`);
                }
            }
                break;
            case 'ChangeKey': {
                let [song, newkey] = tokens;
                if (song in store) {
                    store[song].key = newkey
                    console.log(`Changed the key of ${song} to ${newkey}!`);
                } else {
                    console.log(`Invalid operation! ${song} does not exist in the collection.`);
                }
            }
        }
        command = input.shift()
    }
    store = Object.entries(store);

    for (const [song, info] of store) {
        console.log(`${song} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
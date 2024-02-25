function makeDictionary(input) {
    let store = []
    for (let element of input) {
        let stringElement = JSON.parse(element)
        let obj = Object.entries(stringElement)
        let name = obj[0];
        let [term, description] = name
        let checkStore = store.find(n => n.term === term)
        if (checkStore) {
            checkStore.description = description
        } else {
            let createObj = { term: term, description: description }
            store.push(createObj)
        }

        store = store.sort((a, b) => a.term.localeCompare(b.term))
    }

    for (let row of store) {
        console.log(`Term: ${row.term} => Definition: ${row.description} `);
    }
}
makeDictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])
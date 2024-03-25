function travelDestination(input) {
    let pattern = /([=\/])(?<dest>[A-Z][A-Za-z]{2,})\1/g
    let store = []
    let travelPoint = 0

    while ((valid = pattern.exec(input)) !== null) {
        let dest = valid.groups.dest
        store.push(dest)
        travelPoint += dest.length
    }

    console.log(`Destinations: ${store.join(', ')}`);
    console.log(`Travel Points: ${travelPoint}`);
}
travelDestination("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
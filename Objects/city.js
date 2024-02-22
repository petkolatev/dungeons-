function city(input) {

    let containCity = Object.entries(input)

    for (let i = 0; i < containCity.length; i++) {
        let [key, value] = containCity[i]
        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
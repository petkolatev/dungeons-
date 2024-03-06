function sortTravelOffers(input) {
    let travelList = {};

    input.forEach(element => {
        let [country, town, price] = element.split(' > ')
        if (!travelList.hasOwnProperty(country)) {
            travelList[country] = country
            if (!travelList[country].hasOwnProperty(town)) {


                travelList[country] = { [town]: price }


            }
        } else {
            if (!travelList[country].hasOwnProperty(town)) {
                travelList[country][town] = Number(price)
            } else {
                if (travelList[country][town] > Number(price)) {
                    travelList[country][town] = Number(price)
                }
            }
        }
    });

    travelList = Object.entries(travelList).sort((a, b) => a[0].localeCompare(b[0]))
    let output = []
    for (let [country, towns] of travelList) {
        country = `${country} ->`
        output.push(country)
        towns = Object.entries(towns).sort((a, b) => a[1] - b[1])
        for (let [currTown, price] of towns) {
            output.push(`${currTown} ->`, price)
        }
        console.log(output.join(' '));
        output = []
    }
}
sortTravelOffers([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000"
])
function printCityLocation(arr) {
    class City {
        constructor(city, latitude, longitude) {
            this.town = city;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
    }
    let cityList = []
    for (let curr of arr) {
        let [town, latitude, longitude] = curr.split(' | ');
        let city = new City(town, latitude, longitude);
        cityList.push(city)
    }
    for (let i of cityList) {
        console.log(`{ town: '${i.town}', latitude: '${i.latitude}', longitude: '${i.longitude}' }`);
    }
}
printCityLocation(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)
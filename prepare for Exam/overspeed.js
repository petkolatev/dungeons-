function solve(speed, area) {

    if (area === 'motorway') {
        let motorwayLimit = 130
        if (speed <= motorwayLimit) {
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        } else {
            let status = ''
            let overSpeed = speed - motorwayLimit
            if (overSpeed <= 20) {
                status = 'speeding'
            } else if (overSpeed <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
        }
    } else if (area === 'interstate') {
        let interstateLimit = 90
        if (speed <= interstateLimit) {
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        } else {
            let status = ''
            let overSpeed = speed - interstateLimit
            if (overSpeed <= 20) {
                status = 'speeding'
            } else if (overSpeed <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
        }
    } else if (area === 'city') {
        let cityLimit = 50
        if (speed <= cityLimit) {
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        } else {
            let status = ''
            let overSpeed = speed - cityLimit
            if (overSpeed <= 20) {
                status = 'speeding'
            } else if (overSpeed <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
        }
    } else if (area === 'residential') {
        let residentialLimit = 20
        if (speed <= residentialLimit) {
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        } else {
            let status = ''
            let overSpeed = speed - residentialLimit
            if (overSpeed <= 20) {
                status = 'speeding'
            } else if (overSpeed <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
        }

    }
}
solve(52, 'city')
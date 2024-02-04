function pointValidation(array) {
    let [x1, y1, x2, y2] = array

    let d1 = distance(x1, y1, 0, 0);
    let d2 = distance(x2, y2, 0, 0);
    let d3 = distance(x1, y1, x2, y2);


    let v1 = isValid(d1);
    let v2 = isValid(d2);
    let v3 = isValid(d3);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${v1 ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${v2 ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${v3 ? "valid" : "invalid"}`)

    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isValid(distance) {
        return Number.isInteger(distance);
    }
}
// pointValidation([3, 0, 0, 4])
pointValidation([2, 1, 1, 1])


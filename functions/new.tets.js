
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}


function isValid(distance) {
    return Number.isInteger(distance);
}


function checkPoints(points) {

    let [x1, y1, x2, y2] = points;

    let d1 = distance(x1, y1, 0, 0); // Distance from point 1 to the origin
    let d2 = distance(x2, y2, 0, 0); // Distance from point 2 to the origin
    let d3 = distance(x1, y1, x2, y2); // Distance between point 1 and point 2


    let v1 = isValid(d1);
    let v2 = isValid(d2);
    let v3 = isValid(d3);


    console.log(`{${x1}, ${y1}} to {0, 0} is ${v1 ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${v2 ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${v3 ? "valid" : "invalid"}`);
}


checkPoints([3, 4, 5, 6]); // Valid, invalid, invalid
checkPoints([0, 0, 0, 0]); // Valid, valid, valid
checkPoints([2, 3, 4, 5]); // Invalid, invalid, valid

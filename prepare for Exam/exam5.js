function exam5(input) {
    let pattern = /([@#]+)(?<color>[a-z]{3,})([@#]+)[^\w\d]*\/+(?<digit>[\d]+)\/+/g

    while ((valid = pattern.exec(input)) !== null) {
        console.log(`You found ${valid.groups.digit} ${valid.groups.color} eggs!`);
    }

}
exam5(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])

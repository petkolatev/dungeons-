function characterInRange(first, second) {
    let start = first.charCodeAt(0)
    let end = second.charCodeAt(0)
    let betwenPoint = []

    if (start < end) {
        for (let i = start + 1; i < end; i++) {
            let currElement = String.fromCharCode(i)
            betwenPoint.push(currElement);

        }
    } else {
        for (let i = end + 1; i < start; i++) {
            let currElement = String.fromCharCode(i)
            betwenPoint.push(currElement);
        }
    }

    console.log(betwenPoint.join(' '));
}
characterInRange('C',
    '#')
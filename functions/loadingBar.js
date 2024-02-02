function loadingBar(num) {
    let complete = [];
    for (let i = 0; i < 10; i++) {
        if (i < num / 10) {
            complete.push('%')
        } else {
            complete.push('.')
        }
    }

    if (num === 100) {
        console.log('100% Complete!');
        console.log(`[${complete.join('')}]`);
    } else {
        console.log(`${num}% [${complete.join('')}]`);
        console.log(`Still loading...`);
    }

}
loadingBar(100)
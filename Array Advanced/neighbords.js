function neighbord(arr) {
    let match = 0

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i]


        for (let j = 1; j < first.length; j++) {
            let check1 = first[j];
            let check2 = first[j - 1];
            if (check1 === check2) {
                match++
                j++
            }
        }
        if (i + 1 < arr.length) {
            let second = arr[i + 1]
            for (let k = 0; k < first.length; k++) {
                let check5 = first[k];
                let check6 = second[k]
                if (check5 === check6) {
                    match++
                }
            }
        }
    }

    console.log(match);
}
// neighbord([['test', 'yo', 'yo', 'ho'],
// ['well', 'done', 'no', '6'],
// ['not', 'done', 'yet', '5']])
// neighbord([['2', '3', '4', '7', '0'],
// ['4', '5', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']])
neighbord([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']])
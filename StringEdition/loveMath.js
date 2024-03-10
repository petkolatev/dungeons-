function changeLetterWithNumbers(input) {
    input = input.split(' ');
    let result1 = 0;
    let result2 = 0


    for (let curr of input) {
        if (curr.length > 0) {
            let firstLetter = curr[0]
            let lastLetter = curr[curr.length - 1]

            if (/[A-Z]/.test(firstLetter)) {
                let num = curr.charCodeAt([0])
                let sum = Number(curr.substring(1, curr.length - 1)) / (num - 64)
                result1 += sum

            } else {
                let num = curr.charCodeAt([0])
                let sum = Number(curr.substring(1, curr.length - 1)) * (num - 96)
                result1 += sum
            }
            if (/[a-z]/.test(lastLetter)) {
                let num = curr.charCodeAt([curr.length - 1])
                let sum = (num - 96)
                result1 += sum
            } else {
                let num = curr.charCodeAt([curr.length - 1])
                let sum = (num - 64)
                result1 -= sum
            }
        }

    }

    console.log(result1.toFixed(2));

}
changeLetterWithNumbers('P34562Z q2576f   H456z')
function solve(input) {
    let n = input.length

    let magickSum = 0
    let isTrue = true

    for (let i = 0; i < n; i++) {
        magickSum += input[0][i]
    }
    for (let i = 0; i < n; i++) {
        let rowSum = 0
        for (let j = 0; j < n; j++) {
            rowSum += input[i][j]
        }
        if (magickSum !== rowSum) {
            isTrue = false
            break
        }
    }
    for (let i = 0; i < n; i++) {
        let columSum = 0
        for (let j = 0; j < n; j++) {
            columSum += input[j][i]
        }
        if (magickSum !== columSum) {
            isTrue = false
            break
        }
    }

    console.log(isTrue);
}
solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)
function bunyBomb(array) {
    let row = []
    let bombCordinate = array.pop().split(' ')
    let bunyPlaces
    for (let i of array) {
        i.split(' ')
        row.push(i.split(' '))

    }
    array.forEach((row, rowNumber) => {
        let rowBunnies = row.split(" ")
        rowBunnies.forEach((bunyHp, columnNumber) => {
            let itIsABomb = bombCordinate.some((bomb) => {
                const bombRow = bomb[0]
                const bombColumn = bomb[2]
                return Number(bombRow) === rowNumber && Number(bombColumn) === columnNumber
            })
            if (!itIsABomb) {
                return
            }
            console.log(`bomb at ${rowNumber}:${columnNumber}`);
            let prevRowValue = row[rowNumber - 1] ? row[rowNumber - 1][columnNumber - 1] : 0
            let currRowValue = row[rowNumber - 1] ? row[rowNumber - 1][columnNumber - 1] : 0
            let nextRowValue = row[rowNumber - 1] ? row[rowNumber - 1][columnNumber - 1] : 0

            let currRowCurrValue = row[rowNumber] ? row[rowNumber][columnNumber - 1] : 0
            let nextRowCurrValue = row[rowNumber] ? row[rowNumber][columnNumber + 1] : 0


            console.log(prevRowValue, currRowValue, nextRowValue);
            console.log(currRowCurrValue, nextRowCurrValue);



        })






    })
}
bunyBomb(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'])
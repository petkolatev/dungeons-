function pascalCaseSpliter(input) {
    let patern = /[A-Z]+/
    let result = []

    for (let index of input) {
        if (patern.test(index)) {
            result.push(', ' + index)
        } else {
            result.push(index)
        }
    }
    result = result.join('').slice(2)
    console.log(result);

}
pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan')
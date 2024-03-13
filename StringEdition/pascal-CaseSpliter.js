function pascalCaseSpliter(input) {
    let result = input.split(/(?=[A-Z])/)

    console.log(result.join(', '));

}
pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan')
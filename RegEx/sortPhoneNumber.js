function sortPhoneNumber(input) {
    input = input.join(' ')
    let patern = /((\+359)(\-)(2)(\-)(\d{3})(\-)(\d{4})\b)|((\+359)( )(2)( )(\d{3})( )(\d{4})\b)/g
    let validNames = []

    while ((validName = patern.exec(input)) !== null) {
        validNames.push(validName[0])
    }
    console.log(validNames.join(', '));

}
sortPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])

function nameReg(input) {
    input = input.split(', ')
    let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let validNames = []

    while ((validName = patern.exec(input)) !== null) {
        validNames.push(validName[0])
    }
    console.log(validNames.join(' '));

}
nameReg("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)
function furniture(input) {
    let pattern = />>(?<prod>[A-Z][A-Za-z]+)<<(?<price>[\d]+|[.\d]+)!(?<qty>[\d]+)/
    let money = 0
    console.log(`Bought furniture:`);

    for (let el of input) {
        if (el === 'Purchase') {
            break;
        }
        if (pattern.test(el)) {
            valid = pattern.exec(el)
            let product = valid.groups['prod']
            console.log(product);
            money += valid.groups['price'] * valid.groups['qty']

        }
    }
    console.log(`Total money spend: ${money.toFixed(2)}`);

}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)
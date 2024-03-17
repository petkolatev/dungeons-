function softUniBarIncoming(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%([^|%$.]+)*<(?<prod>[\w]+)>([^|%$.]+)*\|(?<qty>[\d]+)\|([^|%$.\d]+)*(?<price>[\d.]+)\$/g
    let totalSum = 0

    while ((valid = pattern.exec(input)) !== null) {
        let name = valid.groups['name']
        let product = valid.groups['prod']
        let price = Number(valid.groups['qty']) * Number(valid.groups['price'])
        totalSum += price

        console.log(`${name}: ${product} - ${price.toFixed(2)}`);

    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);


}
softUniBarIncoming(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])
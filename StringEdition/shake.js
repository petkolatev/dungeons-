function shakeElements(input) {
    let text = input[0];
    let patern = input[1];

    while (text.includes(patern)) {

        let first = text.indexOf(patern)
        let left = text.substring(0, first)
        let rigth = text.substring(first + patern.length)
        text = left + rigth
        let last = text.lastIndexOf(patern);
        left = text.substring(0, last)
        rigth = text.substring(last + patern.length)
        text = left + rigth

        let midle = Math.floor(patern.length / 2)
        left = patern.substring(0, midle);
        rigth = patern.substring(midle + 1);
        patern = left + rigth
        console.log('Shaked it.');
        if (patern.length <= 1) {
            break
        }


    }
    console.log('No shake.');
    console.log(text);
}
shakeElements(['##mtm!!mm.mm*mtm.#',
    'mtm'])
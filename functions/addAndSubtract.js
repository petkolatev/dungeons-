function subtract(first, second, third) {

    function add(f, s) {
        return f + s
    }
    let addResult = add(first, second)
    console.log(addResult - third);
}
subtract(42, 58, 100)

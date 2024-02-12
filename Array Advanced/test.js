function sum(arr) {
    let newArr = arr.map(n => n + 1)
    newArr.sort((a, b) => a.localeCompare(b))
    console.log(newArr);
}
sum(['asd', 'ddds', 'wrr', 'ewwdff'])
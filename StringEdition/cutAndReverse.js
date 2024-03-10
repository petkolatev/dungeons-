function cutAndReverse(input) {
    let halfLength = input.length / 2

    let leftHalf = input.substring(0, halfLength).split('').reverse().join('');
    let rightHalf = input.substring(halfLength).split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
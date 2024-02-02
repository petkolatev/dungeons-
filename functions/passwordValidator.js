function passwordValidator(pass) {
    let isValidLength = checkLength(pass)
    let hasCheckONlyLetterAndDigit = checkOnlyLettersAndDigit(pass)
    let hasMin2Digit = checkDigitCount(pass)

    if (isValidLength && hasCheckONlyLetterAndDigit && hasMin2Digit) {
        console.log("Password is valid");
    }


    function checkLength(password) {

        if (password.length < 6 || password.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            return false;
        } else {
            return true;
        }
    }
    function checkOnlyLettersAndDigit(password) {
        let pattern = /^[A-Za-z0-9]+$/;
        let isValid = pattern.test(password);

        if (isValid) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }
    function checkDigitCount(password) {
        let pattern = /[0-9]{2,}/;
        let isValid = pattern.test(password);

        if (isValid) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }
}
passwordValidator('Pa$s$s')
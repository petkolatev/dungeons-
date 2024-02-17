function reception(array) {
    let firstTeacher = Number(array.shift());
    let secondTeacher = Number(array.shift());
    let tirthTeacher = Number(array.shift());
    let students = Number(array.shift());

    let studentPerHour = firstTeacher + secondTeacher + tirthTeacher;
    let neededHours = 0

    while (students > 0) {

        students -= studentPerHour
        neededHours++
        if (neededHours % 4 === 0) {
            neededHours++
        }
    }
    console.log(`Time needed: ${neededHours}h.`);
}
reception(['3', '2', '5', '40'])
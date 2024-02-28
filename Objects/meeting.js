function meetingCalendar(input) {
    let calendar = {};

    input.forEach(element => {
        let [day, person] = element.split(' ')

        if (!calendar.hasOwnProperty(day)) {
            calendar[day] = person
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });
    for (let element in calendar) {
        console.log(`${element} -> ${calendar[element]}`);
    }
}
meetingCalendar(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])
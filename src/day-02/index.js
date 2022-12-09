function countHours(year, holidays) {
    const isHoliday = (date) => date.getDay() > 0 && date.getDay() < 6;
    return holidays
        .reduce((s, holiday) =>
            isHoliday(new Date(holiday.concat("/", year))) ? s + 2 : s, 0);
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25']  // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

const hours = countHours(year, holidays) // 2 días -> 4 horas extra en el año
console.log(hours);


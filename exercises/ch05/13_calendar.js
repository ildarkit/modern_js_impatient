function calendar(month, year, locale = 'ru-RU') {
    let date = new Date(year, month - 1);
    let monthStartDay = locale == 'ru-RU' ? date.getDay() - 1: date.getDay();
    let lastDate = lastMonthDate(date);
    let days = monthDays(monthStartDay, lastDate);
    let startWeek = 0;
    let endWeek = 7;
    let calendar = [];

    while (startWeek < lastDate + monthStartDay) {
        calendar.push(days.slice(startWeek, endWeek).join(' '));
        startWeek = endWeek;
        endWeek += 7;
    }
    return calendar.join('\n');
}

function lastMonthDate(date) {
    let current = date.getMonth();
    let lastDate = 28;
    while (current === date.getMonth()) {
        lastDate++;
        date.setDate(lastDate);
    }
    return lastDate - 1;
}

function monthDays(startDayIndex, lastDate) {
    return Array.from(
        {length: lastDate + startDayIndex},
        (_, i) => {
            if (i < startDayIndex)
                return '  ';
            else {
                let date = (i + 1 - startDayIndex).toString();
                if (date.length == 1) return ' ' + date;
                else return date;
            };
        }
    );
}

console.log(calendar(2, 2023));
console.log(calendar(2, 2024));
console.log(calendar(5, 2024));
console.log(calendar(1, 2000));
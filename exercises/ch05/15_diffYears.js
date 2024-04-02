function deltaYears(date1, date2) {
    let years = 0;
    let days = Math.trunc(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();

    let yearsRange = year1 > year2 ? [year2, year1]: [year1, year2];

    for (let i = 1; yearsRange[0] + i < yearsRange[1]; i++) {
        days = minusYearFromDays(yearsRange[0] + i, days);
        years++;
    }
    for (let i = 0; i < 2; i++) {
        let restDays = minusYearFromDays(yearsRange[i], days);
        if (restDays < days) {
            days = restDays;
            years++;
        }
    } 
    return {years, days};
}

function leapYear(year) {
    return (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0));
}

function minusYearFromDays(year, days) {
    if (leapYear(year)) {
        if (days > 365) days -= 366;
    }
    else if (days > 364) days -= 365;
    return days;
}

console.log(deltaYears(
    new Date(2024, 11, 31, 13, 43, 36, 500),
    new Date(2004, 0, 1, 13, 43, 50)));
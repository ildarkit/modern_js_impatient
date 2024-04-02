function deltaYears(date1, date2) {
    let yearsCounter = 0;
    let days = Math.trunc(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();

    let [startYear, endYear] = year1 > year2 ? [year2, year1]: [year1, year2];

    for (let i = 1; startYear + i < endYear; i++) {
        if (leapYear(startYear + i)) days -= 366;
        else days -= 365;
        yearsCounter++;
    }
    while (days >= 365) {
        days -= 365;
        yearsCounter++; 
    }
    if (days == 0 && (leapYear(startYear) || leapYear(endYear)))
        yearsCounter--;
    return {years: yearsCounter, days};
}

function leapYear(year) {
    return (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0));
}

console.log(deltaYears(
    new Date(2024, 11, 31, 13, 43, 36, 500),
    new Date(2004, 0, 1, 13, 43, 50)));
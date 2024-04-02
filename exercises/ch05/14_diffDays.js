function deltaDays(date1, date2) {
    let daysDelta = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
    let days = Math.trunc(daysDelta);
    let hoursMinutes = 24 * (daysDelta - days);
    let hours = Math.trunc(hoursMinutes);
    let minutes = Math.trunc(60 * (hoursMinutes - hours));
    return {days, hours, minutes};
}

console.log(deltaDays(
    new Date(2024, 2, 30, 13, 43, 36, 500),
    new Date(2024, 3, 1, 13, 43, 50)));
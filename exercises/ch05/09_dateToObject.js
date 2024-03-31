function dateToObject(date) {
    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day: date.getUTCDate(),
        weekday: date.toLocaleDateString('ru-RU', {weekday: 'short'}),
        hours: date.getUTCHours(),
        minutes: date.getUTCMinutes(),
        seconds: date.getUTCSeconds(),
        millis: date.getUTCMilliseconds(),
    };
}

console.log(dateToObject(new Date()));
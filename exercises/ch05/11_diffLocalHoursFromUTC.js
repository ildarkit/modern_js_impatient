function diffLocalHoursUTC(date) {
    return date.getHours() - date.getUTCHours();
}

console.log(diffLocalHoursUTC(new Date()));
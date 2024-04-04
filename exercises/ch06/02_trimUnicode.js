function trimUnicodeString(str, count) {
    let result = Array.from(str).slice(0, count).join('');
    if (result.length < str.length) result += '\u{2026}';
    return result;
}

console.log(trimUnicodeString('hi 😋,🌐!', 6));
console.log(trimUnicodeString('😋,🌐!', 4));
console.log(trimUnicodeString('hi,!', 5));
console.log(trimUnicodeString('welcome,😋!', 7));
console.log(trimUnicodeString('hi,😋!', 4));
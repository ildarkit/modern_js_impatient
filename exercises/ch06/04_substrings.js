function substrings(str) {
    let chars = Array.from(str);
    let result = [];
    for (let i = 0; i < chars.length; i++) {
        result.push(chars[i]);
        let currentSubString = chars[i];
        for (let j = i + 1; j < chars.length; j++) {
            currentSubString += chars[j];
            result.push(currentSubString);
        }
    }
    return result;
}

console.log(JSON.stringify(substrings('Bạn khỏe😋, không?🌐')));
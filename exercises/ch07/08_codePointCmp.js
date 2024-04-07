function stringCodePointCmp(str, otherStr) {
    let arr = Array.from(otherStr);
    let i = 0;
    let result = 0;

    for (let char of str) {
        if (arr[i] === undefined) return 1;
        let [cp, otherCp] = [char.codePointAt(), arr[i].codePointAt()];
        if (cp < otherCp) return -1;
        else if (cp > otherCp) return 1;
        i++;
    }

    if (arr[i] !== undefined) result = -1;
    return result;
}

console.log((stringCodePointCmp('😋,🌐!', '😋,🌐')));
console.log((stringCodePointCmp('😋,🌐', '😋,🌐!')));
console.log((stringCodePointCmp('😋,🌐!', '😋,🌐!')));
let arr = ['😋,🌐!', '😋,🌐'];
arr.sort(stringCodePointCmp);
console.log(arr);
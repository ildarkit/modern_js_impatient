function posSubArray(a, b) {
    let pos = undefined;
    for (let i = 0; i <= a.length - b.length; i++) {
        pos = i;
        for (let j = 0; j < b.length; j++) {
            if (a[i + j] != b[j]) {
                pos = undefined;
                break;
            }
        }
        if (pos !== undefined) break;
    }
    return pos;
}

function posSubArray2(a, b) {
    let pos = undefined;
    for (let i = 0; (i <= a.length - b.length) && pos === undefined; i++) {
        let doSearch = true;
        pos = i;
        for (let j = 0; j < b.length && doSearch; j++) {
            if (a[i + j] != b[j]) {
                pos = undefined;
                doSearch = false;
            }
        }
    }
    return pos;
}

let a = [5, 7, 3, 2, 0, 34, 1, 7, 32, 3, 76];
let b = [7, 32, 3, 76];
let foundPos = posSubArray(a,b);
console.log(`pos = ${foundPos}`);
console.log(`test results = ${posSubArray2(a, b) == foundPos}`);
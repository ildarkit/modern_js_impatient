function unicodeReprMoreASCII() {
    let str;
    let normalizedFroms = ['NFKC', 'NFKD'];
    for (let cp = 0x0; cp <= 0x10FFFF; cp++) {
        try {
            str = String.fromCodePoint(cp);
        } catch (err) {
            if (err instanceof RangeError) continue;
            else throw err;
        }
        let normalized = normalizedFroms.map(mode => [...str.normalize(mode)]);
        if (normalized.some(chars => chars.length > 1)) {
            console.log(
                `codePoint = U+${cp.toString(16).toUpperCase()}, symbol =`, str);
            normalized.forEach(
                (chars, i) => console.log(`form ${normalizedFroms[i]} =`, chars));
        }
    }
}

unicodeReprMoreASCII();
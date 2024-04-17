const cipherConstant = 547;

export function encrypt(message) {
    return Array.from(message)
        .map(str => str.codePointAt(0) + cipherConstant)
        .map(cp => String.fromCodePoint(cp))
        .join('');
}

export function decrypt(message) {
    return Array.from(message)
        .map(str => str.codePointAt(0) - cipherConstant)
        .map(cp => String.fromCodePoint(cp))
        .join('');
}
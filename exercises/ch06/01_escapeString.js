function replaceControl(match) {
    switch (match) {
        case '\t':
            return '\\t';
            break;
        case '\n':
            return '\\n';
            break;
        case '\b':
            return '\\b';
            break;
        case '\r':
            return '\\r';
            break;
        case '\f':
            return '\\f';
            break;
        case '\v':
            return '\\v';
            break;
        case '\\':
            return '\\\\';
            break;
        case '\'':
            return '\\\'';
            break;
    }
}

function replaceToCodePoint(match) {
    let cp = match.codePointAt(0);
    if (cp > 127) return '\\u{' + cp.toString(16) + '}';
    else return match;
}

function escape(str) {
    let result = str.replace(/[\n\b\t\f\r\v'\\]/g, replaceControl);
    result = result.replace(/\S/gu, replaceToCodePoint); 
    return '\'' + result + '\'';
}

console.log(escape('ascii\tне аски\v\n\f\r\nтекст\b🌍\\'));
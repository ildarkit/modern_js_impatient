function replaceControl(match) {
    switch (match) {
        case '\t':
            return '\\t';
        case '\n':
            return '\\n';
        case '\b':
            return '\\b';
        case '\r':
            return '\\r';
        case '\f':
            return '\\f';
        case '\v':
            return '\\v';
        case '\\':
            return '\\\\';
        case '\'':
            return '\\\'';
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

console.log(escape('ascii\t¿Cómo estás?\nне аски\v\n\f\r\nтекст\b🌍\\'));
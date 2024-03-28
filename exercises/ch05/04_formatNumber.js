const NUM_SYSTEM = {
    x: 16,
    o: 8,
};
const ALT_SYSTEM_FORM = {
    16: '0x',
    8: '0o',
};

function format(num, fmtStr) {
    let groups = fmtGroups(fmtStr);
    let flags = groups.flags;
    delete groups.flags;
    let cfg = config(groups, groups.format);
    let numStr;

    cfg.flags = flags;
    if (cfg.format == 's')
        numStr = fmtString(num, cfg);
    else
        numStr = fmtNumber(num, cfg);
    if (numStr.length < cfg.width)
        numStr = fillString(numStr, cfg);
    return numStr;
}

function fmtGroups(str) {
    const fmtRegExp = 
        /^%(?<flags>[0\s#\+-]*)(?<width>\d*)(\.(?<precise>\d+))?(?<format>[sdfox])$/;
    return str.match(fmtRegExp).groups;
}

function config(groups, numSys, mapNumSys = NUM_SYSTEM) {
    let cfg = Object.create(null);
    for (let key of Object.keys(groups)) {
        let parsed = parseInt(groups[key]);
        let value = Number.isNaN(parsed) ? groups[key]: parsed;
        cfg[key] = value;
    }
    return {...cfg, numberSystem: mapNumSys[numSys]};
}

function toNumberSystem(parseFunc, num, numberSystem) {
    return parseFunc(num).toString(numberSystem);
}

function fmtString(num, cfg) {
    let result = num.toString(cfg.numberSystem);
    if (cfg.precise !== undefined)
        result = result.slice(0, cfg.precise + 1);
    return result;
}

function fmtNumber(num, cfg, altSystemForm = ALT_SYSTEM_FORM) {
    let result = num.toPrecision(cfg.precise);
    let parseFunc = isInt(num) ? parseInt: parseFloat;

    result = toNumberSystem(parseFunc, result, cfg.numberSystem);
    if (cfg.format == 'f' || cfg.format == 'd') {
        if (cfg.flags.includes('+') && num > 0)
            result = '+' + result;
    } else {
        if (cfg.flags.includes('#')) {
            let originLength = result.length;
            result = altSystemForm[cfg.numberSystem] + result;
            cfg.width += result.length - originLength;
        }
    }
    return result;
}

function fillString(numStr, cfg) {
    if (cfg.precise === undefined) {
        let filler = ' ';
        if (cfg.flags.includes('0')) filler = '0';
        let filled = new Array(cfg.width - numStr.length).fill(filler);
        if (cfg.flags.includes('-'))
            numStr = numStr + filled.join('');
        else
            numStr = filled.join('') + numStr;               
    } 
    return numStr;
}

function isInt(n) {
    return n % 1 === 0;
}

console.log(format(12.1234, '%07.5f'));
console.log(format(12.1234, '%.4s'));
console.log(format(42.3456, '%04x'));
console.log(format(12, '%04o'));
console.log(format(42.3456, '%#4.3x'));
console.log(format(12, '%04d'));
console.log(format(2.02345, '%05.3f'));
console.log(format(-2.02345, '%05.3f'));
console.log(format(2.02345, '%+05.3f'));
console.log(format(2.02345, '%-05.3f'));

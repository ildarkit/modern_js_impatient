const NUM_SYSTEM = {
    x: 16,
    o: 8,
};
const ALT_SYSTEM_FORM = {
    16: '0x',
    8: '0o',
};

export function format(num, fmtStr) {
    let groups = fmtGroups(fmtStr);
    let flags = groups.flags;
    delete groups.flags;
    let cfg = config(groups, groups.format);
    let numStr;

    cfg.flags = flags;
    if (cfg.format === 's')
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

function fmtString(num, cfg) {
    let result = num.toString(cfg.numberSystem);
    if (cfg.precise !== undefined)
        result = result.slice(0, cfg.precise + 1);
    return result;
}

function fmtNumber(num, cfg, altSystemForm = ALT_SYSTEM_FORM) {
    let result;
    if (cfg.precise !== undefined && cfg.numberSystem === undefined)
        result = num.toFixed(cfg.precise);
    else result = num.toString(cfg.numberSystem);

    if ((cfg.format === 'f' || cfg.format === 'd') &&
        (cfg.flags.includes('+') && num > 0))
        result = '+' + result;
    else if (cfg.flags.includes('#')) {
        let originLength = result.length;
        result = altSystemForm[cfg.numberSystem] + result;
        cfg.width += result.length - originLength;
    }
    return result;
}

function fillString(numStr, cfg) {
    let filler = ' ';
    if (cfg.precise === undefined && !cfg.flags.includes('-')
        && cfg.flags.includes('0')) {
        filler = '0';
    }
    if (cfg.flags.includes(' ') &&
        !(numStr.charAt(0) === '-' || numStr.charAt(0) === '+')) {
        filler = ' ';
    }
    let filled = new Array(cfg.width - numStr.length).fill(filler);
    if (cfg.flags.includes('-'))
        numStr = numStr + filled.join('');
    else if (numStr.charAt(0) === '-' || numStr.charAt(0) === '+')
        numStr = numStr.charAt(0) + filled.join('') + numStr.slice(1);
    else 
        numStr = filled.join('') + numStr;          
    return numStr;
}

// console.log(format(12.1234, '% 7.5f'));
// console.log(format(12.1234, '%.4s'));
// console.log(format(42, '%04x'));
// console.log(format(12, '%04o'));
// console.log(format(42.3456, '%#4.3x'));
// console.log(format(12, '%04d'));
// console.log(format(2.02, '%05f'));
// console.log(format(-2.3, '%05f'));
// console.log(format(2.07, '%+07.1f'));
// console.log(format(2.02, '%-05f'));
// console.log(format(2.02, '%- 7f'));

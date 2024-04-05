import {format} from '../ch05/04_formatNumber.mjs';

function printf(fragments, ...values) {
    let formatRegExp = /^%.+?[sfdxo]/;
    let formatStrings = fragments
        .flatMap(fmt => formatRegExp.exec(fmt))
        .filter(fmt => fmt !== null);
    let result = [fragments[0]];
    for (let i = 0; i < formatStrings.length; i++) {
        result.push(
            fragments[i + 1]
                .replace(formatRegExp, format(values[i], formatStrings[i]))
        );
    }
    return result.join('');
}

let item = 'book';
let quantity = 10;
let price = 29.39;
const formated = printf`${item}%-40s | ${quantity}%6d | ${price}%10.2f`;
console.log(formated);
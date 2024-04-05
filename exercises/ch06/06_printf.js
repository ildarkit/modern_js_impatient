function printf(fragments, ...values) {
    return fragments;
}

let item = 'book';
let quantity = '10';
let price = 29.39;
const formated = printf`${item}%-40s | ${quantity}%6d | ${price}%10.2f`;
console.log(formated);
let str = 'i'.toLocaleUpperCase('tr');
console.log(`Code point of ${str} = ${str.codePointAt(0)},`, 'I = ', 'I'.codePointAt(0));
console.log(str.normalize('NFD')[0] === 'I');
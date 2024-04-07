function arrayFrom(collection) {
    return [...collection];
}

let arr = [, 1, 2, , , 5];
arr['a'] = 30;
arr[-1] = 10;
console.log(arr);
let arr1 = arrayFrom(arr);
console.log(arr1);
arr1[100] = 8;
console.log(arr1);
arr1.length = arr.length;
console.log(arr1);
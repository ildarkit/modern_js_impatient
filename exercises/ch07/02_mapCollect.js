function mapCollect(values, mapFunc, collector) {
    let mapResult = values.map(mapFunc).filter(e => e !== undefined); 
    return collector(...mapResult);
}

let arr = [, 1, 2, , , 5];
mapCollect(
    arr,
    (v) => v * v,
    (...elements) => elements.forEach(e => console.log(e)),
);
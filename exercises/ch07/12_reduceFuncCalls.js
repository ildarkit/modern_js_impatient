function reduceFunc(functions, x) {
    return functions
        .reduceRight((accum, func) => func(accum), x); 
}

console.log(reduceFunc([x => x / 2, x => x * 100], 1.35));
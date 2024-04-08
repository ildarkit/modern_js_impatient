function byteOrder(littleEndian = true) {
    let buf = new ArrayBuffer(8);
    let view = new DataView(buf);
    view.setFloat64(0, Math.PI, littleEndian);
    let pi = new Float64Array(buf)[0];
    console.log(`buf pi = ${pi}`);
    return (Math.PI - pi) < Number.EPSILON;
}

console.log(`Math.PI = ${Math.PI}`);
console.log(`Byte order is ${byteOrder() ? 'little-endian': 'big-endian'}`);
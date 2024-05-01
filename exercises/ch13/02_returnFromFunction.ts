function returnVoid(params: string): void {
    console.log(params);
    return undefined;
}

function returnUndefined(params: string): undefined {
    console.log(params);
    return;
}

returnVoid('test string');
returnUndefined('also test string');
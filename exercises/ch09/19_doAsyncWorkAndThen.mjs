async function asyncWork() {
    return 'work result';
}

function unsafeProcess(data) {
    throw Error('Unsafe process error');
}

const doAsyncWorkAndThen = handler => {
    const promise = asyncWork();
    promise
        .then(result => handler(result))
        .catch(err => console.error(err.message));
    return promise;
};

await doAsyncWorkAndThen(unsafeProcess);
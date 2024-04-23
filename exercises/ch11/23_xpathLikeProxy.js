const getHandler = {
    get(target, key, receiver) {
        const obj = Reflect.get(target, key, receiver);
        return typeof obj === 'object' ? new Proxy(obj, getHandler): obj;
    },
};

function makeRootProxy(document) {
    return new Proxy(document, getHandler);
}

const root = makeRootProxy({
    html: {
        body: {
            ul: [
                {li: ['item1', 'item2']},
                {li: ['item3', 'item4']},
                {li: ['item5', 'item6']}
            ]
        }
    }
});
console.log(root.html.body.ul[2].li[1]);
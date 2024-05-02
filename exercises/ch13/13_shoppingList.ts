type ShoppingList = {
    created: Date,
    [arg: number]: string,
};

const list: ShoppingList = {
    created: new Date()
};
list[0] = 'eggs';
const more = ['ham', 'hash browns'];

for (let i in more)
    list[Number(i) + 1] = more[i];

for (let i in more)
    list[i] = more[i];
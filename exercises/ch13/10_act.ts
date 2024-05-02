const act = (x: { bark(): void } | { meow(): void }) => {
    'bark' in x ? x.bark() : x.meow(); 
};

const dog = { bark() { console.log('goaw-goaw') } };
act(dog);
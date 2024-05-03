class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed?: string;
    constructor(name: string, breed?: string) {
        super(name);
        this.breed = breed;
    }
}

// замена типа массива его подтипом
const dogs: Dog[] = [new Dog('Doggy', 'poddle'), new Dog('Puppy', 'dachshund')]; 
const animals: Animal[] = dogs;

// замена типа свойства обьекта на его подтип
const dogObj: { animal: Dog } = { animal: new Dog('Puppy', 'puddle') };
const animalObj: { animal: Animal } = { animal: new Dog('Doggy', 'poddle') };

// замена типа обьекта на его подтип с дополнительным свойством
type AnimalTypeObject = { animal: Animal };
let animal: AnimalTypeObject = { animal: new Animal('Beast') };
const animalWithOwner = { owner: 'Bob', animal: animal.animal };
animal = animalWithOwner;

// замена типа параметра функции на супертип 
type AnimalTypeFunc = (arg: Animal) => void;
type DogTypeFunc = (arg: Dog) => void;
const animalFunc: AnimalTypeFunc = (a: Animal) => { console.log(`animal ${a.name}`); };
const dogFunc: DogTypeFunc = animalFunc;

// замена типа возращаемого значения на подтип
// приводит к замене типа функции на ее подтип
type AnimalProducer = (arg: string) => Animal;
type DogProducer = (arg: string) => Dog;
const dogFunction: DogProducer = (name: string) => { return new Dog(name)};
const animalFunction: AnimalProducer = dogFunction;

// подтип функции с меньшим числом аргументов
type DogNameProducer = (arg: string) => Dog;
type DogBreedProducer = (arg: string, arg1: string) => Dog;
let dogNameFunc: DogNameProducer = (name: string) => { return new Dog(name) };
let dogBreedFunc: DogBreedProducer = dogNameFunc;

// подтип функции с необязательным аргументом
type DogOptionalBreedProducer = (arg: string, arg1?: string) => Dog;
const dogOptBreedFunction: DogOptionalBreedProducer = (
    name: string,
    breed?: string
) => { return new Dog(name, breed) };
dogBreedFunc = dogOptBreedFunction;

// подтип функции с прочими аргументами
type DogOtherBreedProducer = (arg: string, ...rest: string[]) => Dog;
const dogOtherBreedFunc: DogOtherBreedProducer = (
    name: string,
    ...args: string[]
) => { return new Dog(name, ...args) };
dogNameFunc = dogOtherBreedFunc;



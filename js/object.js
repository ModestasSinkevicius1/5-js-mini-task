// class Person{
//     name = 'Petras';
//     age = 50;
//     gender = 'male';

//     Person(newName, newAge, newGender){
//         name = newName;
//     }
// }

// const p = new Person();
// console.log(p.name);
// console.log(p.age);
// console.log(p.gender);

const person = {
    name: 'Bob',
    age: 43,
    isMarried: true,
}

console.log(person);

let name = person['name'];
console.log(name);

const persons = [
    {
        name: 'Bob',
        age: 43,
        isMarried: true
    },
    {
        name: 'Gabriel',
        age: 33,
        isMarried: false
    }
];

name = persons[1]['name'];
console.log(name);

const human = {
    eyeColor: 'red',
    profesion: 'programmer',
    height: 2,
}
console.log(human);

console.log(human.eyeColor);

const nonKeyWord = 'height';
console.log(human[nonKeyWord]);

human.clothes = 'new clothing';
console.log(human.clothes);

console.log('Zomgaus objekta sudarantys raktazodziai:');
const zmogusKeys = Object.keys(human);
console.log(zmogusKeys);

console.log(Object.keys({}));
console.log(Object.keys({a: 1}));
console.log(Object.keys({a: 1, b: 2}));

const tails = [
    'none',
    'short',
    'long',
    'curved'
]
const animal = {
    specie: 'cat',
    blood: 'warm',
    eyes: 'green',
    tail: tails[0],
}

console.log(animal);

const animalKey = Object.keys(animal);

for(const key of animalKey){
    console.log(`${key}: ${animal[key]}`);
}

// Only used for objects
for(const key in animal){
    console.log(`${key}: ${animal[key]}`);
}

const person2 = {
    name: 'Bob',
    age: 43,
    isMarried: true,
    password: 'no',
}

// Remove sensitive info
delete person2.password;
console.log(person2);

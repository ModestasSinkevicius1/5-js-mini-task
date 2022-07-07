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
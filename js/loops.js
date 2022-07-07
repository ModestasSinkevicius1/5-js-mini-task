//For
console.log('For');
const numbers = [1, 2, 3, 4, 5];
for(let i=0;i<numbers.length;i++){
    console.log(`${i}) ${numbers[i]}`);
}
console.log('\r\n');

console.log('For-of');
//For-of
let i = 0;
for(const number of numbers){
    console.log(`${i++}) ${number}`);
}
console.log('\r\n');

console.log('While');
//While
i = 0;
while(i < numbers.length){
    const number = numbers[i];
    console.log(`${i++}) ${number}`);
}
console.log('\r\n');

console.log('Do-While');
//Do-while
i = 0;
do{
    const number = numbers[i];
    console.log(`${i++}) ${number}`);
}
while(i < numbers.length);
console.log('\r\n');

console.log('For-each');
//For-each
numbers.forEach(function(number, i, arr){
    console.log(`${i}) ${number}`, arr);
})

numbers.forEach((number, i)=>{
    console.log(`${i}) ${number}`);
})
console.log('\r\n');

//Map

console.log('Map - from old array modifies data to give new array');
const doubleNumbers = numbers.map(function(number){
    return number * 2;
});
console.log(doubleNumbers);
console.log(numbers);

const names = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys'];

const firstTitleLetters = names.map(function(name){
    return name[0];
})
console.log(names);
console.log(firstTitleLetters);
console.log('\r\n');
//Filter

console.log('Filter');
const oddNumbers = numbers.filter(function(number){
    return number % 2 !== 0;
});

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(oddNumbers);
console.log(evenNumbers);
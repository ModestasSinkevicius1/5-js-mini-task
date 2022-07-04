// Kintamuju palyginimas
// 'Pomidoras' - tenkina salyga, 'Bandykite kita karta' - netenkina
// Uzduotis 1

const a = 0;
const b = 1;

if(a < b)
    console.log('Pomidoras');
else if(a > b)
    console.log('Bandykite kita karta');

if(a === b)
    console.log('Pomidoras');
else if(a !== b)
    console.log('Bandykite kita karta');

if(a <= b)
    console.log('Pomidoras');
else if(a >= b)
    console.log('Bandykite kita karta');

//Uzduotis 2

const textLength1 = 'Arbuzas'.length;
const textLength2 = 'Braske'.length;

console.log(textLength1);
console.log(textLength2);

// Uzduotis 3

if(textLength1 < textLength2)
    console.log('Pomidoras');
else if(textLength1 > textLength2)
    console.log('Bandykite kita karta');

if(textLength1 === textLength2)
    console.log('Pomidoras');
else if(textLength1 !== textLength2)
    console.log('Bandykite kita karta');

if(textLength1 <= textLength2)
    console.log('Pomidoras');
else if(textLength1 >= textLength2)
    console.log('Bandykite kita karta');

// Uzduotis 4

const arrayLength1 = [1, 3, 5, 7].length;
const arrayLength2 = ['Vilnius', 'Kaunas', 'Klaipeda', 'Panevezys', 'Siauliai'].length;

console.log(arrayLength1);
console.log(arrayLength2);

// Uzduotis 5

if(arrayLength1 < arrayLength2)
    console.log('Pomidoras');
else if(arrayLength1 > arrayLength2)
    console.log('Bandykite kita karta');

if(arrayLength1 === arrayLength2)
    console.log('Pomidoras');
else if(arrayLength1 !== arrayLength2)
    console.log('Bandykite kita karta');

if(arrayLength1 <= arrayLength2)
    console.log('Pomidoras');
else if(arrayLength1 >= arrayLength2)
    console.log('Bandykite kita karta');

switch ('Pomidoras') {
    case 'Pomidoras':
        console.log('Taip')
        break;

    default:
        console.log('Ne');
        break;
}
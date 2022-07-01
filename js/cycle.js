// Ciklo panaudojimas
// Uzduotis 1
let suma = 0;

for(let i = -70;i<30;i++)
{
    suma += i;
}
console.log(suma);

// Uzduotis 2

let abc = 'abcdef';
let newAbc = '';

for(let i = abc.length-1;i >= 0;i--)
{
    newAbc += abc[i];
}
console.log(newAbc);

// Uzduotis 3

let count = 0;

const m1 = [3, 5, 7];

for(let j = 0;j<3;j++)
{
    for(let i = 0;i <= 11; i++){
        if((i % m1[j])===0)
        {
            count++;
        }
    }
    console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ' + m1[j] +' yra ' + count + ' vienetai.');
}
console.log('---------------------------------------------------------------');

count = 0;

for(let j = 0;j<3;j++)
{
    for(let i = 8;i <= 31; i++){
        if((i % m1[j])===0)
        {
            count++;
        }
    }
    console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš ' + m1[j] +' yra ' + count + ' vienetai.');
}
console.log('---------------------------------------------------------------');

count = 0;

for(let j = 0;j<3;j++)
{
    for(let i = -18;i <= 18; i++){
        if((i % m1[j])===0)
        {
            count++;
        }
    }
    console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš ' + m1[j] +' yra ' + count + ' vienetai.');
}
console.log('---------------------------------------------------------------');

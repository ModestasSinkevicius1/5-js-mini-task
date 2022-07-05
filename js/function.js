// Funkcijos

// Uzduotis 1

console.log('============================= Uzduotis 1 =============================\r\n')

function tusciaFunction(){
    return false;
}

console.log(tusciaFunction());
console.log(tusciaFunction(0));
console.log(tusciaFunction(Infinity));
console.log(tusciaFunction(NaN));
console.log('\r\n');

// Uzduotis 2

console.log('============================= Uzduotis 2 =============================\r\n')

function daugyba(a, b){
    if(typeof a!== "number" || typeof b !== "number")
        return 'Duota reiksme nebuvo skaicius';
    if(!isFinite(a) || !isFinite(b))
        return 'Turi buti normalus skaicius';
    const sandauga = a * b;
    return `Sandauga ${sandauga}`;
}

console.log(daugyba(0, 11));
console.log(daugyba(8, 31));
console.log(daugyba(-18,18));
console.log(daugyba());
console.log(daugyba('test', 8));
console.log(daugyba(1, NaN));
console.log(daugyba(NaN, NaN));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(-Infinity, -Infinity));
console.log('\r\n');

// Uzduotis 3

console.log('============================= Uzduotis 3 =============================\r\n')

function skaitmenuKiekisSkaiciuje(a){
    if(typeof a !== "number" || !isFinite(a))
        return 'Pateikta netinkamo tipo reikšmė.'
    const textNumber = '' + a;
    let numberLength = textNumber.length;
    if(textNumber.includes('-'))
    {
        numberLength--;
    }

    if(textNumber.includes('.'))
    {
        numberLength--;
    }
    /*
    if(a < 0)
        numberLength--;

    if(a % 1 !== 0)
        numberLength--;
    */
    return numberLength;
}

console.log(skaitmenuKiekisSkaiciuje(1));
console.log(skaitmenuKiekisSkaiciuje(1945));
console.log(skaitmenuKiekisSkaiciuje(-1));
console.log(skaitmenuKiekisSkaiciuje(3.2));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje(-Infinity));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje('8'));
console.log(skaitmenuKiekisSkaiciuje('abc'));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje(null));
console.log('\r\n');

// Uzduotis 4

console.log('============================= Uzduotis 4 =============================\r\n')

function didziausiasSkaiciusSarase(a){
    /*if(typeof a !== 'object' || a === null)
        return 'Pateikta netinkamo tipo reikšmė.';
    */
    if(!Array.isArray(a))
        return 'Pateikta netinkamo tipo reikšmė.';

    if(a.length <= 0)
        return 'Pateiktas sąrašas negali būti tuščias.'
    
    let temp = -Infinity;

    for(let i=0;i<a.length;i++)
    {
        if( typeof a[i] === 'number'
            && isFinite(a[i])
            && temp<a[i])
        {
            temp = a[i];
        }
    }

    if(temp === -Infinity)
        return 'Masyve nerasta normalaus skaiciaus';

    return temp;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase({}));
console.log(didziausiasSkaiciusSarase(null));
console.log(didziausiasSkaiciusSarase([NaN, 1]));
console.log(didziausiasSkaiciusSarase([NaN, NaN]));
console.log(didziausiasSkaiciusSarase([NaN, -Infinity]));
console.log(didziausiasSkaiciusSarase([[2], 1]));
console.log(didziausiasSkaiciusSarase(['2', 1]));
console.log('\r\n');

// Uzduotis 5

console.log('============================= Uzduotis 5 =============================\r\n')

function isrinktiRaides(text, step){
    if(typeof text !== 'string')
        return 'Pirmasis kintamasis turi buti tekstas.';
    if(text.length <= 0 || text.length > 100)
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    
        if(typeof step !== 'number' || step % 1 !== 0)
        return 'Antrasis kintamasis turi buti naturalus skaicius.';
        if(step === 0)
        return 'Antrasis kintamasis negali buti nulis.';
        if(step > text.length)
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';

    let newText = '';
    
    if(step < 0)
    {
        for(let i=text.length-1;i>=0;i--)
        {
            newText += text[i];
        }
    }

    if(newText !== '')
    {
        text = newText;
        step *= -1;
    }

    let junginys = '';
    for(let i=step-1;i<text.length;i+=step)
    {
        junginys += text[i];
    }

    return junginys;
}

console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefghijkl', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log( isrinktiRaides(1561, 2));
console.log(isrinktiRaides('abcdefg', NaN));
console.log(isrinktiRaides('abcdefg', []));
console.log(isrinktiRaides([], 1));
console.log(isrinktiRaides('abcdefg', -1));
console.log(isrinktiRaides('abcdefg', -2));
console.log('\r\n');
// Uzduotis 6

console.log('============================= Uzduotis 6 =============================\r\n')

function dalyba(a, b){
    if(typeof a !== 'number' 
    || typeof b !== 'number' 
    || !isFinite(a) 
    || !isFinite(b))
        return 'Du kintamieji turi buti normalus skaiciai';
    if(b === 0)
        return 'Dalinimas iš nulio yra negalimas.';
    const c = a / b;
    return c;
}

console.log(dalyba(1, 2));
console.log(dalyba(0, 2));
console.log(dalyba(1, 0));
console.log(dalyba('1', 2));
console.log(dalyba(1, null));
console.log(dalyba(-Infinity, 2));
console.log(dalyba(NaN, 1));
console.log(dalyba(1, [1, 2]));

// Funkcijos

// Uzduotis 1

function tusciaFunction(){
    return false;
}

console.log(tusciaFunction());
console.log(tusciaFunction(0));
console.log(tusciaFunction(Infinity));
console.log(tusciaFunction(NaN));

// Uzduotis 2

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

// Uzduotis 3

function skaitmenuKiekisSkaiciuje(a){
    if(typeof a !== "number" || !isFinite(a))
        return 'Pateikta netinkamo tipo reikšmė.'
    const textNumber = '' + a;
    const numberLength = textNumber.length;
    return numberLength;
}

console.log(skaitmenuKiekisSkaiciuje(1));
console.log(skaitmenuKiekisSkaiciuje(1945));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje(-Infinity));
console.log(skaitmenuKiekisSkaiciuje(NaN));
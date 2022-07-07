
const pirmas = 2;
const antras = 2;

// function declaration
function suma(a, b){
    return a + b;
}
console.log(suma(pirmas, antras));


// anonymose function - neturi pavadinimo
const atimtis = function (a, b){
    return a - b;
}

console.log(atimtis(pirmas, antras));

// arrow function (one line of code)
const daugyba = (a, b) => a * b;
console.log(daugyba(pirmas, antras));

// arrow function (1 param)
const kvad = (a) => a ** 2;
console.log(kvad(pirmas, antras));
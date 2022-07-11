function Biggest(...numbers){
    console.log(numbers);
}

Biggest(1);
Biggest(2, 3);
Biggest(2, 3, 6);

const studentas = (...info) =>{
    let suma = 0;

    for(let i=1;i<info.length;i++)
        suma += info[i];

    const vidurkis = suma / (info.length - 1);

    return `${info[0]}: ${vidurkis}.`;
}

console.log(studentas('Petras', 2, 4, 6, 8, 10));
console.log(studentas('Maryte', 1, 3, 5, 7, 9, 10, 10));
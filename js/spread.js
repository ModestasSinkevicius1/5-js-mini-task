const m1 = [1, 2, 3];

const m2 = [1, 3, 5, 7];

const m3 = [2, 4];

// spread prevents data be linked on other variables.
// spread also unwraps content from array. [a, b, c] + [d, e, f] = [a, b, c, d, e, f]
const m2_copy=[...m2];

const obj1 = {
    a: 1,
    b: 2,
}

const obj1_copy = {...obj1};
console.log(obj1);
console.log(obj1_copy);

obj1.b = 3;
console.log(obj1);
console.log(obj1_copy);
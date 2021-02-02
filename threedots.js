const age = [ 8, 9, 7, 5, 99];
const age2 = [ 78, 90, 5, 44];
const allAges = [...age , ...age2];
console.log(allAges);


const maxValue = [90,777,987, 786];
const maxmum = Math.max(...maxValue);
console.log(maxmum);
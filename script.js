
const nimi = "Aino";
let pisteet = 0;

pisteet = pisteet + 10;
pisteet += 5;

console.log(nimi, pisteet); // Aino 15

console.log(typeof "Hei");  // string
console.log(typeof 42);     // number
console.log(typeof true);   // boolean

const tuote = "kahvi";
const hinta = 3.5;
const maara = 2;

console.log(`${maara} x ${tuote} maksaa ${hinta * maara} €`);

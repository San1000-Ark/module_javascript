const name="Santiago"; //const variable que no sera modificada
let age=19;
let heigt=1.70;
let city="Medellin";
let pet=true;

age=20; //cambio de valor de la edad
heigt=1.72; //cambio de valor de la altura
city="Cali"; //cambio de valor de la ciudad
pet=false; //cambio de valor de si tengo o no mascota

console.log(typeof(name)); //arroja como tipo string aunque no haya la forma por el const de modificarlo
console.log(typeof(age));
console.log(typeof(heigt));
console.log(typeof(city));
console.log(typeof(pet));
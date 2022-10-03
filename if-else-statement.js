const age = 14;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can Start Driving");
}

//-----OR-----

if (age >= 18) {
  console.log("Ritesh can start driving ");
} else {
  const yearLeft = 18 - age;
  console.log(`Ritesh is too young. Wait another ${yearLeft} yers:`);
}

// const birthYear = 1999;
// if (birthYear <= 2000) {
//   let century = 20;
// } else {
//  let century = 21;
// }
// console.log(century); //ReferenceError: century is not defined so to overcome from this we should define th variable outside of the blocks

// const birthYear = 1999;
// let century;
// if (birthYear <= 2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }
// console.log(century); //undefined. becoz it is not reassigning the value

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); //20

//JS can have only 5 falsy values
// 0 , '' , undefined , null , NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Manish")); //true
console.log(Boolean({})); //An empty object  //true
console.log(Boolean("")); //false

const money = 0; //Here money is a number that is 0 and 0 is a falsy values
if (money) {
  //In this condx this number zero willl be converted to false
  console.log("Dont spend it all");
} else {
  console.log("You should ask a money from parents");
}

const moneys = 100; //Here money is a number that is 100 and 100 is a truthy values
if (moneys) {
  //In this condx this number 100 willl be converted to true
  console.log("Dont spend it all");
} else {
  console.log("You should ask a money from parents");
}

//some weired use case
let height; //Here height is undefined and undefined is a falsy value
if (height) {
  //Here if blocks is not executed because height is undefined not an true so it doesnt execute this if blocks
  console.log("YAY!! Height is defined");
} else {
  //It executes else blocks
  console.log("Height is Undefined!!!");
}

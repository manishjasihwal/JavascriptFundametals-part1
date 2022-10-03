const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink milk");

//Every operator return a value.So here ternary operator also return a value lets see a example
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

//whatever we do with ternary operator we can achieve with if else block but the most convinent way is ternary operator
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

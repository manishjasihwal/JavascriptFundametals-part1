const age = 18;
if (age === 18) {
  //=== is strict equality operator
  //strict operator dont used to do type coercion internally but loose operator used to do.
  console.log("You are an Adult guy");
} else {
  console.log("You are a kid");
}

if (age == 18) {
  //== is a loose equality operator and loose operator doesnot convert type coercion internally
  console.log("You are a guy from loose operator");
} else {
  console.log("You are a kid from loose operator");
}

const age1 = "18";
if (age1 === 18) {
  //Here === operator do not convert to type coerison that is string is not converted to number.so else block is executed
  console.log("You are an Adult guy");
} else {
  console.log("You are a kid");
}

if (age1 == 18) {
  //Here == operator used to do type coerison that is:-> string is converted to number and compare number with 18
  //== is a loose equality operator and loose operator doesnot convert type coercion internally
  console.log("You are a guy from loose operator");
} else {
  console.log("You are a kid from loose operator");
}

//Always use triple equal operator in realtime example
const favourite = prompt("whats your favourite number??");
console.log(favourite); //23 but it is string not a number
const favnum = +favourite;
console.log(typeof favnum); //number
console.log(typeof favourite); //string
if (favourite == 23) {
  //'23'==23
  //Here type coersion happens due to double(==) operator
  console.log(`It is an amazing number from if blocks`);
} else {
  console.log("It is an amazing in else blocks");
}

if (favourite === 23) {
  //'23'===23
  //Here type coersion do not happens due to triple(===) operator
  console.log(`It is an amazing number from if blocks in strict operator`);
} else {
  console.log("It is an amazing in else blocks in strict operator");
}
console.log("==================================================");

//Now lets convert string to number whatever user give an input
const favourite1 = Number(prompt("whats your favourite number??"));
console.log(favourite1); //23 bnow it is a number

console.log(typeof favourite1); //number
if (favourite1 == 23) {
  //'23'==23
  //Here type coersion happens due to double(==) operator
  console.log(`It is an amazing number from if blocks`);
} else {
  console.log("It is an amazing in else blocks");
}

if (favourite1 === 23) {
  //'23'===23
  //Here type coersion do not happens due to triple(===) operator
  console.log(`It is an amazing number from if blocks in strict operator`);
} else {
  console.log("It is an amazing in else blocks in strict operator");
}

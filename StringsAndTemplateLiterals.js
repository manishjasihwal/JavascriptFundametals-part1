const friend1 = "Ritesh";
const friend2 = "Amit";
const friend3 = "Sudhir";
//Instead of defining diffent variable we go for Array concepts
const friends = ["Ritesh", "Amit", "Sudhir"];
console.log(friends); //['Ritesh' , 'Amit' , 'Sudhir']

const years = new Array(1991, 1984, 2007, 2006);
console.log(years);

console.log(friends[0]); //Ritesh
console.log(friends[2]); //Sudhir
console.log(friends[3]); //undefined
console.log(friends.length); //3
console.log(friends[friends.length - 1]); //Sudhir

friends[2] = "Jay";
console.log(friends); //['Ritesh' , 'Amit' , 'Jay']

//friends = ["Bob", "Michael"];
//console.log(friends); //Uncaught TypeError: Assignment to constant variable.

const firstname = "Manish";
const info_about_manish = [firstname, "jaishwal", 2022 - 1999, "SDE", friends]; //Array of Array
console.log(info_about_manish);
console.log(info_about_manish.length);

//Exercise :-> Calculate the age and store in the seperate Array

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const year = [1999, 1998, 1997, 1996];
// console.log(calcAge(year)); //NAN

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
const age4 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2]),
  calcAge(year[year.length - 1]),
];
console.log(ages);

//----OR------
const agess = [age1, age2, age3, age4];
console.log(agess);

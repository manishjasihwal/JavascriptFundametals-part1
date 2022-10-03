//Type conversion is what we convert manually from one type to another type.
//Type Coercion is when Javascript automatically converts types behind the scenes for us.

/*
const inputYear = "1999"; //This is the data string coming from input field from the frontend
console.log(inputYear + 10); //199910

*/

//Type conversion

const inputYear = "1999"; //This is the data string coming from input field from the frontend
console.log(Number(inputYear)); //1999 :-> Here Using Number Function we converted String into Number
console.log(Number(inputYear) + 10); //2009

//Now what if convert string to number ?Lets see example
console.log(Number("manish")); //NAN :-> This wil throw an NAN, whenever an operation that involves numbers fails to produce a number
console.log(typeof NaN); //number

console.log(String(23), 23); //23 23
console.log(typeof String(23), typeof 23); //string , number

//In Javascript we can convert only 3 types that is
//1)To String type
//2)To Number type
//3)To Boolean type

//We cannot convert to undefined or to NAN

//type coercion
//type coercion happens whenever an operator is dealing with two values that have different types.So in thatcase , JS will then , behind the scenes , convert one of the value to match the other value to match the other value

console.log("I am " + 24 + " years old"); //Here + operator will convert number to string
//Behind the scenes it looks like in below code
console.log("I am " + String(24) + " years old");

//Actually Not all the operator do type coercion to string lets see some example
console.log("23" - "10" - 3); //10 , Here in minus operator strings are converted to numbers and not the other way arround
console.log("23" + "10" + 3); //23103 , Here it is concated
console.log("23" * "2"); //46
console.log("23" / "2"); //11.5

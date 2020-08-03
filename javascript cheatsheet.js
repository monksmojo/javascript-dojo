/*
javascript cheat sheet by udit makkar
started on 30/5/2019 thursday 2:37am
cheatsheet source-
1.javascript course by freecodecamp.com
*/

/*
i am using atom text editor as my text editor to write code because its comment color are good.
and i am using "atom-runner" plugin to run the script.
command to run script in window/linux is "alt+r"
*/

//ps- if you don't have a text editor like atom or vscode you can use online tool called as scrimba.
//www.scrimba.com it can also run your your javascript in the browser itself.

// this is how you put single line comment in your javascript

/*
this is how you put a block comment in javascript
*/

// comments are ignored by the javascript compiler.
//comments used to describe your code to other hence you should always comment your code.

/***************************************
 DATA TYPES AND VARIABLES IN JAVASCRIPT
****************************************/

/************************
VARIABLES are use to store values
DATA TYPES can tell what kind of data(values) & size of data a variable can store.
javascript provide 7 different type of VARIABLES
1. undefined- variables which can store any data-type.
2. string-sequence of character is called as string for ex-"hello how are you".
3. number-sequence of digits is called as number for ex-"23451"
4. null-variable that holds a void values
5. boolean-A Boolean is true or false represented by '0' or '1'.
false-represented by '0' & true represented by '1 or any other digits'.
6. Symbol-they are immutable primitive values.
7. objects- they act as key and value pair
******************************/

/******************************
Declaring and Initialization of variables
1. declare a variable
3 ways to declare a variables
1. using "var" keyword
2. using "let" keyword
3. using "const" keyword

var keyword- it declares global variable which can be use anywhere inside a program
variables declared with var keyword can change there value later in program.

const keyword- it declares global variable which can be use anywhere inside a program
variables declared with "const" keyword cannot change there value later in program.

let keyword- its a local variable it can only be used inside a scope in which it is defined.

*******************************/

var myName = "udit"; //Declaring & initalizing  a variable
let myLet = "makkar";
const myConst = 3.14;

var v1; //Declaring
console.log(v1);
/*by default when a variable is declared its undefined*/
v1 = 768 //initalizing
/*we have to initialize a variable with some value */
console.log(v1);

/*
variables are case sensitive
we mainly use camelCasing while Declaring variables
*/

/*********
Arithmetic operation on variables
**************/

var v2 = 10;
var v3 = 9.18;
var v4 = "high power";

console.log(v2 + v1); //addition;
console.log(v1 - v2); //difference;
console.log(v2 * v3); //multiplication
console.log(v1 / v2); //gives questionet (division)
console.log(v1 % v2); //gives remainder (modulus)
console.log(++v2); // post increment
console.log(--v1); // pre increment

/********
assignment with argument addition and subtraction
********/
//v2+=10; returns a value hence we directly need it to display in log
console.log("value of v2 = " + v2);
console.log(v2 += 10); // v2=v2+10
console.log(v2 -= 10); // v2=v2-10
console.log(v2 *= 10); // v2=v2*10
console.log(v2 / +10); // v2=v2/10;
console.log(v2 %= 10); // v2=v2%10;
console.log('Alan"are you ok"now');

//if you want to put "" inside your msg in output use above method
/*************
Escape Sequences
\' single quote
\" double quote
\\ backlash
\n new line
\r carriage return
\t tab
\b back escape
\f form feed
**************/
console.log("hello \n welcome to your jungle");

/********
Concatenation of the strings
********/
// v4="high power"
var v5 = "throne of thunder"
var v6 = v4 + " " + v5 + " make blunders";
console.log(v6);

/**********
string functions
************/

/*
1. length
length functions is use to return the length of the string
in above example v6 call length
so it return the length of the string store in v6
*/
var v7 = v6.length;
console.log(v7); //42
/*
2.[i]//i=index no.
to find character at a specific position in a string
*/
// we will use string v6
console.log(v6[0]); //gives the first character of the string
console.log(v6[v6.length - 1]); //gives the last character of the string

/**********
string immutability
once a variable is initialized with the string it cannot
be immutable(edited)
for ex
var dope="selling dope";
dope[0]='a';//give compile time error
********/
//but we can reinitialize the variable
v6 = "hello i am changed"
console.log(v6);

/***
passing string to a function
***/
//function definition
function stringConcat(str1, str2, str3) //function accept 3 parameters
{
  var result = str1 + str2 + str3; //function concatenate the 3 strings
  return result; // return the concatenated string
}
var r = stringConcat("hello", "  ", "Amigos!");
//function call,passing argument & storing return value in a variable
console.log(r);

/****
ARRAYS
in javascript
array allow is a collection of same or different
data type in a single place
****/
var myArray = ["john", 10, 0.12, 'a', true];
//accessing elements of the ARRAY
//indexing of array start from 0
console.log(myArray[0]); // john
console.log(myArray[1]); // 10
console.log(myArray[2]); // 0.12
console.log(myArray[3]); // a
console.log(myArray[4]); // true
//what will happen when you try to access elements of array which are not defined
console.log(myArray[5]); //we get undefined

/********
Nested Array
when you declare an array inside an array.
*********/
var ourArray = [
  ["tom", "riddle"], 10, ["alex", "turner"], 11
];
/*******
Array are mutable in nature
*******/
console.log(ourArray);
ourArray[4] = ["elton", "john"]
ourArray[5] = 12;
console.log(ourArray);
/******
accessing an element of a nested array
******/
//to access the riddle in ourArray
console.log(ourArray[0][1]);
//to access the john in ourArray
console.log(ourArray[4][1]);
/******
ourArray[0][1]
0 gives parent element index
1 gives child element index
*****/


/*********
array function
1. push()
insert element at the end of the array.
2. pop()
pop removes last element from the array and return that element
3. shift()
shift removes the first element from the array and return that element
4. unshift()
insert element at the front of the array.
********/
var myData = [10, 20, 30];
myData.push("last");
console.log(myData);

var lastElement = myData.pop();
console.log(lastElement);

myData.unshift("first");
console.log(myData);

var firstElement = myData.shift();
console.log(firstElement);

/***local & global Variable***/
/********
1. local variables-are visible and can be used inside the scope,
in which they are defined.
in javascript we use 'let' keyword to declare local variables
2. global variables- are variables that can be used anywhere inside the program
in javascript we use 'var' keyword to declare global variable

*******/
{ //parent scope

  { //child scope-1
    let letA = 10;
    /*** can be accessed inside the scope and its child
        child scope***/
    var varA = 11; //can be accessed anywhere in the program
    console.log(varA); // 11 output
    console.log(letA); //10 output
    { // child scope-2
      console.log(letA); //10 output
    } //end of child scope-1
  }
  console.log(varA); //11 output
  //console.log(letA);
  //(error-letAis not defined
  /*
    cause letA is defined in 'child scope-1'
    & cannot be accessed outside(inside parent scope) 'child scope-1'
  */
}


//FUNCTIONS//

/*****
functions refer to reusable code. we can Pass value to function argument
return a value from a functions using 'return' keyword
*****/
//v1=768 v2=10;
var funcGlobal = 123;

function passFunction(a, b) {
  console.log("inside the function");
  var funcvar = 123 /*variable declared inside function with var keyword*/
  funcGlobal = 121 // value of global variable changed
  console.log(funcGlobal);
  /*variable declared outside function with var keyword
    it can be accessed because it is global to the function
  */
  var r = (a - b); //accessing the passed value
  return r //returning the difference from the function
}
var result = passFunction(v1, v2);
console.log("outside the function");
console.log(result);

console.log(funcGlobal);
// 121 changes made to global variable inside the function are persistent

//console.log(funcvar);
/*
the above command will give error;
cause a variable declared inside a function
can only be used inside the function only
*/

//typeof() operator tells the data type of the variable
console.log(typeof (funcGlobal));
console.log(typeof (funcvar));

/********
Queue
queue is the data structure in which
insertion take place at the end of the list &
deletion take place at front of the list.
we can use array and its function to show the functioning
of queue
********/
var queue = ["first", "second", "third", "fourth"]
var element = "last";

function funcQueue(a, b) {
  //a is Queue
  //b is element you want to insert
  a.push(b);
  a.shift();
}
console.log("queue initially:->" + JSON.stringify(queue));
funcQueue(queue, element);
console.log("function called");
console.log("queue finally:->" + JSON.stringify(queue));
/*****IMPORTANT*****/
//JSON.stringify()//Convert a JavaScript object into a string with JSON.stringify().

/****
welcome to the Boolean
0 represent the false value
any positive no. > 0 represent true value
****/
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return ("yes it was True");
  } else {
    return ("no it was false");
  }
}
console.log(trueOrFalse(true));

/******
Equality Vs Non-Equality Vs Assigment operator
1. Equality operator(==) checks wether left hand side
is equal to the right hand side & returs true or false.
equality operator does type conversion.
it only checks the value variable holds

2. Non-Equality operator does the type conversion and checks for Equality
non equality operator also does type conversion.
it only checks the value variable holds

3. Assigment operator(=) assigns the vale of right hand side
to the left hand side.
it copies the value as well as type of value.
******/
function testOperator(a, b) {
  console.log("Equality operator & assigment operator function\n");
  console.log("type of the arguments passed are " + typeof (a) + " " + typeof (b));
  if (a == b) {
    console.log("values are equal\n");
  } else {
    console.log("values are not equal\n");
  }
  a = b //vale of b is assigned to a
  console.log("type values after assigment operator are " + typeof (a) + " " + typeof (b) + "\n");
}
testOperator(10, "10");

function testNonequality(a, b) {
  console.log("non Equality operator function");
  console.log("type of the arguments passed are " + typeof (a) + " " + typeof (b));
  if (a != b) {
    console.log("values are not equal");
  } else {
    console.log("values are equal");
  }
}
testNonequality(10, 10.0);

/*******
strictly equality and strictly non equality operator.
1. Strictly Equality operator(===) checks wether left hand side
is equal to the right hand side(both in type as well as value) &
returs true or false.
stric equality operator checks type as well as the value variable holds.

2. Strictly Non-Equality operator(!==) checks wether left hand side
is equal to the right hand side(both in type as well as value) &
returs true or false.
strictly NOn-Equality Operator checks type as well as the value variable holds.
********/
function strictlyOperators(a, b) {
  if (a === b) {
    console.log("strictly equality operator says they are equal")
    console.log("type of the arguments passed are " + typeof (a) + " " + typeof (b));
    console.log("arguments passed are " + a + " " + b);
  } else if (a !== b) {
    console.log("strictly non equality operator says they are not equal")
    console.log("type of the arguments passed are " + typeof (a) + " " + typeof (b));
    console.log("arguments passed are " + a + " " + b);
  } else {
    console.log("value can be equal but there types are not eqaul");
  }
}
strictlyOperators(10, "10");
/*******IF ELSE LADDERS******/
//we use if else ladder when we have to deal with multiple conditions.
var putName = ["hole-in-one", "Eagle", "Birdie", "go home"]
var strokes = 20;

function ifElseLadder(putName, strokes) {
  console.log("inside if else ladder function");
  if (strokes == 1) {
    console.log(putName[0]);
  } else if (strokes > 1 && strokes <= 3) {
    console.log(putName[1]);
  } else if (strokes > 3 && strokes <= 5) {
    console.log(putName[2]);
  } else {
    console.log(putName[3]);
  }
}

ifElseLadder(putName, strokes);
/********SWITCH STATEMENTS*********/
/**switch cases are used when we want to select only one STATEMENTS
we can use integer,character,string
***/
function switchStatement1(val) {
  switch (val) {
    case 1:
      console.log("one");
      break;
    case 2:
      console.log("two");
      break;
    case 3:
      console.log("three");
      break;
    default:
      console.log("rank is greater than 3");
  } //end of switch statement
}
switchStatement1(1);
switchStatement1(5);

function switchStatement2(fruit) {
  switch (fruit) {
    case "apple":
      console.log("apple is great");
      break;
    case "banana":
      console.log("banana is healthy");
      break;
    case "mango":
      console.log("mangos are sweet");
      break;
    default:
      console.log("the fruit is not in the list");
  } //end of switch statement
}
switchStatement2("banana");
switchStatement2("kiwi");
/***********
TO execute multiple switch statement at once
***********/
function range(val) {
  switch (val) {
    case 1:
    case 2:
    case 3:
      console.log("low range");
      break;
    case 4:
    case 5:
    case 6:
      console.log("medium range");
      break;
    case 7:
    case 8:
    case 9:
      console.log("high range");
    default:
      console.log("out of range evacuate");
  }
}
range(2);
range(6);
range(20);

/*******
LOOPS IN JAVASCRIPT
Loops are handy, if you want to run the same code over and over again,
each time with a different value.
1. for loop
for - loops through a block of code a number of times

2. while loop
while - loops through a block of code while a specified condition is true
while loops are called entery controlled loops
condition is checked during the strating of the loops
3. do while loop
do/while - also loops through a block of code while a specified condition is true
do-while loops are called exit controlled loops
condition is checked at the end of the loops
loop always execut one time.

we are gonnam traverse an array
using all the above mentioed loops
********/
var loopArray = [1, 2, "three", 4.0];
//for loop
console.log("executing for loop");
for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i]);
}
//while loop
var wi = 0;
console.log("executing while loop");
while (wi < loopArray.length) {
  console.log(loopArray[wi]);
  ++wi;
}
var dwi = 0;
//do while loops
console.log("executing do while loop");
do {
  console.log(loopArray[dwi]);
  ++dwi;
} while (dwi < loopArray.length);


//there is one special loops
//the for in loop which we will discuss later
//the next section is java script object oriented programming

//printing of odd no. and even no. in arrays
console.log("printing odd no.");
var loopArray2 = [];
var i = 1;
var counter = 0;
var result = 0;
while (i <= 10) {
  loopArray2.push(i);
  i += 2;
}
console.log(loopArray2);
i = 0;
console.log("printing even no.");
while (i <= 10) {
  loopArray2[counter] = i;
  i += 2;
  ++counter;
}
console.log(loopArray2);
//accessing each element of arrays
for (i = 0; i < loopArray2.length; i++) {
  result += loopArray2[i]
}
console.log("sum of elements of the array are\n" + result);
/*
traversing 2d array
*/
var product = 1;
var twodArray = [
  [1, 3],
  [2, 4],
  [3, 5]
];
for (var i = 0; i < twodArray.length; i++) {
  for (var j = 0; j < twodArray[i].length; j++) {
    console.log("\t" + twodArray[i][j]);
    product *= twodArray[i][j];
  }
}
console.log(product);

/**
Genrate random functions
we use Math.random();
it genrates no. between 0 and 1 which can be equal to 0
but cannot be 1
**/
function randomFunction() {
  var random;
  switch (1) {
    case 1:
      console.log("genrating fraction random no. between 0 & 1");
      random = Math.random()
      console.log(random);
    case 2:
      console.log("genrating whole no.");
      console.log("again we use Math.random() with Math.floor()");
      console.log("random no. between 0 and a no. let say 20");
      random = Math.floor(Math.random() * 20); //give random no. between 0 and 20
      // math.floor() is use to round no. to nearest whole no.
      console.log(random);
      break;
    default:
      console.log("oh ho");

  }
}
randomFunction();

function randomRange(mymin, mymax) {
  console.log("function to genrate random no. between a range");
  return Math.floor(Math.random() * (mymax - mymin + 1)) + mymin;
}
var resultRandom = randomRange(5, 15);
console.log(resultRandom);
/****
parseInt()// use to convert an string into integer
****/
function convertToInt(str) {
  return parseInt(str);
}
console.log(convertToInt("76"));
/**
note if we pass a string that is not a number
the function will return NAN
**/
console.log(convertToInt("hello"));

/**
Using parseInt with radix
it accepts integer with a base.
by default the base is 10(decimal).
base can be 2 which represent binary.
8 represent octal
16 represent hexadecimal
it tell the compiler what kind of value is bieng converted
**/
function convertToRadixInt(val, base) {
  console.log("converting string to integer with a base");
  return (parseInt(val, base));
}
console.log(convertToRadixInt("1001", 2));

/****
ternary operation
it is one line if else condition statement
****/
function checkGreater(a, b) {
  console.log("finding greatest of two no. using ");
  let r = a > b ? a : b;
  return r;
}
console.log(checkGreater(10, 4));

/*****
coplex ternary operators also called as complex ternary operators.
*****/
function checkSign(num) {
  console.log("checking wether the num is positive negative or zero");
  let r = (num > 0 ? "positive" : (num < 0 ? "negative" : "zero"));
  return r;
}
console.log(checkSign(0));
/***
Somemore diffrence between var and let keyword.
let keyword don't let you declare a variable twice.
****/
let dog = "camper";
//let dog="ghost";//this will give you error
/*
"use strict"
it is use to check put validation on JavaScript code
for better code redability.
for ex-
if you declare a variable "use script make sure it gets initialized"
developers declare use script at the top of there
"use script"
**/
/*
when we declare a variable with "var" it is
global to the program.
and can be used anywhere inside the program
when we declare a variable with "let" keyword it is  local to the scope in which it is defined
*/
function checkscope() {
  var scp = "function scope";
  if (true) {
    var scp = "block scope";
    console.log(scp); // block scope cause var is global
  }
  console.log(scp); // block scope
}
checkscope();

function checkscope1() {
  var scp = "function scope";
  if (true) {
    let scp = "block scope";
    console.log(scp); // block scope cause let is local to block
  }
  console.log(scp); // function scope
}
checkscope1();


function checkscope2() {
  //let scp="function scope"; // if we undeclare it
  if (true) {
    let scp = "block scope";
    console.log(scp); // block scope cause let is local to block
  }
  console.log(scp); // error cause scp is not declared in the outer block
}
//checkscope2();

function checkscope3() {
  //let scp="function scope"; // if we undeclare it
  if (true) {
    var scp = "block scope";
    console.log(scp); // block scope cause var is global
  }
  console.log(scp); // block scope since scp is global and can be used anywhere.
}
checkscope3();

/*****
CONST keyword in javascript
variable declared with keyword "const" are readonly.
it has all the property of let keyword
it cannot be reassign it once declare and initialized
thus read readonly
*****/
function readOnly() {
  const README = "I AM COOL";
  console.log(README);
  //README="I HATE MYSELF";//error- re assigment to constant variable
  console.log(README);
}
readOnly();
/**
array declared with const are readonly.
but also they can be mutable using bracket notation
**/
const s = [5, 7, 2];
console.log("declaring const array");
console.log(s);

function editInPlace() {
  console.log("Updating elements OF CONST ARRAY");
  "use strict"
  //s=[2,5,6];//this will give error as
  s[0] = 2;
  s[1] = 7;
  s[2] = 5;
  console.log(s);
}
editInPlace();


/*ANONYMOUS FUNCTION IN JAVASCRIPT
var bob = function(){
		...
	};
	bob();
declares an unnamed function and assigns it to a new variable named "bob".
this is how anonymous function works
*/
/*
Anonymous  function
ie function with no name
syntax for declaring anonymous function
let example=function(){
...
..
function body
....
retun var
}
now there are two ways to call anonymous functions
1.call them with variable name
2.(); //<= using call symbol at the end of fuction block
which will look like this
*/
/*Anonymous  function
ie function with no name
syntax for declaring anonymous function
let example=function(){
...
..
function body
....
retun var
}();*/
/*Anonymous function with no argumnetns*/
let todayDate = function () {
  return Date();
}
console.log(todayDate());

/*Anonymous function with argumnetns*/
let myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
}
/*we still have to make function calls*/
console.log(myConcat([1, 2], [1, 2, 3]));

/*anonymous function can be converted to arrow functions*/
/*
ARROW FUNCTION
remove function keyword and replace it with  "=>" keyword
*/
/*Arrow function with no argumnetns*/

console.log("arraow function with no argument");
let tDate = () => new Date();
console.log(tDate());

/*Arrow function with argumnetns*/

console.log("arraow function argument");
let arrayConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(arrayConcat([0, 2, 3], [1, 5, 7]));

/*
Higher oder functions
1. maps
2. filter
3. reduce
map,filter & reduce take function call as argument to process set of data
we use arrow functions when using higher order function.
*/
let realNumberArray = [2, -3, -4, 5, 6, 7, 8, 9];
let squareMe = (arr) => {
  let squareInteger = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squareInteger;
};

const SQUAREDINTEGER = squareMe(realNumberArray);
console.log(SQUAREDINTEGER);

/**
MORE WAYS TO WRITE HIGHER ORDER FUNCTION
function in javascript can take default values when no values are passed in
argument.
**/
const INCREMENT = function (number, value = 1) {
  return (number + value)
}
/**
The Above function when called
increment the no. by value.
if no value is passed as argument in function calls
default valuewill be taken which is 2
**/
console.log(INCREMENT(5)); //6
console.log(INCREMENT(5, 5)); //10

/**
REST OPERATOR
denoted by ...
it coverts the arguments passed in the function into an array
**/
console.log("REST OPERATOR"); {
  let sum = function (...args) {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3));
} {
  "use strict"
  console.log("easier version of above function");
  let digitSum = 0;
  let sum = function (...args) {
    console.log("arguments converted to array");
    console.log(args);
    for (let i = 0; i < args.length; i++) {
      digitSum += args[i];
    }
    return digitSum;
  }
  console.log(sum(2, 4, 8, 10));
}
/*
SPREAD OPERATOR
when we want to make a copy of the array.
and work on the the copy of array without affecting the orignal array
we use SPREAD OPERATOR
*/
arr1 = ["hello", "goodbye", 1, 45, 11];
console.log("spread operator");
let copy = function (arr1) {
  // lett arr2=arr1// here both array 1 and array 2 will point to same location
  console.log("orignal array passed as arguments");
  console.log(arr1);
  console.log("copying array 1");
  let arr2 = [...arr1];
  console.log("array 1 copied to array 2");
  console.log("orignally array 2");
  console.log(arr2);
  arr2[0] = "potato";
  arr2[1] = "chilis";
  console.log("array 2 updated");
  console.log(arr2);
  console.log("array 1 not affected");
  console.log(arr1);
  arr1[0] = "apple";
  arr1[1] = "mango";
  console.log("array 1 updated");
  console.log(arr1);
  console.log("array 2 not affected");
  console.log(arr2);
}
copy(arr1);
/**
Destructuring assigment
special syntax use to assign property values of the objects
to the variables
**/
console.log("Destructuring assigment");
var voxel = {
  x: 36,
  y: 32,
  z: 30,
};
//old method to assign property value to the VARIABLES
{ // Destructuring block
  let a = voxel.x;
  let b = voxel.b;
  let c = voxel.c;
  console.log("Destructuring assigment method");
  let {
    x: d,
    y: e,
    z: f
  } = voxel;
  /**
  the above statement represent same as:-
  let c=voxel.x;
  let d=voxel.b;
  let e=voxel.c;
  **/
  let voxelword = function (...number) {
    console.log("assigment using Destructuring assigment");
    console.log(number);
  } //voxelword ends
  voxelword(d, e, f);
  let temprature = {
    today: 43,
    tomrrow: 44
  };
  let getTemprature = function (temprature) {
    const {
      tomrrow: dTemprature
    } = temprature;
    return dTemprature;

  }
  console.log(getTemprature(temprature));
  /*
  Destructuring and nested objects
  */
  let localForcast = {
    today: {
      min: 35,
      max: 45
    },
    tomorrow: {
      min: 40,
      max: 46
    }
  };
  let getTemprature2 = function (localForcast) {
    console.log("accesing property of nested object using Destructure assigment");
    console.log("accessing max temprature of tomorrow");
    const {
      tomorrow: {
        max: temp
      }
    } = localForcast;
    return temp;
  }
  console.log(getTemprature2(localForcast));
  /** we can use  Destructuring assigment to assign the elements of the array
  to the variables **/
  const [a2, b2, , c2] = [10, 9, 8, 7];
  console.log(a2, b2, c2);
  /*
  place the variable at the index in Destructuring array.
  wich matches the index of the array whose element you want to extract
  */
  /*
  we can use spread and rest operator with Destructuring assigment operator
  i the example given below we are copying an array into another array
  such that its first two elements rae misiing
  */
  const arrSource = ["Hello", "hi", "goodbye", 20, 40, 90];
  let copySource = function (arrSource) {
    let [a1, b1, ...arrDestination] = arrSource;
    console.log("destination array");
    console.log(arrDestination);
    console.log("source array");
    console.log(arrSource);
    console.log("first two elements rae removed with and stored in variable");
    console.log("a=" + a1);
    console.log("b=" + b1);
  }(arrSource);
  /**
  use Destructuring assigment to pass an object
  as a functions parameters
  **/
  let stats = {
    max: 56.67,
    min: 10,
    median: 25.90
  };
  /*
  so now in the below function instead of passing the whole objects
  we pass only the values which are needed with the help of
  des assigment operator*/
  let half = function ({
    max,
    min
  }) {
    return ((max + min) / 2.0);
  }
  console.log(half(stats));
} // Destructuring block ends
/**
Template literal with multi-line and string interpolation
declared with ``//back tick found above tab keys.
so template literal accepts new line character..
and we can add variable name inside template literal itself
**/
const person = {
  name: "Zodiac Hasbro",
  age: 56
};
let greetings = `hello my name is ${person.name}!
I am ${person.age} years old`;
console.log(greetings);

/**
we can add function to an object
**/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nnotes for js-es-6-part-1\ndate 27/april/2020\nUdemy course by dev \n*/\n\n/* JavaScript is a small, lightweight, object-oriented scripting language that connects to objects on host environments and provides programmatic control over them. Unlike Java, which runs on a system of classes, JavaScript supports small data types representing numeric, string, and true/false values.*/\n\n/*The Document Object Model (DOM) gives full access from JavaScript to dynamically create HTML with specific methods that modify the object representations of HTML elements.*/\n\n// prints the string into console\nconsole.log(\"hello to console external js file\");\n\n// converts your whole html into dom(document object model)\nconsole.log(document);\n\n// tells you that dom is one big object\nconsole.log(typeof (document));\n\n// gets the element with id header and insert provided string in it\ndocument.getElementById(\"header\").innerHTML = \"manipulating text using dom\";\n\n\n/*syntax in java-script*/\n/* \nsyntax represent set of rules to construct the programming language\nin syntax we have statements separated by ';' \n*/\nvar a, b;\n// here var is a keyword, js holds many keywords, keywords depict special meaning to the js compiler.\n// we are declaring a variable a and b using var keyword.\na = \"hello\";\nb = a + \" world!!\"\nconsole.log(b);\n// concatenation of two strings \n// now b variable holds the value \"hello world!!\" \n\n// single line comments \n\n/*\nmultiple line comments\ncomments are skipped by the compiler and are there for programmers readability\n*/\n\n/*\nin java script variable that hold some values are called identifiers \nand we have to name the identifiers\nidentifier name cannot contain keywords.\nidentifiers cannot start with digits.\n*/\n\nvar english_greeting = \"Hello\"// a valid identifier\nvar spanishGreeting = \"Hola\" // a valid identifier\nconsole.log(english_greeting);\nconsole.log(spanishGreeting);\n// # numbers in js\n// # operators in js\na = 2;\nb = 9.2 + a; // addition on numbers\nconsole.log(b);// 11.2\n\nb = 9.2 - a; // subtraction on numbers\nconsole.log(b);//7.2\n\nb = 10 * a; // multiplication on numbers\nconsole.log(b);//20\n\nb = 10 / a; // division on numbers\nconsole.log(b);//5\n\nb = 10 % a; // modulus on numbers\nconsole.log(b);// 0\n// modulus is mainly used to check weather the number is even or not\n\n/*\nCoding exercise 1\nhelp fix the syntax\nof the following check function\n\nfunction check() {\n  variable a = 10;\n  Add 5 to a, and I want this to line to be a comment;\n  var b = a + 5;\n  return the b;\n}\n\n*/\n// correct syntax\nfunction check() {\n    var a = 10;\n    // Add 5 to a, and I want this to line to be a comment;\n    var b = a + 5;\n    return b;\n}\n\nfunction print1(a, b, c) {\n    console.log(\"function print with 3 arguments\")\n    console.log(a + b + c);\n}\n// above is function definition\n// function are block of code that perform a certain task\n// in this case concatenation\n// calling to function print taking three arguments\nprint1(\"hello \", \"js \", \"rocks\")\n\nfunction print2(a) {\n    console.log(\"function print with one argument\")\n    console.log(a)\n}\n// calling to function print taking one argument arguments\nprint2(10.5);\n\n\n//  different ways function can return a value;\n// by using return keyword and assigning function call to the variable\nconsole.log(\"basic way to call and return value from function\")\nvar result = check();\nconsole.log(result)\n\n// by using return keyword and assigning function definition to the variable\n// which act as function name\nvar concat = function (a, b) {\n    console.log(\"function is directly assigned to variable which act as function name\")\n    return a + b;\n}\nresult = concat(\"hello \", \"boom\");\nconsole.log(result);\n\n/* \nObjects in java script\n*/\n\nvar dog = {\n    name: \"buddy\",\n    breed: \"husky\",\n    weight: 60,\n    sound: function () {\n        console.log(\"woof woof\");\n    }\n};\nconsole.log(dog);\n// 1st way to access object\nconsole.log(dog.breed);\n// 2nd way to access object\nconsole.log(dog[\"name\"]);\n// calling function stored in the object\ndog.sound();\n\n/*\nCoding Exercise-2\nfix the function weight so that it accepts one argument and returns that argument\n\n\nvar dog = {\n  name: 'Buddy',\n  breed: 'Golden Retriever',\n  weight: 60\n}\n\nfunction weigh() {\n\n}\n\nweigh(dog.weight);\n*/\n\n// solution\nfunction weigh(weight) {\n    return weight;\n};\nweigh(dog.weight);\n\n/*\nArrays in java script;\n*/\n\nvar points = [25, 16, 8, 3, 2];\nconsole.log(points);\n//shift fetch and returns last element from the array\nvar firstElement = points.shift();\nconsole.log(\"first element->\" + firstElement);\nconsole.log(points);\n\n//unshift insert element to the beginning of array points\nconsole.log(\"unshift operation\");\npoints.unshift(firstElement);\nconsole.log(points);\n\n\n//pop fetch and return last element from array\nvar lastElement = points.pop();\nconsole.log(\"last elements->\" + lastElement)\n\n//push insert element to the last of the array\nconsole.log(points);\nconsole.log(\"push operation\");\npoints.push(lastElement);\nconsole.log(points);\n\n/*Booleans in js*/\n// boolean holds two values\n// true=1 or any other positive number;\n// false=0\nvar a = true\nconsole.log(a);\nconsole.log(typeof a)\n\n// comparison operator returns a boolean values\na = 5 == 5; // true\nconsole.log(a);\n\na = 5 == 7; // false\nconsole.log(a);\n\na = 5 <= 7; // true\nconsole.log(a);\n\na = 5 >= 7; // false\nconsole.log(a);\n\n/*\nCondition statement in java-script\n*/\nif (a) {\n    console.log(\"value of a->\" + a);\n}\n\n/*\nconditional statements are very powerful and are use to run a specific block of code made on decision.\n\na helper function to check weather the number is even or odd\n*/\n\nvar checkNumber = function (a) {\n    if (a < 0) {\n        console.log(a + \" is negative\");\n    }\n    else if (a % 2 == 0) {\n        console.log(a + \" is even\");\n    }\n    else {\n        console.log(a + \" is odd\");\n    }\n}\ncheckNumber(10);\ncheckNumber(9);\ncheckNumber(-10);\n\n\nconsole.log(\"switch case in java script\")\nvar a = 10;\nswitch (a) {\n    case 1:\n        console.log(\"a is one\");\n        break;\n    case 2:\n        console.log(\"a is two\");\n        break;\n    case 3:\n        console.log(\"a is three\");\n        break;\n    default:\n        console.log(\"value of a is->\", a);\n        break;\n}\n\n/* for loops in js*/\n// for loop is use when we know exactly how many times we want to repeat a block of code. \nconsole.log(\"for loop\")\nfor (var i = 0; i <= 10; i = i + 1) {\n    console.log(i);\n}\n\nvar names = [\"frodo\", \"marry\", \"sam\", \"pippin\"];\n\nconsole.log(\"for loop to print array\");\nfor (var i = 0; i < names.length; i++) {\n    console.log(names[i]);\n}\n\n// while loops are entry controlled loops i.e\n// condition are checked at the starting of the loop\nconsole.log(\"while loop to print array\");\ni = 0;\nwhile (i < names.length) {\n    console.log(names[i]);\n    i++;\n}\n\n// do while loops are exit controlled loops i.e\n// condition are checked at the end of loop\n// loop will at least run one times \nconsole.log(\"do while loop to print array\");\ni = 0;\ndo {\n    console.log(names[i]);\n    i++;\n} while (i < names.length);\n\n\n/*\nCoding challenge-3\nShow Me the Evens - Show Me the Odds | Solution\nHere is the solution to the previous coding challenge and to helping Diana! The trick was to use the modulus to handle the even case and the odd case. You also had to increment by two each time within the loops. Lastly, you needed to make sure to start counting from 0 in the even case, and 1 in the odd case.\n*/\nfunction count(x) {\n    var numbers = [];\n    if (x % 2 == 0) {\n        for (var i = 0; i < x; i += 2) {\n            numbers.push(i);\n        }\n    } else {\n        for (var i = 1; i < x; i += 2) {\n            numbers.push(i);\n        }\n    }\n    return numbers;\n}\n\nvar result=count(10);\nconsole.log(result)\n\nvar result=count(7);\nconsole.log(result)\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ })

/******/ });
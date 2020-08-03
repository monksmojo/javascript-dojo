/*****
Object oriented programming in JavaScript
the important part.
source-freecodecamp.com
*****/
/***
BUILDING OF JAVASCRIPT OBJECT.
objects are simmilar to the arrays in javascript.
But instead of using indexes we use properties to access the elemnts.
***/
/**
important rule to declare objects in javascript
1.always use "=" after declaring object name with "var" keyword;
2.properties and vlues come inside "{}"
3. object always end with semicolon ";".
**/
var person={
  "name":"naruto",
  "age":24,
  "gender":"male",
  "hobbies":["playing ninja","acting dumb","eating ramen"]
  //hokage;
  //jutsu;
  // best friends
};
/*
accessing values of the object using property
we have 2 methods to access the value of the object
1. . notation
2. [] bracket notation
bracket notation is required when we have space between property name.
*/
//accessing values of object using dot notation

var personName=person.name;
console.log(personName);
console.log(person.gender);
var personAge=person["age"];
console.log(personAge);

/*
Updating object properties.
we can update object properties valuues.
for ex- updating the age property value of person object.
*/

console.log("updating object property value");
person.age=18;
console.log(person.age);
console.log(JSON.stringify(person));
//JSON.stringify converts object into string.

/*
Add property and value to the Object
we can add property and its value to an object using . and [] notation
for ex-adding current role property in person object.
*/

console.log("adding property and value its to the objects");
person.currentRole="shinobi";
console.log(JSON.stringify(person));

/*
DELETING OBJECT PROPERTY
We can also delete object property.
using 'delete keyword'
*/


console.log("deleting current role property");
delete person.currentRole;

/******
hasOwnProperty
it is used tocheck wether an objevt has the specified property.
it return True when property is found else return false.
******/
function checkProperty(val){
  console.log("checking property");
  if (person.hasOwnProperty(val)) {
    console.log("property found");
  }
  else {
    console.log("property not found");
  }
}
checkProperty("name");
checkProperty("currentRole");

/*
Object property can be integer also.
Object value can be accessed using variable with value of property.
*/
var city={
  1:"montana",
  "second":"new york",
  3:"holland"
};
/**
IMPORTANT!!!
while using variables to access the values of the object.
one must use bracket [] notations
**/
var v1=1;
var v2="second";
var cityName=city[v1];
console.log(cityName);
console.log(city[v2]);
/*******
OBJECTS FOR LOOKUP
we can replace switch statement with object.
object with key value pair can be used in case of switch
********/
function phoneBook(val){
  console.log("using object for lookup");
  var lookUp={
    "alpha":"arrow",
    "beta":"bethoven",
    "charlie" : "chicago",
    "delta":"denver"
  };
  return(lookUp[val]);
}
console.log(phoneBook("delta"));

/*
Manipulating Complex Objects
we can store multiple objects inside an array.
*/
var myFriends=[
  {
    "name":"sasuke",
    "age":18,
    "gender":"male",
    "hobbies":["playing revenge","acting cold"]
  },//end of 0 index
  {
    "name":"sakura",
    "age":20,
    "gender":"female",
    "hobbies":["caring","healing","beating asses"]
  }//end of 1st index
]//end of array
/*
accessing the nested array inside array of objects.
*/
console.log(myFriends[0].hobbies[0]);//playing revenge
console.log(myFriends[1].gender);// female
/******
Creating Complex & nested objects.
you can define one object inside the another
******/
var myStorage={
  "car":{
    "inside":{
      "glove box":"maps",
      "passsenger seat":"crumbs"
    },// car child object-1,
    "outside":{
      "trunk":"jack"
    }// car child object-2
  }// storage child object-1
};//parent object
console.log("accessing nested objects");
var gloveBoxContent=myStorage.car.inside["glove box"];
console.log(gloveBoxContent);

/****
Updating the property and values of complex and nested objects
****/
var myRecords={
  121:{
    "artist":"artic monkeys",
    "albums":"AM",
    "tracks":["brian strom","crying lightning","my propeller"]
  },
  100:{
    "artist":"The Black keys",
    "album":"the el camino",
    "tracks":["brothers","go"]
  },
  99:{
    "artist":"twenty one pilots",
    "album":"",
    "tracks":[]
  }
};

var recordCopy=JSON.parse(JSON.stringify(myRecords));

function updateRecods(id,prop,value){
  if(value===""){
    delete myRecords[id][prop]
  }
  else if (prop === "tracks") {
    myRecords[id][prop]=myRecords[id][prop]||[];
    myRecords[id][prop].push(value);
  }
  else {
    myRecords[id][prop]=value
  }
  return myRecords;
}
console.log(updateRecods(99,"album","blurryface"));
console.log(updateRecods(99,"tracks","no doubt"));
/*
Searching and returning property value  of an object  in an array of objets
*/
/*we use this array to search
var myFriends=[
  {
    "name":"sasuke",
    "age":18,
    "gender":"male",
    "hobbies":["playing revenge","acting cold"]
  },//end of 0 index
  {
    "name":"sakura",
    "age":20,
    "gender":"female",
    "hobbies":["caring","healing","beating asses"]
  }//end of 1st index
]//end of array
*/
function searchFriends(fname,prop){
  for (var i = 0; i < myFriends.length; i++) {
    if(myFriends[i].name==fname){
      return(myFriends[i][prop]||"no such property exist");
    }
  }
}
console.log(searchFriends("sakura","hobbies"));

/***
Constant Objects
***/
function freezeObject(){
  "use strict";
  const MATHCONSTANT={
    "PI":3.14
  };
  /*
  try{
    MATHCONSTANT.PI=5.15//this will change the PI value
  }catch(ex){
  console.log(ex); }
  and no exception will be thrown
  but if you want your object to not change its property value use
  Object.freeze(OBJECTNAME)
*/
Object.freeze(MATHCONSTANT);
try{
  MATHCONSTANT.PI=5.15//this throw error
}catch(ex){
console.log(ex);
}
}
freezeObject();

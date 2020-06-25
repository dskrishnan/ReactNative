console.log("Welcome to React Native JS Quick Introduction!");

/*
    JavaScript is Interpreted. Each Browser has its own JS engine, which either interprets the code, or uses some sort of lazy compilation
        -> V8: Chrome & Node js
        -> SpiderMonkey: FireFox
        -> JavaScriptCore: Safari
        -> Chakra: Microsoft Edge
    Each of these implement ECMAScript Standard, but may differ for anything not defined by the standard.

*/

//Syntax

const firstName = "Santhanakrishnan"; // Double Quotes works
const lastName = 'Dhandapani'; // Single Quotes works equally as well
const val = 23 // Semi colan at the end is optional

const arr = [
                'Learning', 
                100, 
                true, 
                function(){ // Function can be an Array member
                    console.log('Hello from Array')
                }, // This extra Comma at the end doesn't affect JS. But a missing comma in between will give error.
            ];
arr[3](); // This will refer the 3rd member which is a function in this case.

for (let i = 0; i< arr.length; i++){
    console.log(arr[i])
}

/**
 Data Types
 *      Dynamic Typing - Variable accepts Strings or numbers. Not a problem.
 *      Primitive Types
 *          undefined
 *          null
 *          boolean
 *          number
 *          string
 *          (symbol)
 *      Objects
 */

 //Type Casting or Coercion --> Explicit vs Implicit Coercion
 const x = 100;
 const explicit = String(x); // explicit === "100"
 const implicit = x + ""; //implicit === "100"

 /**
  * == vs ===
  *     ==  Coerces the types
  *     === Requires equivalent types
  * 
  * Which values are falsy?
  *     undefined
  *     null
  *     false
  *     +0, -0, NaN,
  *     "" // Empty String is a Falsy
  * 
  * Which values are truthy?
  *     {}
  *     []
  *     Everything else
  */




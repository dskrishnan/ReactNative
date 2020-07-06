console.log("JavaScript Deep Dive");

/*
    JavaScript is Interpreted. Each Browser has its own JS engine, which either interprets the code, or uses some sort of lazy compilation
        -> V8: Chrome & Node js
        -> SpiderMonkey: FireFox
        -> JavaScriptCore: Safari
        -> Chakra: Microsoft Edge
    Each of these implement ECMAScript Standard, but may differ for anything not defined by the standard.

*/

/**
 * Syntax Parser: A program that reads your code and determines what it does and if it's grammar is valid.
 * 
 * Your code isn't magic. Someone else wrote a program to translate it for the computer.
 *          Your Code --> [Syntax Parser] --> Machine Understandable Code
 */

/**
 * Lexical Environment: Where something sits physically in the code you write.
 * 
 * 'Lexical' means 'having to do with words or grammar'. A Lexical environment exists in Programming languages
 * in which where you write something is important. This can also be considered as 'areas of code'
 * 
 * [N.B.: Not all programming languages have this special emphasis.]
 */

/**
 * Execution Context: A wrapper to help manage the code that is running.
 * 
 * There are lots of lexical environments. Which one is currently running is managed via execution contexts.
 * It can contain things beyond what you've written in the code.
 */

 /**
  * Name/Value Pair: A Name which maps to a unique value.
  * 
  * The name may be defined more than once, but it can have only one value in any given context.
  * Ex: Address = '100 Main St' // This is a Name/Value Pair
  * The value may be more name/value pairs.
  */

  /**
   * Object: A Collection of Name value Pairs.
   * The simplest definition when talking about JavaScript
   */

/**
 * Global Execution Context: When a JS file is executed, it creates a Global Object(window in Browsers) and a variable 'this'
 * in the lexical environment(Execution Context). This object & variable is available to all code inside the lexical environment.
 * Variables and Functions created globally are attached to the global object "this"(or "window" in Browsers).
 * Ex. var a = "Hello World" is equal to this.a and also equal to window.a in browsers.
 * i.e. this.a = window.a, both are equal to "Hello World"
 * 
 * Global in JS Means, "Not inside a Function".
 */

 /**
  * Hoisting: JavaScript engine/Syntax Parser creates execution context by Setting up Memory Space for
  * Variables and Functions by reading our code.
  * 
  * It puts the entire function and its code into Memory. But for Variables it creates a placeholder
  * called undefined in the execution context creation phase. Only while executing the actual code, variables
  * get their value.
  * 
  * All variables in JavaScript are initially set to 'Undefined' but functions are kept in memory in its entirety.
  */

  /**
   * Execution Mechanism: JavaScript Engine first creates a Global execution context. In that variables are set to undefined and functions are
   * kept in memory in its entirety.
   *
   * Then Function invocation may happen if a function is globally set to invoke. In JavaScript Invocation or calling or running a function happens
   * using paranthesis ().
   * 
   * Once a function is invoked, then function is invocation context is stacked on top the global execution context. Only after the completion of 
   * Function execution context, global execution context resumes.
   */

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




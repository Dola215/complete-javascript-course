// Values and Variables
/**
 * Variables are used to store the information
 * To create a variable in JavaScript, use the (var, let, const) keywords
 */
// create a variable
/**
 * declaration
 *  let auther;
 * assignment
 *  auther = "jonas";
 */
// const auther = "jonas";
// const language = "javascript";

// use a variable
// console.log(`start learning ${language} with ${auther}`.toUpperCase());
// Variable naming
/**
 * The name must contain only letters, digits, or the symbols $ and _
 * The first character must not be a digit.
 * Not be a Reserved names (let,const,for,while,var,function)
 */

// let $ = 1; // declared a variable with the name "$"
// let _ = 2; // and now a variable with the name "_"

// console.log($ + _); // 3
// Examples of incorrect variable names:
/**
 let 1a; // cannot start with a digit
 let my-name; // hyphens '-' aren't allowed in the name
*/
////////////////////////////////////
// Data Types
/**
 * * * JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically. * * *
 *
 * there are 2 values (PRIMITIVE or OBJECT)
 * ---> We can put any type in a variable
 * 
 *  1. Number: Floating point numbers Used for decimals and integers 
    2. String: Sequence of characters  Used for text 
        A string in JavaScript must be surrounded by quotes.
    3. Boolean: Logical type that can only be true or false Used for taking decisions  
    4. Undefined: Value taken by a variable that is not yet defined (‘empty value’) 
    5. Null: Also means ‘empty value’ 
        The special null value does not belong to any of the types described above.
        It’s just a special value which represents “nothing”, “empty” or “value unknown”.
    6. Symbol (ES2015): Value that is unique and cannot be changed
    7. BigInt (ES2020): Larger integers than the Number type can hold
 * 
 * 
 * Number: The number type represents both integer and floating point numbers.
 * we can use it with *, division /, addition +, subtraction -, and so on.
 *
 */
// let n = 123;
// n = 12.345;
/**
 * special numeric values
 * which also belong to numeric data type: Infinity, -Infinity and NaN.
 * Infinity represents the mathematical Infinity ∞.
 */
// We can get it as a result of division by zero:

// console.log(1 / 0); // Infinity
// String
// let str = "Hello";
// let str2 = "Single quotes are ok too";
// let phrase = `can embed another ${str}`;

/**
 * **** Syntax Parsers, Execution Contexts, Lexical Environments ****
 *  1. Syntax Parser:
 *  Note 1: the js code is not what actully is to the computer but a translation of it
 *  A syntax parser is a program that reads your code and determines if it is valid JavaScript. It also translates your code into something the computer can execute / understand
 * What it does:
 * -- Reads your code character by character.
 * -- Ensures the syntax is correct (e.g., proper use of brackets, semicolons, etc.)
 * -- Converts your code into an Abstract Syntax Tree (AST), which is a data structure the computer can understand
 *  Why it matters:
 * -- It helps you understand why certain syntax errors occur
 * -- It explains how JavaScript "understands" your code
 *
 *
 *  2. Execution Context
 *  it is an environment where JavaScript code is executed.
 * Types of Execution Contexts
 * -- Global Execution Context:
 * ---- Created when the JavaScript file first loads (window in browsers, global in Node.js)
 * -- Function Execution Context:
 * ---- Created whenever a function is invoked.
 * ---- Represents the local scope of that function.
 * -- Eval Execution Context:
 * ---- Created when code is executed inside an eval function.
 *  Components of an Execution Context:
 * -- Variable Environment: Stores variables, functions, and arguments.
 * -- Lexical Environment: Determines the scope and accessibility of variables
 * -- this Binding: Refers to the context in which the code is executed.
 *  Execution Context Lifecycle:
 * -- Creation Phase:
 * ---- The JavaScript engine sets up the environment (e.g., creates the global object, sets up memory space for variables and functions)
 * ---- Hoisting happens during this phase
 * -- Execution Phase
 * ---- The code is executed line by line
 * ---- Variables are assigned values, and functions are invoked.
 *
 *
 *
 * 3. Lexical Environment
 * - A lexical environment is a data structure that holds the mapping of identifiers (variable names) to their values and scopes.
 * - It determines where and how variables and functions are accessible.
 * Components of a Lexical Environment:
 * -- Environment Record: Stores the actual variable and function declarations.
 * -- Reference to the Outer Environment: Points to the parent lexical environment (e.g., the outer scope).
 *
 * Why it matters:
 * It explains scope and scope chain in JavaScript.
 * It determines how JavaScript resolves variable names (e.g., if a variable is not found in the current scope, JavaScript looks in the outer scope).
 *
 * note:
 *  --- The JavaScript engine creates an execution context for the global scope and for each function call
 *  --- During the creation phase of the execution context, the lexical environment is set up, which determines the scope and accessibility of variables and functions.
 *  --- During the execution phase, the code is executed line by line, and the lexical environment helps resolve variable names.
 *
 *
 * Syntax Parsers ensure your code is valid and convert it into executable instructions.
 * Execution Contexts manage the environment in which code is executed
 * Lexical Environments determine the scope and accessibility of variables and functions.
   // ex about scops / lexical scoping
   function outer() {
   let x = 10;
   function inner() {
      console.log(x); // 10 (x is accessible because of lexical scoping)
   }
   inner();
   }
   outer();
 */
/**
   let a = 1;
   function foo() {
      let b = 2;
      console.log(a + b); // 3
   }
   foo();
 1 - Syntax Parser: Validates the syntax of the code.
 2 - Global Execution Context:
    -- Creation Phase: Sets up memory for a and foo.
    -- Execution Phase: Assigns a = 1 and invokes foo().
 3 - Function Execution Context for foo:
    -- Creation Phase: Sets up memory for b.
    -- Execution Phase: Assigns b = 2 and executes console.log(a + b).
 4 - Lexical Environment:
    -- Inside foo, b is found in the local scope, and a is found in the outer (global) scope.
 */

/**
 * *********** let, const, var **********
 *  1. var
 * Key Characteristics:
 * - Function Scope: var is function-scoped
 * -- meaning they are only accessible within the function they are declared in, If declared outside a function, they become globally scoped
 * - Hoisting: var declarations are hoisted to the top of their function or global scope
 * -- only the declaration is hoisted, not the initialization
 * - Reassignment: var can be reassigned and updated.
 * - Redeclaration: var allows redeclaration of the same variable within the same scope.
 *
 * Issues with var:
 * - Lack of block scoping can lead to bugs.
 * - Hoisting can cause confusion and unexpected behavior
 * - Redeclaration can make code harder to maintain.
 *
 *
 * 2. let
 * introduced  to address the issues with var keyword.
 * Key Characteristics:
 * - Block Scope: Variables declared with let are block-scoped, meaning they are only accessible within the block ({}) they are declared in.
 * - Hoisting: let declarations are hoisted, but they are not initialized. (TDZ)
 * - Reassignment: Variables declared with let can be reassigned.
 * - Redeclaration: let does not allow redeclaration within the same scope.
 *
 * Benefits of let:
 * - Block scoping prevents accidental variable leaks.
 * - Temporal dead zone helps catch errors early.
 * - No redeclaration makes code more predictable.
// ex about var: Function Scope:
console.log("var exs");
function example() {
   var x = 10;
   if (true) {
      var x = 20; // Same variable as above
      console.log(x); // 20
   }
   console.log(x); // 20 (not 10, because var is function-scoped)
}
example();
// ex about var: Hoisting:
console.log(y); // undefined (hoisted but not initialized)
var y = 5;
console.log(y); // 5
*/
/** it look like this
 var y;
 console.log(y); --> undefined
 var y = 5; --> assignment is reached.
 console.log(y); --> 5
 */
/**
 * 
// ex about var: Redeclaration:
var a = 1;
var a = 2; // No error, even in strict mode
console.log(a); // 2

console.log("let exs");
// ex about let: block Scope:
function example() {
   let x = 10;
   if (true) {
      let x = 20; // Different variable new variable
      console.log(x); // 20
   }
   console.log(x); // 10 (block-scoped)
}
example();

// ex about let: Hoisting:
// console.log(lety); // ReferenceError: Cannot access 'y' before initialization
// let lety = 5;
// console.log(lety); // 5

function adel() {
   console.log("test");
   b();
}
adel();

function b() {
   c();
   
   function c() {
      console.log("test c");
   }
}
*/

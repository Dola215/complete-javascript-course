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

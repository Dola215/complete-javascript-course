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
const auther = "jonas";
const language = "javascript";

// use a variable
console.log(`start learning ${language} with ${auther}`.toUpperCase());
// Variable naming
/**
 * The name must contain only letters, digits, or the symbols $ and _
 * The first character must not be a digit.
 * Not be a Reserved names (let,const,for,while,var,function)
 */

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log($ + _); // 3
// Examples of incorrect variable names:
/**
 let 1a; // cannot start with a digit
 let my-name; // hyphens '-' aren't allowed in the name
*/

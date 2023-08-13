// Number data type
// Number are floating point numbers , hence they always have decimals
// Even if we don't define or see decimnals in numbers
// 23 is equivalent to 23.0
let age = 23;
console.log(typeof age);
// String data type
// String is a sequence of characters
let myName = 'Muhammad Asad Khalil Rao';

// Boolean data type
// Boolean data type can only take  either true logical value  or false logical value
// Boolean is always either true or false
let trueLogic = true;

// Undefined data type
// Undefined is the values taken by the variable that is not yet defined
// Variable that is not yet defined is the variable that is declared but not assigned
// any value
let variable_name;
console.log(variable_name);

// Assingning new value with a different data type to the same varaible
age = true;
console.log(age);

// true is a boolean value
// typeof is an operator that shows the type of value
console.log(typeof age);
console.log(typeof myName);

//*****************************************DYNAMIC TYPING*****************************/
// Dynamic typing means we can easily change the type of a value  that is hold by a
// variable

// Undefined type value of the variable
// type of the value of the new_variable is undefined
let new_variable;
console.log(typeof new_variable);
// Reassigning new value to undefined variable
new_variable = 'I have a new value';
console.log(typeof new_variable);

// ERROR in the type of operator
let null_value = null;
console.log(typeof null_value);

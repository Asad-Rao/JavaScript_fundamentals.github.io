// There are three different ways of declaring variable
// We use the const key word to declare variable that are not suppose to change
// at any point in the future
const birthYear = 2001;

// We cannot declare empty const varaible
// const empty_varible;

// Declaring a variable and assigning it a value without var,let and const key words does not create a variable but it creates a property on global object.
global_property = 'Global Property';
console.log(global_property);

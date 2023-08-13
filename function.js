// function key word is used to declare the function
function Nameoffunction() {
  // body of the function
  // Start of Curly braces indicate the body of the function
  console.log('Hi');
}
// Calling the function
Nameoffunction();

// Passing parameters/data to the name_of_function function
function name_of_function(paramerter_one, paramerter_two) {
  console.log(typeof paramerter_one, typeof paramerter_two);
  console.log(`Your first parameter is ${paramerter_one} and your second parameter is
  ${paramerter_two}`);
  const variable = paramerter_one + paramerter_two;
  // Returing the data from the function
  return variable;
}
const first_argument = Number(prompt('Enter your first argument'));
const second_argument = Number(prompt('Enter your second argument'));
// Calling the function
// Passing arguments to the function
// name_of_function(first_argument, second_argument);
// The data returned by the function must be printed
// first parameter and second_parameter are the inputs of the  name_of_function
console.log(name_of_function(first_argument, second_argument));

function function_one(function_one_paramaeter_one) {
  return function_one_paramaeter_one;
}
function function_two(
  function_two_paramaeter_one,
  function_two_paramaeter_two
) {
  console.log(function_two_paramaeter_one, function_two_paramaeter_two);
  // The return value of the function_one will be in below statement
  function_one(function_two_paramaeter_two);
  // Calling function_one inside function_two and
  //sending function_two_paramaeter_one as an argument
  console.log(function_one(function_two_paramaeter_one));
}
const function_two_argument_one = prompt(
  'Enter first argumment of function two'
);
const function_two_argument_two = prompt(
  'Enter second argumment of function two'
);

// calling function_two will cause the console.log statement of functrion_two
//  be executed
function_two(function_two_argument_one, function_two_argument_two);
// Console logging function_two
// Following code will cause console.log statement inside the
// function_two function to be executed

console.log(function_two(function_two_argument_one, function_two_argument_two));

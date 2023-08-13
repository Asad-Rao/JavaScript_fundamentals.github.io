// parameter is like a local variable only avaiable inside the age_calculate function
function age_calculate(birthYear, currentYear) {
  // function body with {}
  if (birthYear === 0 || birthYear < 0 || birthYear > currentYear) {
    return 'Invalid Birth Year';
  } else {
    const age = currentYear - birthYear;
    // To take the value of age out of the age_calculate function
    // we return the value using return key word
    return age;
  }
}
const bith_year_argument = Number(prompt('Enter birth year'));
const current_year_argument = Number(prompt('Enter current year'));
// printing the value returned by the age_calculate function
console.log(age_calculate(bith_year_argument, current_year_argument));

// FUNCTION EXPRESSION/Anonymous Function
// function keyword without name
// Define the parameter inside ()
// Define function body
const function_storing_variable = function (
  parameter_one,
  parameter_two // Function body
) {};
// age_calculate_anynymous is a variable storing the value returned by  the anynynous function
const age_calculate_anynymous = function (
  birthYear_parameter,
  currentYear_parameter
) {
  // function body with {}
  if (
    birthYear_parameter === 0 ||
    birthYear_parameter < 0 ||
    birthYear_parameter > currentYear_parameter
  ) {
    return 'Invalid Birth Year';
  } else {
    const age = currentYear_parameter - birthYear_parameter;
    // To take the value of age out of the age_calculate function
    // we return the value using return key word
    return age;
  }
};
const birth_year_anonymous_function_argument = Number(
  prompt('Enter Birth Year Argument')
);
const current_year_anonymous_function_argument = Number(
  prompt('Enter Current Year')
);
// Calling a anynymous function
console.log(
  age_calculate_anynymous(
    birth_year_anonymous_function_argument,
    current_year_anonymous_function_argument
  )
);

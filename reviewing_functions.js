const age_calculation = function (birthYear_parameter, currentYear_parameter) {
  const age = currentYear_parameter - birthYear_parameter;
  // To take the value of age out of the age_calculate function
  // we return the value using return key word
  return age;
};
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
    // Calling a anynymous function
    return age_calculation(
      birth_year_anonymous_function_argument,
      current_year_anonymous_function_argument
    );
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

// Arrow function
// const variable_storing_arrow_function=(parameter_one,parameter_two)=>expression
// After the => we write the expression
const age_calculate = (birth_year_parameter, current_year_parameter) =>
  birth_year_parameter - current_year_parameter;
const current_year_argument = Number(prompt('Enter current year'));
const birth_year_argument = Number(prompt('Enter current birth'));
// Calling arrow function
// and
// Saving the returned value by arrow function in variable
const result_age = age_calculate(current_year_argument, birth_year_argument);
console.log(result_age);

const result_years_left = (
  parameter_birth_year,
  parameter_current_year,
  retirement_age_parameter
) => {
  const age = parameter_current_year - parameter_birth_year;
  // In case of more than one line arrow function we have use return key word
  return retirement_age_parameter - age;
};
const birth_Year_argument = Number(prompt('Enter birth year'));
const current_Year_argument = Number(prompt('Enter current year'));
const retirement_age_argument = Number(prompt('Enter retirement age'));
// Capturing the return value from the arrow function and console logging it
console.log(
  result_years_left(
    birth_Year_argument,
    current_Year_argument,
    retirement_age_argument
  )
);

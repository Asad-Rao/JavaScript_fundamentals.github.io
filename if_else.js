const candidate_age = Number(prompt('Enter age of candidate'));
const minimum_age = 18;
if (console.log(candidate_age == minimum_age || candidate_age > minimum_age)) {
  console.log('Eligible');
} else {
  console.log(
    `Candidate below 18 is not eligible and will be eligible after ${
      minimum_age - candidate_age
    }`
  );
}
const birth_Year = 1998;
let century;
if (birth_Year <= 2000) {
  // century varaible declared inside the code block {} of if will
  // only be accessible inside the code block {}of if
  century = 20;
} else {
  //  century varaible declared inside the code block {} of if will
  // only be accessible inside the code block {}of if
  century = 21;
}

// Coding Challenge
let marks_mass = Number(prompt("Enter Mark's weight"));
let marks_height = parseFloat(prompt("Enter Mark's height"));
let john_mass = Number(prompt("Enter John's weight"));
let john_height = parseFloat(prompt("Enter John's height"));
let marks_BMI = marks_mass / Math.pow(marks_height, 2);
let john_BMI = john_mass / Math.pow(john_height, 2);
if (marks_BMI > john_BMI) {
  console.log(
    `Mark's BMI is (${marks_BMI})  higher than John's BMI (${john_BMI})`
  );
} else {
  console.log(
    `John's BMI is (${john_BMI})  higher than Mark's BMI (${marks_BMI})`
  );
}

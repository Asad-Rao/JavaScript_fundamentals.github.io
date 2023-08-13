let my_birth_year = 2000;
let current_year = 2023;
// - is the mathematical operator
let my_age = current_year - my_birth_year;

let friend_birth_year = 2001;
let friend_age = current_year - friend_birth_year;
console.log(current_year - my_birth_year > current_year - friend_birth_year);
// 23-2 is first then 21-2 hence result is 19
console.log(23 - 2 - 2);

// Defining two variables at the same time
// x and y hold undefined value
let x, y;
// Result of the subtraction will assinged to y then to x
x = y = 25 - 10 - 5;

let john_mass = 92;
let mark_mass = 78;
let john_height = 1.95;
let mark_height = 1.69;
let john_bmi = john_mass / john_height ** 2;
let mark_bmi = mark_mass / mark_height ** 2;
console.log(
  'BMI of John is ',
  john_bmi,
  'kg/m*m',
  'BMI of Mark is',
  mark_bmi,
  'kg/m*m'
);

let markHigherBMI = mark_bmi > john_bmi;
if (markHigherBMI) {
  console.log('Mark has higher BMI than John');
} else {
  console.log('John has higher BMI than Mark');
}

john_mass = 85;
mark_mass = 95;
john_height = 1.76;
mark_height = 1.88;
john_bmi = john_mass / john_height ** 2;
mark_bmi = mark_mass / mark_height ** 2;
console.log(
  'BMI of John is ',
  john_bmi,
  'kg/m*m',
  'BMI of Mark is',
  mark_bmi,
  'kg/m*m'
);

markHigherBMI = mark_bmi > john_bmi;
if (markHigherBMI) {
  console.log('Mark has higher BMI than John');
} else {
  console.log('John has higher BMI than Mark');
}

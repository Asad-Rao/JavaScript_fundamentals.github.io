for (let index = 0; index < 10; index++) {
  console.log(`The value of the index is ${index}`);
}
console.log('Out of the for loop');
for (let index = 11; index < 10; index++) {
  console.log(`The value of the index is ${index}`);
}
console.log('Out of the for loop');
const name_array = [
  'Asad',
  'Khalil',
  2023 - 2001,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];
for (let index = 0; index < name_array.length; index++) {
  const element = name_array[index];
  // Reading elements from name_array
  console.log(element, typeof element);
}
// Adding Elements in array
const empty_array = [];
for (let index = 0; index < name_array.length; index++) {
  // Adding the typeof elements of name_array in empty_array
  empty_array.push(typeof name_array[index]);
  console.log(empty_array[index]);
}
const birth_years = [1991, 2007, 1969, 2020];
const empty_new_array = [];
for (index = 0; index < birth_years.length; index++) {
  const current_year = 2023;
  empty_new_array.push(current_year - birth_years[index]);
}
console.log(empty_new_array);
//Continue and Break
const my_name_array = [
  'Asad',
  'Khalil',
  2023 - 2001,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];
for (let index = 0; index < my_name_array.length; index++) {
  if (typeof my_name_array[index] !== 'string') continue;
  // After continue all the elements of type other than string will be skipped cause typeof my_name_array[index] !== 'string' will reult in true only when typeof my_name_array[index] is not a string
  // and continue statement is executed and hence all the elements are skipped that are not string leaving behind the string elements
  console.log(my_name_array[index]);
  if (typeof my_name_array[index] === 'number') break;
  console.log(my_name_array[index]);
}

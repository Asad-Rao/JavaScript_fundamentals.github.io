const name_of_arrays = ['Wilson', 'Michael', 'House', 'James', 'Gregory'];
name_of_arrays[1] = 'New Value';
name_of_arrays = ['W', 'M', 'H', 'J', 'G'];
const name_of_arrays_two = new Array(
  'Wilson',
  'Michael',
  'House',
  'James',
  'Gregory'
);
console.log(name_of_arrays_two[name_of_arrays_two.length - 1]);
const current_year = Number(prompt('Enter current year'));
const birth_year = Number(prompt('Enter Birth year'));
const name_of_array_three_sub = ['A', 'B', 'C'];
const name_of_array_three = [
  'Asad',
  'Khalil',
  current_year - birth_year,
  true,
  name_of_array_three_sub,
];
console.log(name_of_array_three[name_of_array_three.length - 1]);
const number_of_previous_years = Number(prompt('Enter number of past years'));
const current_entered = Number(prompt('Enter current year'));
const calcAge = function (years) {
  console.log(years);
  for (let index = 0; index < years.length; index++) {
    console.log(
      'The age of user in  ' +
        years[index] +
        '  is ' +
        (current_entered - years[index])
    );
  }
};
const years = [];
for (let index = 0; index < number_of_previous_years; index++) {
  const years_entered = Number(prompt('Enter past years'));
  years[index] = years_entered;
}
console.log(years);
console.log(calcAge(years));

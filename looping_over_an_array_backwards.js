const my_array = [
  'Asad',
  2023 - 2001,
  'student',
  ['Michael', 'Peter', 'Steven'],
];
console.log(my_array.length);
for (let index = my_array.length - 1; index >= 0; index--) {
  console.log(my_array[index]);
}
for (let index = 1; index < 4; index++) {
  console.log(`_________Starting Exercise Number ${index}__________________`);
  for (let index_done = 1; index_done < 6; index_done++) {
    console.log(
      `Exercise ${index}, Number of exercise repition: ${index_done}`
    );
  }
}

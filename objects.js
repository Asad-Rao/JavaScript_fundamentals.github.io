const name_of_object = {
  key_one: 'value',
  key_two: 2,
  key_three: true,
  key_four: false,
};
console.log(name_of_object.key_four);
const student = {
  firstName: 'John',
  lastName: 'Crane',
  name: 'A',
  gender: 'male',
  roll_number: 12345567,
  present: true,
  grade: 'Alpha',
  age: 20,
  friends: ['B', 'C', 'D', 'E', 'F', 'G'],
  object: sub_student,
};
console.log(student.sub_student.firstName);
const sub_student = {
  firstName: 'sub_student',
  lastName: 'last_sub_name',
  name: 'sub_studen_name',
};
console.log(
  `${student.firstName} ${student.lastName} has ${student.friends.length} friends, his best friend is Mr ${student.friends[3]}`
);
console.log(student.friends[6]);
// console.log(nameofobject["nameofproperty"])
console.log(student['roll_number']);
const property_name = 'Name';
console.log(student['first' + property_name]);
console.log(student['last' + property_name]);
const interested_In = prompt(
  'What do you want to know about me?Choose firstName,lastName,age,job and friends?'
);
if (student[interested_In]) {
  console.log(student[interested_In]);
} else {
  console.log('Invalid Property');
}
// Adding new properties to an object
// name_of_object.new_propery = 'some_value';
student.location = 'Portugal';
console.log(student.location);
// name_of_object['new_property'] = 'new_value';
student['email'] = '@student.com';
console.log(student['email']);

const jonas = {
  name: 'Jonas',
  number_of_friends: 3,
  best_friends: ['Michael', 'William', 'Wilson'],
};

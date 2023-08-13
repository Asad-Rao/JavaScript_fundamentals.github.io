const student = {
  firstName: 'John',
  lastName: 'Crane',
  name: 'A',
  birth_year: 2001,
  current_year: 2023,
  gender: 'male',
  roll_number: 12345567,
  present: true,
  grade: 'Alpha',
  friends: ['B', 'C', 'D', 'E', 'F', 'G'],
  has_driver_liscense: true,
  // Adding a function inside object as key value pair
  // name of the function as key/property
  // Writing function expression as value of the key/property
  age_calculation: function (birth_year, current_year) {
    if ((current_year > 0) & (current_year > birth_year)) {
      return current_year - birth_year;
    } else {
      return 'Invalid Birth Year';
    }
  },

  // USING this keyword
  my_age_calculation: function () {
    console.log(this);
    if ((this.current_year > 0) & (this.current_year > this.birth_year)) {
      return this.current_year - this.birth_year;
    } else {
      return 'Invalid Birth Year';
    }
  },
  age_calculation_using_new_property_this_key_word: function () {
    if ((this.current_year > 0) & (this.current_year > this.birth_year)) {
      // new_age_property is a newly created property using this key word
      //this newly created property is attached to student object as
      //student object is calling the age_calculation_using_new_property_this_key_word, hence this key word
      //points to the student object
      // Creating new property new_age_property on the current object, in our case student object
      // Using dot notation to create new properties and setting it to a new value
      this.new_age_property = this.current_year - this.birth_year;
      return this.new_age_property;
    } else {
      return 'Invalid Birth Year';
    }
  },
  get_summary: function () {
    return (this.overall_summary = `${this.firstName}  ${this.lastName} was born in ${this.birth_year}  he is ${current_year}-${birth_year} years old in ${current_year} , he lives in. lives in ${this.address}`);
  },
};
const birth_year = Number(prompt('Enter Birth Year'));
student['year_of_birth'] = birth_year;
const current_year = Number(prompt('Enter Current Year'));
student['present_year'] = current_year;
const student_location = prompt('Enter Location ');
student['address'] = student_location;
// Accesing method of the object using dot
// Using () to call the age_calculation method
console.log(student.age_calculation(birth_year, current_year));
// Accesiung the method using bracket notation
console.log(student['age_calculation'](birth_year, current_year));
// Using the property of the student object as an argument for the age_calculation  method
console.log(
  student['age_calculation'](student['year_of_birth'], student['present_year'])
);
// Accesing method of the object using dot
// Using () to call the age_calculation method
console.log(student.my_age_calculation());
// Calling age_calculation_using_new_property_this_key_word only once
student.age_calculation_using_new_property_this_key_word();
// Retriving the value of the property new_age_property
console.log(student.new_age_property);
// Retriving the value of the property new_age_property
console.log(student.new_age_property);

// Calling get_summary only once
student.get_summary();
// Retriving the value of the property overall_summary
console.log(student.overall_summary);

// CHALLENGE
const mark_miller = {
  first_name: 'Mark',
  last_name: 'Miller',
  mass: '',
  height: '',
  caclBMI: function () {
    return (this.bmi_mark_miller = this.mass / (this.height * this.height));
  },
};
const john_smith = {
  first_name: 'John',
  last_name: 'Smith',
  mass: '',
  height: '',
  caclBMI: function () {
    console.log(this.mass, this.height);
    return (this.bmi_john_smith = this.mass / (this.height * this.height));
  },
};
const mark_mass = Number(prompt("Enter Marks's Mass"));
const mark_height = Number(prompt("Enter Marks's Height"));
const john_mass = Number(prompt("Enter John's Mass"));
const john_height = Number(prompt("Enter John's Height"));
// GIVING VALUES TO THE PROPERTIES
mark_miller['mass'] = mark_mass;
mark_miller['height'] = mark_height;
john_smith['mass'] = john_mass;
john_smith['height'] = john_height;
// john_smith.caclBMI method call is essential as without this method call
// bmi_john_smith would not exist, we need to explicitely call it
john_smith.caclBMI();
// mark_miller.caclBMI(); method call is essential as without this method call mark_miller.bmi_mark_miller would not exist,we need to explicitely call it
mark_miller.caclBMI();
if (john_smith.bmi_john_smith > mark_miller.bmi_mark_miller) {
  console.log(
    `${john_smith.first_name} ${john_smith.last_name}'s   BMI (${john_smith.bmi_john_smith}) is higher than ${mark_miller.first_name} ${mark_miller.last_name} 's (${mark_miller.bmi_mark_miller})`
  );
} else {
  console.log(
    `${mark_miller.first_name} ${mark_miller.last_name}'s BMI (${john_smith.bmi_john_smith}) is higher than ${john_smith.first_name} ${john_smith.last_name} 's (${john_smith.bmi_john_smith})`
  );
}

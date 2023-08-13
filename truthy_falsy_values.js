// Converting 0 Number to boolean
console.log(Boolean(0));
// Converting Non-Zero Number to boolean
console.log(Boolean(-13.4));
// Converting Empty string to Boolean
console.log(Boolean(''));
// Converting Non-Empty string to Boolean
console.log(Boolean('Asad'));
//Converting Empty Object to Boolean
console.log(Boolean({}));
//Converting undefined Object to Boolean
console.log(Boolean(undefined));
//Converting NaN Object to Boolean
console.log(Boolean(NaN));
const money = 1;
// In the () brackets of if JavaScript will convert number to boolean
if (money) {
  console.log('Dont spend it all');
} else {
  console.log('Get a Job');
}

let height;
console.log(typeof height);
if (height) {
  console.log('Valid Height');
} else {
  console.log('Invalid Height');
}

// let age = 18;
// if (age === 18) console.log('You just turned 18');
let age = 19;
if (age === 18) console.log('You just turned 18');
console.log(18 == '18');
prompt('Hellllllllo   Brother');

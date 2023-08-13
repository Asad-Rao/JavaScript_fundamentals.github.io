const first_name = 'Asad';
const job = 'Web developer';
const birth_year = 2001;
const current_year = 2023;
// We use the + to concatenate the string
console.log(
  'My name is ' +
    first_name +
    ' I work as a ' +
    job +
    ' I was born in' +
    // JavaScript will simply convert birth_year number into string to concatenate
    birth_year +
    '  I am ' +
    // JavaScript will simply convert current_year - birth_year  number into string to concatenate
    (current_year - birth_year) +
    ' years old'
);

console.log(
  `My name is ${first_name}. I work as a ${job}. I was born in ${birth_year}. I am ${
    current_year - birth_year
  } years old`
);

console.log(
  'My name is Asad \n\
I am a web developer\n\
Nice to meet you.'
);
console.log(
  `My name is Asad
I am a web developer
Nice to meet you.`
);

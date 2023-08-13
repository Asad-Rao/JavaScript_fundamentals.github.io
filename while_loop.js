// while (condition) {}
// Setting initial value of the counter
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repitition ${rep}`);
  // Change the value of the counter
  rep++;
}

let random_number = Math.floor(Math.random() * 6) + 1;
console.log(random_number);
while (random_number !== 6) {
  console.log(`The dice number :${random_number}`);
  if (random_number === 6) break;
  random_number = Math.floor(Math.random() * 6) + 1;
}
console.log(`Congratulation the dice number :${random_number}`);

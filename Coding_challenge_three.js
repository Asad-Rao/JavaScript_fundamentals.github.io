const dolphin_score_one = Number(prompt('Enter First Match Score of Dolphin'));
const dolphin_score_two = Number(prompt('Enter Second Match Score of Dolphin'));
const dolphin_score_three = Number(
  prompt('Enter Third Match Score of Dolphin')
);
const sum_dolphin = dolphin_score_one + dolphin_score_two + dolphin_score_three;

const number_of_mactches = 3;
const average_dolphin = sum_dolphin / number_of_mactches;

const koalas_score_one = Number(prompt('Enter First Match Score of Koalas'));
const koalas_score_two = Number(prompt('Enter Second Match Score of Koalas'));
const koalas_score_three = Number(prompt('Enter Third Match Score of Koalas'));
const sum_koalas = koalas_score_one + koalas_score_two + koalas_score_three;
const average_koalas = sum_koalas / number_of_mactches;
const minimum_score = 100;
if (average_dolphin > average_koalas && average_dolphin >= minimum_score) {
  console.log('Dolphin  Wins');
} else if (
  average_dolphin < average_koalas &&
  average_koalas >= minimum_score
) {
  console.log('Koalas  Wins');
} else if (
  average_dolphin === average_koalas &&
  average_dolphin >= minimum_score &&
  average_koalas >= minimum_score
) {
  console.log('It is a Draw');
} else {
  console.log('No one wins the trophy');
}

let week_day_input = prompt('Enter one of the days of week');
let week_day = week_day_input.charAt(0).toUpperCase() + week_day_input.slice(1);
// Mapping one activity to each day
// we are switching is the day
// We are comparing week_day to multiple options
switch (week_day) {
  // After the case and the colon,all the lines are executed
  case 'Monday': //week_day===Monday , if this is true then code after : is executed
    console.log('Today is Monday');
    console.log('Today is first day of week');

    break;

  case 'Tuesday':
    console.log('Today is Tuesday');
    console.log('Today is second day of week');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday');
    console.log('Today is third day of week');
    break;
  case 'Thursday':
    console.log('Today is Thursday');
    console.log('Today is fourth day of week');
    break;
  case 'Friday':
    console.log('Today is Friday');
    console.log('Today is fifth day of week');
    break;
  case 'Saturday':
    console.log('Today is Saturday');
    console.log('Today is sixth day of week');
    break;
  case 'Sunday':
    console.log('Today is Sunday');
    console.log('Today is seventh day of week');
    break;
  //Default case is executed if all the other cases fail.
  default:
    console.log('Invalid Day');
}

// Using if else statement
if (week_day === 'Monday') {
  console.log('Today is Monday (using if else)');
} else if (week_day == 'Tuesday') {
  console.log('Today is Tuesday (using if else)');
} else if (week_day === 'Wednesday' || week_day === 'Thursday') {
  console.log('Today is Wednesday/Thursday (using if else)');
} else if (week_day === 'Friday') {
  console.log('Today is Friday (using if else)');
} else if (week_day === 'Saturday' || week_day === 'Sunday') {
  console.log('Today is Saturday/Sunday (using if else)');
} else {
  console.log('Invalid Day(using if else)');
}

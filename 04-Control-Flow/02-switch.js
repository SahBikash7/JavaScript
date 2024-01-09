// It is better to use switch statement rather than using the if-else ladder..
// The syntax for switch statement is:
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Matched With Default Case!!!");
}

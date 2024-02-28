let game = alert("გამოიცანი რიცხვი 1-დან 10-ის ჩათვლით");
let min = 1;
let max = 10;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);
let counter = 1;

while (true) {
  let userNum = prompt("შეიყვანე რიცხვი");
  if (userNum < random) {
    alert("უფრო მაღლა");
    counter++;
  } else if (userNum > random) {
    alert("უფრო დაბლა");
    counter++;
  } else {
    alert(`პასუხი სწორია, მცდელობების რაოდენობა ${counter}`);
    break;
  }
}

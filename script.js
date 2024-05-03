
let question = window.prompt("enter a number")

evenOrOdd(question);

function evenOrOdd (userNum) {
let num = userNum;
if (num % 2 == 0) {
  console.log( `${num} is even`)
} else{
  console.log(`${num} is odd`)
}
}


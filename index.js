const bill = document.querySelector("#bill");
const amount = document.querySelector("#amount");
const check = document.querySelector("#check");
const display = document.querySelector("#display");
const table = document.querySelector("#table");
const displayMessge = document.querySelector("#message");

let noteArray = [2000, 500, 100, 50, 10, 5, 1];
let billAmount;
let amountGiven;
let remainingAmount;
let message;

// const show = (msg) => {
//   display.style.display = "block";

//   if (msg == "Invalid") {
//     displayMessge.innerHTML = "ENTER CORRECT AMOUNT";
//     displayMessge.style.display = "block";
//   } else if (msg == "lessAmount") {
//     displayMessge.innerHTML = "You need more money";
//     displayMessge.style.display = "block";
//   } else {
//     table.style.display = "block";
//   }
// };

// const getValues = () => {
//   displayMessge.style.display = "none";
//   table.style.display = "none";

//   billAmount = Number(bill.value);
//   amountGiven = Number(amount.value);
//   if (billAmount < 0 || amountGiven < 0) {
//     message = "Invalid";
//   } else if (billAmount > amountGiven) {
//     message = "lessAmount";
//   } else {
//     message = "calculte";
//     remainingAmount = amountGiven - billAmount;
//   }

//   show(message);
// };

// check.addEventListener("click", getValues);

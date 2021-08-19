const bill = document.querySelector("#bill");
const amount = document.querySelector("#amount");
const check = document.querySelector("#btn-check");
const next = document.querySelector("#btn-next");
const table = document.querySelector("#table-display");
const displayMessge = document.querySelector("#message");
const notes = document.querySelectorAll(".notes");
const eAmount = document.querySelector("#enterAmount");

let noteArray = [2000, 500, 100, 50, 10, 5, 1];
let billAmount;
let amountGiven;
let remainingAmount;
let message;
const shownext = () => {
  next.style.display = "none";
  eAmount.style.display = "block";
  check.style.display = "block";
};
next.addEventListener("click", shownext);
const show = (msg) => {
  // display.style.display = "block";

  if (msg == "Invalid") {
    displayMessge.style.display = "block";
    displayMessge.innerHTML = "ENTER CORRECT AMOUNT";
  } else if (msg == "lessAmount") {
    displayMessge.style.display = "block";
    displayMessge.innerHTML = "YOU NEED MORE MONEY";
  } else {
    table.style.display = "block";
    for (i in notes) {
      notes[i].innerHTML = `${Math.trunc(remainingAmount / noteArray[i])}`;
      remainingAmount = remainingAmount % noteArray[i];
    }
  }
};

const getValues = () => {
  displayMessge.style.display = "none";
  table.style.display = "none";

  billAmount = Number(bill.value);
  amountGiven = Number(amount.value);
  if (billAmount < 0 || amountGiven < 0) {
    message = "Invalid";
  } else if (billAmount > amountGiven) {
    message = "lessAmount";
  } else {
    message = "calculte";
    remainingAmount = amountGiven - billAmount;
  }

  show(message);
};

check.addEventListener("click", getValues);

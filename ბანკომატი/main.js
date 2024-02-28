let balance = 1200;
function checkBalance() {
  alert(`ბალანსზე არსებული თანხა ${balance}`);
}

function depositingMoney() {
  let insert = parseFloat(prompt("შეიტანეთ თანხას"));
  balance += insert;
  alert(`ბალანსზე არსებული თანხა ${balance}`);
}

function returnBills(amount) {
  const billDenominations = [
    { bill: 100, quantity: 10 },
    { bill: 50, quantity: 10 },
    { bill: 20, quantity: 10 },
    { bill: 10, quantity: 10 },
    { bill: 5, quantity: 10 },
  ];

  let resultBills = [];
  for (let i = 0; i < billDenominations.length; i++) {
    const bill = billDenominations[i].bill;

    const quantity = Math.min(
      billDenominations[i].quantity,
      Math.floor(amount / bill)
    );

    if (quantity > 0) {
      for (let j = 0; j < quantity; j++) {
        resultBills.push(bill);
      }

      amount -= quantity * bill;
      billDenominations[i].quantity -= quantity;
    }
  }
  let total = 0;
  for (let i = 0; i < resultBills.length; i++) {
    total += resultBills[i];
  }
  balance -= total;
  alert(`გატანილი თანხა ${total} დარჩენილი თანხა ${balance}`);
}

function withdrawal() {
  let withdrawMoney = parseInt(prompt("მიუთითე თანხა"));
  returnBills(withdrawMoney);
}

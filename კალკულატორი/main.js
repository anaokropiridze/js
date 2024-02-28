function calculator() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  if (isNaN(num1) || isNaN(num2)) {
    alert("გთხოვთ დაწეროთ ციფრები");
  }

  switch (operation) {
    case "plus":
      result = num1 + num2;
      break;
    case "minus":
      result = num1 - num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
  }
  document.getElementById("result").innerHTML = result;
}

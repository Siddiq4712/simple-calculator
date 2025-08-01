function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = "Invalid input";

  if (!isNaN(num1) && !isNaN(num2)) {
    switch(operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";
        break;
    }
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}

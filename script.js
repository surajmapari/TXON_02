let display = document.getElementById('display');
let expression = document.getElementById('expression');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  expression.textContent = '';
}

function calculate() {
  try {
    const expr = display.value;
    const result = eval(expr);
    display.value = `${formatResult(result)}`;
    expression.textContent = `${expr}`;
  } catch (error) {
    display.value = 'Error';
    expression.textContent = '';
  }
}

function formatResult(result) {
  if (Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(2);
  }
}

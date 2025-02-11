import multiply from "./multiplier";
import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const clearButton = document.querySelector("#clear-button");
const sumButton = document.querySelector("#sumar-boton");
const multiplyButton = document.querySelector("#multiplicar-boton");

const getNumbers = () => {
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  return { firstNumber, secondNumber };
};

sumButton.addEventListener("click", (event) => {
  event.preventDefault();

  const { firstNumber, secondNumber } = getNumbers();
  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multiplyButton.addEventListener("click", (event) => {
  event.preventDefault();

  const { firstNumber, secondNumber } = getNumbers();
  div.innerHTML = "<p>" + multiply(firstNumber, secondNumber) + "</p>";
});

clearButton.addEventListener('click', function() {
  first.value = '';
  second.value = '';
  div.innerHTML = '';
});
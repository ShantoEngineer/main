let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let result = document.querySelector(".result");
let addButton = document.querySelector(".add-btn");
let subtractButton = document.querySelector(".subtract-btn");
let multiplyButton = document.querySelector(".multiply-btn");
let divideButton = document.querySelector(".divide-btn");

console.log(input1.value);

addButton.addEventListener("click", () => {
  let sum = Number(input1.value) + Number(input2.value);
  result.innerText = sum;
  input1.value = "";
  input2.value = "";
});

subtractButton.addEventListener("click", () => {
  let sub = Number(input1.value) - Number(input2.value);
  result.innerText = sub;
  input1.value = "";
  input2.value = "";
});

multiplyButton.addEventListener("click", () => {
  let multi = Number(input1.value) * Number(input2.value);
  result.innerText = multi;
  input1.value = "";
  input2.value = "";
});

divideButton.addEventListener("click", () => {
  let divide = Number(input1.value) / Number(input2.value);
  result.innerText = divide;
  input1.value = "";
  input2.value = "";
});

import render from "./render.js";
import switch_theme from "./switch_theme.js";

let viewfielder = document.getElementById("viewfielder");

document.querySelectorAll(".number-key").forEach(function (numberKey) {
  numberKey.addEventListener("click", function () {
    const valueKey = numberKey.dataset.value;
    render(valueKey);
  });
});

document.getElementById("allClear").addEventListener("click", function () {
  viewfielder.value = "";
});

document.getElementById("backspace").addEventListener("click", function () {
  viewfielder.value = viewfielder.value.slice(0, -1);
});

document.getElementById("result-key").addEventListener("click", function () {
  let result = eval(viewfielder.value).toString();
  if (result.split(".")[1] >= 2) {
    viewfielder.value = parseFloat(result).toFixed(2);
  } else {
    viewfielder.value = result;
  }
});

switch_theme();
document
  .getElementById("switch_theme")
  .addEventListener("change", switch_theme);

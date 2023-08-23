let viewfielder = document.getElementById("viewfielder");

document.querySelectorAll(".number-key").forEach(function (numberKey) {
  numberKey.addEventListener("click", function () {
    const valueKey = numberKey.dataset.value;

    if (!["/", "*", "-", "+"].includes(valueKey)) {
      viewfielder.value += valueKey;
    } else if (
      ["/", "*", "-", "+"].includes(valueKey) &&
      viewfielder.value.length > 0
    ) {
      let tempArray = viewfielder.value.split("");
      if (["/", "*", "-", "+"].includes(tempArray[tempArray.length - 1])) {
        tempArray[tempArray.length - 1] = valueKey;
        viewfielder.value = tempArray.join("");
      } else {
        viewfielder.value += valueKey;
      }
      console.log(tempArray);
    }
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

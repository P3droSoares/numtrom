export default function (valueKey) {
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
}
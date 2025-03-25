function calculateSum() {
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");
    if (num1 === null || num2 === null) {
        return;
    }
    document .getElementById("result").innerText = "Sum: " + (num1 + num2);
};
function calculateDiv() {
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");
    if (num1 === null || num2 === null) {
        return;
    }
    document .getElementById("result").innerText = "Div: " + (num1 / num2);
};
function calculateMult() {
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");
    if (num1 === null || num2 === null) {
        return;
    }
    document .getElementById("result").innerText = "Mult: " + (num1 * num2);
};
function calculateSubt() {
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");
    if (num1 === null || num2 === null) {
        return;
    }
    document .getElementById("result").innerText = "Subt: " + (num1 - num2);
};
function calculateMult() {
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");
    if (num1 === null || num2 === null) {
        return;
    }
    document .getElementById("result").innerText = "Mult: " + (num1 * num2);
};
function getNumber(id) {
    let value = parseFloat(document.getElementById(id).value);
    if(isNaN(value)) {
        document.getElementaryId("result").innetText = "Please enter a valid number";
        return null;
    }
    return value;
}
function clearFields() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("result").innerText = "";
}
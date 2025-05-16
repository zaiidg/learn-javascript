let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    // Render the sum of num1 and num2 in the paragraph with id="sum-el"
    sumEl.textContent = "Sum: " + (num1 + num2)
    console.log(sumEl.textContent)
}
function subtract() {
    sumEl.textContent = "Sum: " + (num1 - num2)
}
function divide() {
    sumEl.textContent = "Sum: " + (num1 / num2)
    console.log(sumEl.textContent)
}
function multiply() {
    sumEl.textContent = "Sum: " + (num1 * num2)
    console.log(sumEl.textContent)
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



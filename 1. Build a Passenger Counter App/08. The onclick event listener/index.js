// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
    console.log("The button was clicked")
    // get the current count
    let countEl = document.getElementById("count-el")
    // increment the count variable by 1
    count = countEl.innerText
    // convert count to a number
    count = parseInt(count)
    count += 1
    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count
    console.log(countEl.innerText)
}



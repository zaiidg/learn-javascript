// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    saveEl.innerText += " " + count + " - "
    console.log(count)
    count = 0
    countEl.innerText = 0
}



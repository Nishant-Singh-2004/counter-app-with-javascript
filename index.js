// document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

// console.log(saveEl)

let count = 0

// console.log(count)

function increment() {
    // console.log("click")
    count = count + 1
    countEl.textContent = count
    // console.log(count)
}


function save() {
    // console.log(count)
    let countStr = count + " - "

    saveEl.textContent += countStr

    countEl.textContent = 0

    count = 0

    // console.log(count)
}
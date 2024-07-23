let screen = document.querySelector("h1")

let buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.className === "") {
            screen.innerText += btn.value
        }
        else if (btn.className === "operator") {

        }
        else if (btn.className === "decimal") {

        }
        else if (btn.className === "clear") {

        }
        else if (btn.className === "equal-sign operator") {

        }
    })
})


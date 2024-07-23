let screen = document.querySelector("h1")
let leftOperand = "0", operator = null, rightOperand = null
let buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.className === "") {
            if (operator === null) {
                screen.innerText = (leftOperand === "0") ? (btn.value) : (leftOperand + btn.value)
            } else {
                screen.innerText = (rightOperand === "0" || rightOperand === null) ? (btn.value) : (rightOperand + btn.value)
            }
        }

        else if (btn.className === "operator") {
            if (rightOperand !== null) {
                if (btn.value === "+") {
                    screen.innerText = parseFloat(leftOperand) + parseFloat(screen.innerText)
                } else if (btn.value === "-") {
                    screen.innerText = parseFloat(leftOperand) - parseFloat(screen.innerText)
                } else if (btn.value === "*") {
                    screen.innerText = parseFloat(leftOperand) * parseFloat(screen.innerText) 
                } else {
                    if (screen.innerText === "0") {
                        screen.innerText = "Infinity"
                        leftOperand = null 
                    } else {
                        screen.innerText = parseFloat(leftOperand) / parseFloat(screen.innerText)
                    }
                }
                if (screen.innerText !== "Infinity") {
                    leftOperand = screen.innerText
                }
                rightOperand = null 
            }
            operator = btn.value 
            leftOperand = screen.innerText
        }
        else if (btn.className === "decimal") {
            screen.innerText = (screen.innerText.includes(".")) ? screen.innerText : (screen.innerText + ".")
        }
        else if (btn.className === "clear") {
            screen.innerText = "0"
        }
        else if (btn.className === "equal-sign operator") {

        }
    })
})


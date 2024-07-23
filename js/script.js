let screen = document.querySelector("h1")
let leftOperand = null, operator = null, rightOperand = null
let buttons = document.querySelectorAll("button")

function clearCalculator(screenText) {
    leftOperand = rightOperand = operator = null
    screen.innerText = screenText
}

function calculateCalculator() {
    if (operator === "+") {
        leftOperand = parseFloat(leftOperand) + parseFloat(rightOperand)
    } else if (operator === "-") {
        leftOperand = parseFloat(leftOperand) - parseFloat(rightOperand)
    } else if (operator === "*") {
        leftOperand = parseFloat(leftOperand) * parseFloat(rightOperand)
    } else {
        if (rightOperand === "0") {
            clearCalculator("Infinity")
        } else {
            leftOperand = parseFloat(leftOperand) / parseFloat(rightOperand)
        }
    }
    if (leftOperand !== null) {
        screen.innerText = leftOperand
        rightOperand = null
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.className === "") {
            if (operator === null) {
                leftOperand = (leftOperand === null || leftOperand === "0") ? btn.value : (leftOperand + btn.value)
                screen.innerText = leftOperand
            } else {
                rightOperand = (rightOperand === null || rightOperand === "0") ? btn.value : (rightOperand + btn.value)
                screen.innerText = rightOperand
            }
        }

        else if (btn.className === "operator") {
            if (operator === null || rightOperand === null) {
                operator = btn.value 
            } else {
                calculateCalculator()
            }
        }
        else if (btn.className === "decimal") {
            if (operator === null) {
                leftOperand = leftOperand.includes(".") ? leftOperand : (leftOperand + ".")
                screen.innerText = leftOperand
            } else {
                rightOperand = rightOperand.includes(".") ? rightOperand : (rightOperand + ".")
                screen.innerText = rightOperand
            }
        }
        else if (btn.className === "clear") {
            clearCalculator("0")
        }
        else if (btn.className === "equal-sign operator") {
            if (rightOperand !== null) {
                calculateCalculator()
            }
        }
    })
})


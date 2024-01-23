function isInputValid(input) {
    return input !== null && input.trim() !== "" && !isNaN(input);
}

function getArithmeticMean() {
    const firstNum = prompt("Введіть перше число: ");

    if (!isInputValid(firstNum)) {
        alert("Будь ласка, введіть дійсне число!");
        return;
    }

    const secondNum = prompt("Введіть друге число: ");

    if (!isInputValid(secondNum)) {
        alert("Будь ласка, введіть дійсне число!");
        return;
    }

    const thirdNum = prompt("Введіть третє число: ");

    if (!isInputValid(thirdNum)) {
        alert("Будь ласка, введіть дійсне число!");
        return;
    }

    const ariMean = (parseFloat(firstNum) + parseFloat(secondNum) + parseFloat(thirdNum)) / 3;
    const truncatedAriMean = ariMean.toFixed(2);
    alert(`Середнє арифметичне введених чисел: ${truncatedAriMean}`);
}

getArithmeticMean();

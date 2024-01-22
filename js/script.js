function getArithmeticMean() {
    const firstNum = prompt("Введіть перше число: ");

    if (firstNum === null || firstNum.trim() === "" || isNaN(firstNum)) {
        alert("Будь ласка, введіть дійсне число!");
    } else {
        const secondNum = prompt("Введіть друге число: ");
    
        if (secondNum === null || secondNum.trim() === "" || isNaN(secondNum)) {
            alert("Будь ласка, введіть дійсне число!");
        } else {
            const thirdNum = prompt("Введіть третє число: ");
    
            if (thirdNum === null || thirdNum.trim() === "" || isNaN(thirdNum)) {
                alert("Будь ласка, введіть дійсне число!");
            } else {
                
                const ariMean = (parseFloat(firstNum) + parseFloat(secondNum) + parseFloat(thirdNum)) / 3;
                const truncatedAriMean = ariMean.toFixed(2);
                alert(`Середнє арифметичне введених чисел: ${truncatedAriMean}`);
            }
        }
    }
}
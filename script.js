function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        resultElement.textContent = `The sum is: ${sum}`;
    } else {
        resultElement.textContent = 'Please enter valid numbers.';
    }
}

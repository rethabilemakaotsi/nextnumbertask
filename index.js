

function diplayNextNumber() {
    
    const currentNumber = parseFloat(document.getElementById('Number').value);

    if (isNaN(currentNumber)) {
        document.getElementById('result').textContent = 'Please enter a valid number.';
        return;
    }

    const nextNumber = currentNumber + 1;


    document.getElementById('result').textContent = `Next Number: ${nextNumber}`;
}
